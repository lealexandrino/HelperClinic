using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Aplicacao;
using ClinicPulse.Models;
using Dominio;

namespace ClinicPulse.Controllers
{
    public class ConfiguracaoController : HelperClinicBaseController
    {
        // GET: Configuracao
        private ConfiguracaoAplicacao conexao = new ConfiguracaoAplicacao();

        [Authentication]
        public ActionResult Index()
        {
            try
            {
                //ClinicPulseViewModel _model = new ClinicPulseViewModel();
                IniciarLista(_model);

                _model.Empresa = conexao.Empresa(_model.LogIn.Clinica);

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
        public ActionResult UpdateEmpresa(ClinicPulseViewModel _model)
        {
            try
            {
                IniciarLista(_model);

                conexao.UpdateConfiguracao(_model);

                return RedirectToAction("Index","Painel");
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
            if (_model.Empresa == null)
                _model.Empresa = new Empresa();
        }
        #endregion
    }
}