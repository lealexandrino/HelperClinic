using ClinicPulse.Models;
using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ClinicPulse.Controllers
{
    public class ProntuarioDentistaController : Controller
    {
        // GET: ProntuarioDentista
        public ActionResult Index()
        {
            ClinicPulseViewModel _model = new ClinicPulseViewModel();
            IniciarLista(_model);

            return View(_model);
        }
        #region Sem retorno
        public void IniciarLista(ClinicPulseViewModel _model)
        {
            if (_model.ProntuarioConsulta == null)
                _model.ProntuarioConsulta = new ProntuarioConsulta();
            if (_model.ListProntuarioAnamnese == null)
                _model.ListProntuarioAnamnese = new List<ProntuarioAnamnese>();
            if (_model.ListProntuarioConsulta == null)
                _model.ListProntuarioConsulta = new List<ProntuarioConsulta>();
            if (_model.ListProntuarioExame == null)
                _model.ListProntuarioExame = new List<ProntuarioExame>();
            if (_model.ListProntuarioEvolucao == null)
                _model.ListProntuarioEvolucao = new List<ProntuarioEvolucao>();
            if (_model.ListProntuarioHipotese == null)
                _model.ListProntuarioHipotese = new List<ProntuarioHipotese>();
            if (_model.ListPacienteDados == null)
                _model.ListPacienteDados = new List<PacienteDados>();

            _model.LogIn = (LogIn)Session["User"];
        }
        #endregion
    }
}