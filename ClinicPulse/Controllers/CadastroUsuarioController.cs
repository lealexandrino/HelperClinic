using Aplicacao;
using ClinicPulse.Models;
using Dominio;
using System;
using System.Web.Mvc;

namespace ClinicPulse.Controllers
{
    public class CadastroUsuarioController : HelperClinicBaseController
    {
        // GET: CadastroUsuario
        [Authentication]
        public ActionResult Index()
        {
            try
            {
                //ClinicPulseViewModel _model = new ClinicPulseViewModel();
                IniciarLista(_model);

                return View(_model);
            }
            catch (Exception ex)
            {
                //ClinicPulseViewModel _model = new ClinicPulseViewModel();
                IniciarLista(_model);
                return View("Error", _model);
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Cadastrar(ClinicPulseViewModel _model)
        {
            if (Session["User"] == null)
            {
                return RedirectToAction("Index", "Login");
            }

            try
            {
                IniciarLista(_model);

                _model.Util = new Dominio.Util();
                var conexao = new CadastreGratisAplicacao();
                conexao.CadastrarUsuario(_model);

                if (_model.Util.Mensagem != null)
                {
                    _model.LogIn = new Dominio.LogIn();
                    return View("Index", _model);
                }

                ModelState.Clear();

                return RedirectToAction("Index");
            }
            catch (Exception ex)
            {
                _model = new ClinicPulseViewModel();
                IniciarLista(_model);
                return View("Error", _model);
            }
        }

        #region Sem Retorno
        public void IniciarLista(ClinicPulseViewModel _model)
        {
            if (_model.Usuario == null)
                _model.Usuario = new Usuario();
        }
        #endregion
    }
}