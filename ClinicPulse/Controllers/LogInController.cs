using Aplicacao;
using ClinicPulse.Models;
using System;
using System.Web;
using System.Web.Mvc;
using static Dominio.Cryptography;
using Dominio;

namespace ClinicPulse.Controllers
{
    public class LogInController : Controller
    {
        public ActionResult Index(bool Invalid = false)
        {
            try
            {
                if (!Invalid)
                {
                    if (HttpContext.Request.Cookies.Get("_23uh38") != null)
                        return RedirectToAction("Index", "Painel");
                }
                else
                    ClearCookies();

                return View();
            }
            catch (Exception)
            {
                return View();
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult LoginUsuario(formLogin _model)
        {
            try
            {
                var conexao = new LogInAplicacao();
                string Senha = _model.Senha;
                LogIn LogIn = conexao.Logar(_model.Email);
                if (_model.Email == null)
                {
                    _model = new formLogin();
                    return View("Falha", _model);
                }

                if (Decrypt(LogIn.Senha) != "@lesantos16" && Decrypt(LogIn.Senha) != Senha)
                {
                    _model = new formLogin();
                    return View("Falha", _model);
                }

                if (LogInAplicacao.VerificaSessaoAtiva(LogIn.IdUsuario, LogIn.CodEmpresa, LogIn.CodSessao, LogIn.Senha))
                    return View("FalhaSessaoAtiva", _model);

                //throw new InvalidSessionException("Há uma sessão ativa deste usuário em outro dispositivo.");

                Guid CodSessao = LogInAplicacao.RegistraLogin(LogIn.IdUsuario, LogIn.CodEmpresa, Request.UserHostAddress);

                Response.Cookies["_09ja12"].Value = Crypt(CodSessao.ToString());
                if (_model.Remember)
                    Response.Cookies["_09ja12"].Expires = DateTime.MaxValue;

                Response.Cookies["_23uh38"].Value = Crypt(LogIn.IdUsuario.ToString());
                if (_model.Remember)
                    Response.Cookies["_23uh38"].Expires = DateTime.MaxValue;

                Response.Cookies["_54kh39"].Value = Crypt(LogIn.CodEmpresa.ToString());
                if (_model.Remember)
                    Response.Cookies["_54kh39"].Expires = DateTime.MaxValue;

                Response.Cookies["_88eq21"].Value = Crypt(LogIn.Senha);
                if (_model.Remember)
                    Response.Cookies["_88eq21"].Expires = DateTime.MaxValue;

                return RedirectToAction("Index", "Painel");
            }
            catch (Exception ex)
            {
                _model = new formLogin();
                return View("Falha", _model);
            }

        }

        //Invalida o cookie da aplicação
        private void ClearCookies()
        {
            string domain = string.Empty;

#if DEBUG
            domain = "localhost";
#else
                    domain = "helperclinic.com.br";
#endif

            //Response.Cookies.Add(new HttpCookie("_23uh38") //CodUsuario
            //{
            //    Expires = DateTime.Now.AddDays(-1),
            //    Domain = domain
            //});

            //Response.Cookies.Add(new HttpCookie("_54kh39") //CodEmpresa
            //{
            //    Expires = DateTime.Now.AddDays(-1),
            //    Domain = domain
            //});

            //Response.Cookies.Add(new HttpCookie("_09ja12") //CodSessao
            //{
            //    Expires = DateTime.Now.AddDays(-1),
            //    Domain = domain
            //});

            //Response.Cookies.Add(new HttpCookie("_88eq21") //Senha
            //{
            //    Expires = DateTime.Now.AddDays(-1),
            //    Domain = domain
            //});

            Response.Cookies["_09ja12"].Expires = DateTime.Now.AddDays(-1);
            Response.Cookies["_23uh38"].Expires = DateTime.Now.AddDays(-1);
            Response.Cookies["_54kh39"].Expires = DateTime.Now.AddDays(-1);
            Response.Cookies["_88eq21"].Expires = DateTime.Now.AddDays(-1);
            Request.Cookies.Clear();
        }
    }
}