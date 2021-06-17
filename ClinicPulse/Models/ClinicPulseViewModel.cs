using Aplicacao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using static Dominio.Cryptography;
using Dominio.Exceptions;

namespace ClinicPulse.Models
{
    public class ClinicPulseViewModel : Dominio.ClinicPulse
    {
        private HttpCookie codusuario;
        private HttpCookie codsessao;
        private HttpCookie codempresa;
        private HttpCookie senha;

        public ClinicPulseViewModel() : this(false)
        {
        }

        public ClinicPulseViewModel(bool ValidaUsuario = true, bool CadastroGratisLogin = false)
        {
            if (!CadastroGratisLogin)
            {
                getCookies();

                LogIn = LogInAplicacao.PesquisaUsuario(Guid.Parse(Decrypt(codusuario.Value)), Decrypt(senha.Value),
                                  Guid.Parse(Decrypt(codsessao.Value)),
                                   Convert.ToInt32(Decrypt(codempresa.Value)), ValidaUsuario);

                //if (ValidaUsuario)
                //{
                //    LogIn = LogInAplicacao.PesquisaUsuario(Guid.Parse(Decrypt(codusuario.Value)), Decrypt(senha.Value),
                //                      Guid.Parse(Decrypt(codsessao.Value)),
                //                       Convert.ToInt32(Decrypt(codempresa.Value)));
                //}
                //else
                //    LogIn = new Dominio.LogIn
                //    {
                //        IdUsuario = Guid.Parse(Decrypt(codusuario.Value)),
                //        CodEmpresa = Convert.ToInt32(Decrypt(codempresa.Value)),
                //        CodSessao = Guid.Parse(Decrypt(codsessao.Value))
                //    };

                LogInAplicacao.AtualizaUsuarioLogado(LogIn.IdUsuario, LogIn.CodEmpresa, LogIn.CodSessao);
            }
         }

        private void getCookies()
        {
            codusuario = HttpContext.Current.Request.Cookies.Get("_23uh38");

            if (codusuario == null)
                throw new LoginException("Autenticação necessária!");

            codsessao = HttpContext.Current.Request.Cookies.Get("_09ja12");

            if (codsessao == null)
                throw new InvalidSessionException("Ticket de sessão inválido");

            codempresa = HttpContext.Current.Request.Cookies.Get("_54kh39");
            senha = HttpContext.Current.Request.Cookies.Get("_88eq21");
        }

        public List<Dominio.Listas.ChaveValor> GetPaciente(string Clinica)
        {
            var conexao = new AgendaAplicacao();
            List<Dominio.Listas.ChaveValor> listPaciente = new List<Dominio.Listas.ChaveValor>();

            listPaciente = conexao.FiltroPaciente(Clinica);

            return listPaciente;
        }
        public List<Dominio.Listas.ChaveValor> GetMedico(string Clinica)
        {
            var conexao = new AgendaAplicacao();
            List<Dominio.Listas.ChaveValor> listMedico = new List<Dominio.Listas.ChaveValor>();

            listMedico = conexao.FiltroMedico(Clinica);

            return listMedico;
        }
    }
}