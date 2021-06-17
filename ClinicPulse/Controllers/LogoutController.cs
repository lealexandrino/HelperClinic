using System.Web.Mvc;
using ClinicPulse.Models;
using Aplicacao;
using System.Web;
using System;

namespace ClinicPulse.Controllers
{
    public class LogoutController : Controller
    {
        // GET: Logout
        public ActionResult Index()
        {
            ClinicPulseViewModel _model = new ClinicPulseViewModel();

            LogInAplicacao.LogoutUsuario(_model.LogIn.IdUsuario, _model.LogIn.CodEmpresa);

            ClearCookies();

            TempData.Clear();
            Session.Abandon();
            Session.Clear();

            return RedirectToAction("index", "Home");
        }

        public ActionResult LogoutLogin()
        {
            ClinicPulseViewModel _model = new ClinicPulseViewModel();

            LogInAplicacao.LogoutUsuario(_model.LogIn.IdUsuario, _model.LogIn.CodEmpresa);

            ClearCookies();

            TempData.Clear();
            Session.Abandon();
            Session.Clear();

            return RedirectToAction("index", "LogIn");
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