using Aplicacao;
using ClinicPulse.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using static Dominio.Cryptography;
using Dominio;

namespace ClinicPulse.Controllers
{
    public class CadastreGratisController : Controller
    {
        // GET: CadastreGratis
        public ActionResult Index()
        {
            ViewBag.Mensagem = "";

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult CadastrarUsuario(formLogin _Login)
        {
            ClinicPulseViewModel _model = new ClinicPulseViewModel(false,true);
            try
            {
                _model.Util = new Dominio.Util();
                _model.LogIn = new Dominio.LogIn();
                _model.Empresa = new Dominio.Empresa();

                _model.LogIn.Email = _Login.Email;
                _model.LogIn.Senha = _Login.Senha;
                _model.LogIn.Nome = _Login.Nome;
                _model.Empresa.ClinicaTelefone = _Login.Telefone;

                var conexaocadastre = new CadastreGratisAplicacao();
                Guid CodSessao = LogInAplicacao.RegistraLogin(_model.LogIn.IdUsuario, _model.LogIn.CodEmpresa, Request.UserHostAddress);
                _model.LogIn.CodSessao = CodSessao;
                conexaocadastre.Cadastrar(_model);

                if (ViewBag.Mensagem != null)
                {
                    _model.LogIn = new Dominio.LogIn();
                    return View("Index", _Login);
                }

                Response.Cookies["_09ja12"].Value = Crypt(_model.LogIn.CodSessao.ToString());
                Response.Cookies["_09ja12"].Expires = DateTime.MaxValue;

                Response.Cookies["_23uh38"].Value = Crypt(_model.LogIn.IdUsuario.ToString());
                Response.Cookies["_23uh38"].Expires = DateTime.MaxValue;

                Response.Cookies["_54kh39"].Value = Crypt(_model.LogIn.CodEmpresa.ToString());
                Response.Cookies["_54kh39"].Expires = DateTime.MaxValue;

                Response.Cookies["_88eq21"].Value = Crypt(_model.LogIn.Senha);
                Response.Cookies["_88eq21"].Expires = DateTime.MaxValue;

                return RedirectToAction("Index", "Painel");
            }
            catch (Exception ex)
            {
                _model.LogIn = new Dominio.LogIn();
                return View("Index", _Login);
            }

        }
    }
}