using Aplicacao;
using ClinicPulse.Models;
using Dominio;
using System;
using System.Web.Mvc;

namespace ClinicPulse.Controllers
{
    public class CadastroController : HelperClinicBaseController
    {

        private CadastroAplicacao conexao = new CadastroAplicacao();

        #region ActionResult
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
                conexao.SalvarAtividade(_model);

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
        #endregion

        #region Json
        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public JsonResult ValidarCpf(string cpf)
        {
            LogIn login = (LogIn)Session["User"];
            int Conta = conexao.ExisteCpf(cpf, login.Clinica);

            var _modelJsom = new
            {
                conta = Conta,
            };

            return Json(_modelJsom);
        }
        #endregion

        #region Sem Retorno
        public void IniciarLista(ClinicPulseViewModel _model)
        {
            if (_model.PacienteDados == null)
                _model.PacienteDados = new PacienteDados();
            if (_model.PacienteComplementar == null)
                _model.PacienteComplementar = new PacienteComplementar();
            if (_model.PacienteConvenio == null)
                _model.PacienteConvenio = new PacienteConvenio();
        }
        #endregion
	}
}