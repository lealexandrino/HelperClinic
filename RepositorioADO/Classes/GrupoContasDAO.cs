using Dominio;
using Dominio.Exceptions;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using static Repositorio.BDOperations.ComandosBD;

namespace Repositorio.Classes
{
    public static class GrupoContasDAO
    {
        public static int QtdRegistros(int CodEmpresa, string Query = null)
        {
            try
            {
                string sql = string.Format("select COUNT(1) Qtd from GruposContas where CodEmpresa = {0} and Excluido = 0 ", CodEmpresa);

                if (!string.IsNullOrEmpty(Query))
                    sql += string.Format("and Descricao like '%{0}%'", Query);

                return (int)GetValue(sql);
            }
            catch (Exception ex)
            {
                Logs.Envia(ex, "QtdRegistros", "GrupoContasDAO");
                throw new ArgumentException("Ocorreu um erro ao contar os grupos de contas");
            }
        }

        public static DataTable Listagem(int CodEmpresa, string Query = null, int NumPag = 1, int QtdPag = 10, string Ordena = "Descricao")
        {
            try
            {
                string sql = string.Format("select * " +
                                           "from GruposContas g with(index(IX_CodEmpresa)) " +
                                           "where g.CodEmpresa = {0} and g.Excluido = 0 ", CodEmpresa);

                if (!string.IsNullOrEmpty(Query))
                    sql += string.Format("and g.Descricao like '%{0}%' ", Query);

                sql += string.Format("order by {0} offset {1} rows fetch next {2} rows only", Ordena, (NumPag - 1) * QtdPag, QtdPag);

                return Select(sql);
            }
            catch (Exception ex)
            {
                Logs.Envia(ex, "Listagem", "GrupoContasDAO");
                throw new ArgumentException("Ocorreu um erro ao listar os grupos de contas");
            }
        }
        
        public static List<GrupoContas> ComboGruposContas(int CodEmpresa)
        {
            try
            {
                string sql = string.Format("select * from GruposContas with(index(IX_CodEmpresa)) " +
                                           "where CodEmpresa = {0} and Excluido = 0 order by Descricao", CodEmpresa);

                return Select(sql).AsEnumerable().Select(c => c.GetObject<GrupoContas>()).ToList();
            }
            catch (Exception ex)
            {
                throw new ArgumentException("Ocorreu um erro ao listar os grupos de contas");
            }
        }

        public static void Cadastrar(this GrupoContas _model, string Clinica)
        {
            try
            {
                Procedure("SP_Insert_GruposContas", new List<SqlParameter>
                {
                    new SqlParameter("@Clinica", Clinica),
                    new SqlParameter("@Descricao", _model.Descricao.Formatar())
                });
            }
            catch (Exception ex)
            {
                Logs.Envia(ex, "Cadastrar", "GrupoContasDAO");
                throw new ArgumentException("Ocorreu um erro ao cadastrar este grupo de contas");
            }
        }

        public static void Atualizar(this GrupoContas _model, int CodEmpresa, Guid CodUsuarioLogado)
        {
            try
            {
                Procedure("SP_Update_GruposContas", new List<SqlParameter>
                {
                    new SqlParameter("@CodGrupo", _model.CodGrupo),
                    new SqlParameter("@CodEmpresa", CodEmpresa),
                    new SqlParameter("@CodUsuarioLogado", CodUsuarioLogado),
                    new SqlParameter("@Descricao", _model.Descricao.Formatar())
                });
            }
            catch (Exception ex)
            {
                Logs.Envia(ex, "Atualizar", "GrupoContasDAO");
                throw new ArgumentException("Ocorreu um erro ao atualizar este grupo de contas");
            }
        }

        public static void Excluir(int CodGrupo, int CodEmpresa, Guid CodUsuarioLogado)
        {
            try
            {
                Procedure("SP_Delete_GruposContas", new List<SqlParameter>
                {
                    new SqlParameter("@CodGrupo", CodGrupo),
                    new SqlParameter("@CodEmpresa", CodEmpresa),
                    new SqlParameter("@CodUsuarioLogado", CodUsuarioLogado)
                });
            }
            catch (Exception ex)
            {
                if (ex.Message.IndexOf("ERRO001:") > -1)
                    throw new ArgumentException(ex.Message.Replace("ERRO001: ", ""));

                Logs.Envia(ex, "Excluir", "GrupoContasDAO");
                throw new ArgumentException("Ocorreu um erro ao excluir este grupo de contas");
            }
        }

        public static GrupoContas PesquisaGrupo(int CodGrupo, int CodEmpresa)
        {
            try
            {
                string sql = string.Format("select * from GruposContas where CodGrupo = {0} and CodEmpresa = {1} and Excluido = 0", CodGrupo, CodEmpresa);
                DataTable _grupo = Select(sql);

                if (_grupo.Rows.Count == 0)
                    throw new ObjectNotFoundException("Grupo de contas não encontrado");

                return _grupo.Rows[0].GetObject<GrupoContas>();
            }
            catch (ObjectNotFoundException) { throw; }
            catch (Exception ex)
            {
                Logs.Envia(ex, "PesquisaGrupo", "GrupoContasDAO");
                throw new ArgumentException("Ocorreu um erro ao pesquisar este grupo de contas");
            }
        }
        
        public static List<JsonError> Valida(this GrupoContas _model)
        {
            List<JsonError> erros = new List<JsonError>();

            if (!ExtensionsMethods.ValidateStr(_model.Descricao, 30, true))
                erros.Add(new JsonError("Descricao", "Descrição é obrigatória e deve ter até 30 caracteres"));

            return erros;
        }
    }
}