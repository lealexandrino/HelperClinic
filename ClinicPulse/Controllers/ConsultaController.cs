using Aplicacao;
using ClinicPulse.Models;
using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace ClinicPulse.Controllers
{
    public class ConsultaController : HelperClinicBaseController
    {
        private ConsultaAplicacao conexao = new ConsultaAplicacao();
        #region ActionResult

        [Authentication]
        public ActionResult Index()
        {
            try
            {
                //ClinicPulseViewModel _model = new ClinicPulseViewModel();
                IniciarLista(_model);

                _model.ListPacienteDados = conexao.ListGrid(_model);
                TempData["ListPacienteDados"] = _model.ListPacienteDados;

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
        public ActionResult UpdatePaciente(ClinicPulseViewModel _model)
        {
            try
            {
                IniciarLista(_model);

                conexao.UpdatePaciente(_model);

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

        #region PartialView

        public PartialViewResult ConsultaGrid()
        {
            //ClinicPulseViewModel _model = new ClinicPulseViewModel();
            IniciarLista(_model);

            _model.ListPacienteDados = TempData["ListPacienteDados"] as List<PacienteDados>;
            TempData["ListPacienteDados"] = _model.ListPacienteDados;

            string drop = TempData["drop"] as string;
            string text = TempData["text"] as string;

            TempData["drop"] = drop;
            TempData["text"] = text;

            if (drop == "Nome")
                _model.ListPacienteDados = _model.ListPacienteDados.Where(x => x.Nome.ToLower().Contains(text.ToLower())).ToList();
            else if (drop == "Cpf")
                _model.ListPacienteDados = _model.ListPacienteDados.Where(x => x.Cpf.Contains(text)).ToList();

            return PartialView("_GridConsulta", _model);
        }

        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public PartialViewResult ConsultaGrid(string drop, string text)
        {
            //ClinicPulseViewModel _model = new ClinicPulseViewModel();
            IniciarLista(_model);

            TempData["drop"] = drop;
            TempData["text"] = text;

            _model.ListPacienteDados = TempData["ListPacienteDados"] as List<PacienteDados>;
            TempData["ListPacienteDados"] = _model.ListPacienteDados;

            if (drop == "Nome")
                _model.ListPacienteDados = _model.ListPacienteDados.Where(x => x.Nome.ToLower().Contains(text.ToLower())).ToList();
            else if (drop == "Cpf")
                _model.ListPacienteDados = _model.ListPacienteDados.Where(x => x.Cpf.Contains(text)).ToList();

            return PartialView("_GridConsulta", _model);
        }

        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public PartialViewResult ConsultaPaciente(int id)
        {
            //ClinicPulseViewModel _model = new ClinicPulseViewModel();
            IniciarLista(_model);

            _model.PacienteDados = conexao.Paciente(id, _model.LogIn.Clinica);
            _model.PacienteComplementar = _model.PacienteDados.ListPacienteComplementar.FirstOrDefault();
            _model.PacienteConvenio = _model.PacienteDados.ListPacienteConvenio.FirstOrDefault();
            if (_model.PacienteComplementar == null)
                _model.PacienteComplementar = new PacienteComplementar();
            if (_model.PacienteConvenio == null)
                _model.PacienteConvenio = new PacienteConvenio();
            _model.PacienteDados.DataNascimentoS = _model.PacienteDados.DataNascimento.ToString("dd/MM/yyyy");
            _model.PacienteConvenio.ValidadeS = _model.PacienteConvenio.Validade.ToString("dd/MM/yyyy");

            return PartialView("_Consulta", _model);
        }
        #endregion

        #region Json
        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public JsonResult ValidarCpf(string cpf)
        {
            int Conta = conexao.ExisteCpf(cpf);

            var _modelJsom = new
            {
                conta = Conta,
            };

            return Json(_modelJsom);
        }
        #endregion

        #region Sem retorno
        public void IniciarLista(ClinicPulseViewModel _model)
        {
            if (_model.PacienteDados == null)
                _model.PacienteDados = new PacienteDados();
            if (_model.PacienteComplementar == null)
                _model.PacienteComplementar = new PacienteComplementar();
            if (_model.PacienteConvenio == null)
                _model.PacienteConvenio = new PacienteConvenio();
            if (_model.ListPacienteDados == null)
                _model.ListPacienteDados = new List<PacienteDados>();
        }
        #endregion
    }
}