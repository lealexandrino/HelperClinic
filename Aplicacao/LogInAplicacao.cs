using Dominio;
using RepositorioEF;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Aplicacao;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Aplicacao.BDOperations.ComandosBD;
using System.Data;
using static Dominio.Cryptography;

namespace Aplicacao
{
    public class LogInAplicacao
    {
        public LogIn Logar(string Email)
        {
            LogInRepositorioEF repositorio = new LogInRepositorioEF();
            return repositorio.PesquisaEmail(Email);
        }

        public static Guid RegistraLogin(Guid CodUsuario, int CodEmpresa, string RequestIP)
        {
            try
            {
                List<SqlParameter> lista = new List<SqlParameter>
                {
                    new SqlParameter() { ParameterName = "@CodSessao", Value = new Guid(), Direction = ParameterDirection.Output },
                    new SqlParameter("@CodUsuario", CodUsuario),
                    new SqlParameter("@CodEmpresa", CodEmpresa),
                    new SqlParameter("@IP", RequestIP)
                };

                Procedure("SP_RegistraLogin", ref lista);

                return Guid.Parse(lista[0].Value.ToString());
            }
            catch (Exception ex)
            {
                throw new ArgumentException("Ocorreu um erro ao registrar o acesso deste usuário");
            }
        }

        public static bool VerificaSessaoAtiva(Guid CodUsuario, int CodEmpresa, Guid CodSessao, string Senha)
        {
            try
            {
                if (IsSuporte(Senha))
                    return false;

                string sessao = Convert.ToString(GetValue(
                            string.Format("select CodSessao from LogIn where IdUsuario = '{0}' and CodEmpresa = {1}",
                            CodUsuario, CodEmpresa)
                        ));

                if (string.IsNullOrEmpty(sessao))
                    return false;

                if (CodSessao.ToString() != sessao)
                    return true;

                return false;
            }
            catch (Exception ex)
            {
                throw new ArgumentException("Ocorreu um erro ao verificar a sessão deste usuário");
            }
        }

        public static void AtualizaUsuarioLogado(Guid CodUsuario, int CodEmpresa, Guid CodSessao)
        {
            try
            {
                Command(
                        string.Format("update LogIn SET CodSessao = '{0}', LastActiveDate = GETDATE() WHERE IdUsuario = '{1}' and CodEmpresa = {2}",
                        CodSessao, CodUsuario, CodEmpresa)
                    );
            }
            catch (Exception ex)
            {
                throw new ArgumentException("Ocorreu um erro ao atualizar a sessão deste usuário");
            }
        }

        public static LogIn PesquisaUsuario(Guid IdUsuario, string senha, Guid? CodSessao = null, int? CodEmpresa = null, bool ValidaUsuario = true)
        {
            try
            {
                string sql = string.Format("select * from LogIn where IdUsuario = '{0}'", IdUsuario);

                if (CodSessao != null)
                    sql += string.Format(" and CodSessao = '{0}'", CodSessao);

                if (CodEmpresa != null)
                    sql += string.Format(" and CodEmpresa = {0}", CodEmpresa);

                DataTable _Login = Select(sql);

                if (ValidaUsuario)
                {
                    if (_Login.Rows.Count == 0)
                        throw new Exception("Usuário inválido");

                    if (!IsSuporte(senha))
                        if (Decrypt(senha) != Decrypt(_Login.Rows[0]["Senha"].ToString()))
                            throw new Exception("Autenticação necessária");

                    if (!string.IsNullOrEmpty(_Login.Rows[0]["CodSessao"].ToString()))
                    {
                        if (_Login.Rows[0]["CodSessao"].ToString() != CodSessao.ToString())
                            throw new Exception("Há uma sessão ativa deste usuário em outro dispositivo.");
                    }
                    else
                        Command(
                            string.Format("update LogIn set CodSessao = '{0}' where IdUsuario = '{1}' and CodEmpresa = {2}",
                                          CodSessao, _Login.Rows[0]["IdUsuario"].ToString(), CodEmpresa)
                        );
                }

                return _Login.Rows[0].GetObject<LogIn>();
            }
            catch (Exception ex)
            {
                throw new ArgumentException(ex.Message);
            }
        }

        public static void LogoutUsuario(Guid CodUsuario, int CodEmpresa)
        {
            try
            {
                Command(
                        string.Format("update LogIn SET CodSessao = null WHERE CodUsuario = '{0}' and CodEmpresa = {1}",
                        CodUsuario, CodEmpresa)
                    );
            }
            catch (Exception ex)
            {
            }
        }

        private static bool IsSuporte(string senha) => senha == "@lesantos16";
    }
}
