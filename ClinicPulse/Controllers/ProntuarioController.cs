using Aplicacao;
using ClinicPulse.Models;
using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace ClinicPulse.Controllers
{
    public class ProntuarioController : HelperClinicBaseController
    {
        private ProntuarioAplicacao conexao = new ProntuarioAplicacao();
        #region ActionResult

        [Authentication]
        public ActionResult Index()
        {
            try
            {
                //ClinicPulseViewModel _model = new ClinicPulseViewModel();
                IniciarLista(_model);

                if (_model.LogIn.Perfil != "Medico")
                {
                    return RedirectToAction("Index", "Painel");
                }

                _model.ListPacienteDados = conexao.ListGrid(_model.LogIn.Clinica);
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
        public ActionResult Prontuario(ClinicPulseViewModel _model)
        {
            IniciarLista(_model);
            _model.ListProntuarioConsulta = conexao.ListHistorico(_model.ProntuarioConsulta.IdPaciente, _model.LogIn.Clinica);
            CadastreGratisAplicacao _medico = new CadastreGratisAplicacao();
            foreach (var c in _model.ListProntuarioConsulta)
            {
                c.NomeMedico = _medico.PesquisaDadosUsuario(c.IdUsuario, c.Clinica).Nome;
                _model.ListProntuarioAnamnese.Add(c.ListProntuarioAnamnese.FirstOrDefault());
                _model.ListProntuarioEvolucao.Add(c.ListProntuarioEvolucao.FirstOrDefault());
                _model.ListProntuarioExame.Add(c.ListProntuarioExame.FirstOrDefault());
                _model.ListProntuarioHipotese.Add(c.ListProntuarioHipotese.FirstOrDefault());
                _model.ListProntuarioDentista.Add(c.ListProntuarioDentista.FirstOrDefault());
            }

            _model.ProntuarioDentista.Extracao = _model.ListProntuarioDentista[0].Extracao;
            _model.ProntuarioDentista.Furca = _model.ListProntuarioDentista[0].Furca;
            _model.ProntuarioDentista.protese = _model.ListProntuarioDentista[0].protese;

            return View("Prontuario", _model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SalvarProntuario(ClinicPulseViewModel _model)
        {
            try
            {
                IniciarLista(_model);

                conexao.SalvarProntuario(_model);

                return RedirectToAction("Index", "Prontuario");
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

            return PartialView("_GridProntuario", _model);
        }
        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public PartialViewResult ConsultaGrid(string drop, string text)
        {
            //ClinicPulseViewModel _model = new ClinicPulseViewModel();
            IniciarLista(_model);

            _model.ListPacienteDados = TempData["ListPacienteDados"] as List<PacienteDados>;
            TempData["ListPacienteDados"] = _model.ListPacienteDados;

            if (drop == "Nome")
                _model.ListPacienteDados = _model.ListPacienteDados.Where(x => x.Nome.ToLower().Contains(text.ToLower())).ToList();
            else if (drop == "Cpf")
                _model.ListPacienteDados = _model.ListPacienteDados.Where(x => x.Cpf.Contains(text)).ToList();

            return PartialView("_GridProntuario", _model);
        }

        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public PartialViewResult ConsultaPaciente(int id)
        {
            //ClinicPulseViewModel _model = new ClinicPulseViewModel();
            IniciarLista(_model);

            _model.ListProntuarioConsulta = conexao.ListHistorico(id, _model.LogIn.Clinica);
            
            foreach(var c in _model.ListProntuarioConsulta)
            {
                _model.ListProntuarioAnamnese.Add(c.ListProntuarioAnamnese.FirstOrDefault());
                _model.ListProntuarioEvolucao.Add(c.ListProntuarioEvolucao.FirstOrDefault());
                _model.ListProntuarioExame.Add(c.ListProntuarioExame.FirstOrDefault());
                _model.ListProntuarioHipotese.Add(c.ListProntuarioHipotese.FirstOrDefault());
                _model.ListProntuarioDentista.Add(c.ListProntuarioDentista.FirstOrDefault());
            }
            _model.ProntuarioConsulta.IdPaciente = id;

            return PartialView("_Prontuario", _model);
        }
        #endregion

        #region Sem retorno
        public void IniciarLista(ClinicPulseViewModel _model)
        {
            if (_model.ProntuarioConsulta == null)
                _model.ProntuarioConsulta = new ProntuarioConsulta();
            if (_model.ProntuarioDentista == null)
                _model.ProntuarioDentista = new ProntuarioDentista();
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
            if (_model.ListProntuarioDentista == null)
                _model.ListProntuarioDentista = new List<ProntuarioDentista>();
            if (_model.ListPacienteDados == null)
                _model.ListPacienteDados = new List<PacienteDados>();
        }
        #endregion
    }
}