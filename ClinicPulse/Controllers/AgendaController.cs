using Aplicacao;
using ClinicPulse.Models;
using Dominio;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net.Mail;
using System.Web.Mvc;

namespace ClinicPulse.Controllers
{
    public class AgendaController : HelperClinicBaseController
    {
        private AgendaAplicacao conexao = new AgendaAplicacao();
        private ConfiguracaoAplicacao conexaoEmpresa = new ConfiguracaoAplicacao();
        private ConsultaAplicacao conexaoPaciente = new ConsultaAplicacao();
        private PainelAplicacao conexaoLembrete = new PainelAplicacao();
        private ProntuarioAplicacao conexaoProntuario = new ProntuarioAplicacao();
        private CadastreGratisAplicacao conexaousuario = new CadastreGratisAplicacao();

        [Authentication]
        public ActionResult Index()
        {
            try
            {
                //ClinicPulseViewModel _model = new ClinicPulseViewModel();
                IniciarLista(_model);
                _model.ListMedicos = conexao.LegendaMedico(_model.LogIn.Clinica);
                _model.ListPacientesDia = conexao.PacientesDia(_model.LogIn);

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
            _model.ListProntuarioConsulta = conexaoProntuario.ListHistorico(_model.ProntuarioConsulta.IdPaciente, _model.LogIn.Clinica);
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
            return View("Prontuario",_model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SalvarProntuario(ClinicPulseViewModel _model)
        {
            try
            {
                IniciarLista(_model);

                conexaoProntuario.SalvarProntuario(_model);

                return RedirectToAction("Index", "Prontuario");
            }
            catch (Exception ex)
            {
                _model = new ClinicPulseViewModel();
                IniciarLista(_model);
                return View("Error", _model);
            }
        }

        #region Agenda

        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public void UpdateEvent(int id, string NewEventStart, string NewEventEnd, int lembrete)
        {
            IniciarLista(_model);

            var conexao = new AgendaAplicacao();
            conexao.UpdateDiaryEvent(id, NewEventStart, NewEventEnd, _model.LogIn, lembrete);
        }


        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public bool SaveEvent(string Title, string NewEventDate, string NewEventTime, string NewEventDuration, int IdPaciente, int IdMedico)
        {
            IniciarLista(_model);
            
            return conexao.CreateNewEvent(Title, NewEventDate, NewEventTime, NewEventDuration, IdPaciente, IdMedico, _model);
        }

        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public bool DeletarAgendamento(int id, int idlembrete)
        {
            IniciarLista(_model);

            return conexao.DeleteEvent(id, _model, idlembrete);
        }

        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public void PacienteAguardando(int id)
        {
            IniciarLista(_model);

            conexao.PacienteAguardando(id, _model);
        }

        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public bool MandarEmail(int id, string data, string paciente, string medico)
        {
            string email = conexao.PacienteEmail(id);
            LogIn _model = (LogIn)Session["User"];
            if (_model.ClinicaEmail == "")
                _model.ClinicaEmail = "le.alexandrino.santos@gmail.com";

            if (email == "")
            {
                return false;
            }

            try
            {
                SmtpClient mySmtpClient = new SmtpClient("smtp.gmail.com", 587);

                // set smtp-client with basicAuthentication
                mySmtpClient.UseDefaultCredentials = true;
                System.Net.NetworkCredential basicAuthenticationInfo = new
                System.Net.NetworkCredential("le.alexandrino.santos@gmail.com", "1234alexandrino");
                mySmtpClient.Credentials = basicAuthenticationInfo;

                // add from,to mailaddresses
                MailAddress from = new MailAddress(_model.ClinicaEmail, "Consulta " + _model.Clinica);
                MailAddress to = new MailAddress(email, paciente);
                MailMessage myMail = new System.Net.Mail.MailMessage(from, to);

                myMail.Bcc.Add("le.alexandrino.santos@gmail.com");

                // set subject and encoding
                myMail.Subject = @"Consulta " + _model.Clinica;
                myMail.SubjectEncoding = System.Text.Encoding.UTF8;

                // set body-message and encoding
                myMail.Body =@"<div style='height:50px; background-color:#fff; text-align:center'>"
                            + "<div> Olá  " + paciente + ". <br /> "
                                                           + "Não esqueça da consulta dia " + data + " com o Dr.(a) " + medico + " na Clínica " + _model.Clinica + "<br />"
                                                           + "Caso precise remarcar, por favor, entre em contato conosco.<br />"
                                                           + "Atenciosamente. </div></div>";

                myMail.BodyEncoding = System.Text.Encoding.UTF8;

                // text or html
                myMail.IsBodyHtml = true;
                mySmtpClient.EnableSsl = true;

                mySmtpClient.Send(myMail);

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        [HttpPost]
        public JsonResult GetDiarySummary(double start, double end, string idMedico)
        {
            IniciarLista(_model);

            var ApptListForDate = conexao.LoadAppointmentSummaryInDateRange(start, end, _model.LogIn, idMedico);
            var eventList = from e in ApptListForDate
                            select new
                            {
                                id = e.ID,
                                title = e.Title,
                                start = e.StartDateString,
                                end = e.EndDateString,
                                someKey = e.SomeImportantKeyID,
                                paciente = e.paciente,
                                medico = e.medico,
                                statusENUM = e.statusENUM,
                                lembrete = e.lembrete,
                                allDay = false
                            };
            var rows = eventList.ToArray();
            return Json(rows, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetDiaryEvents(double start, double end, string idMedico)
        {
            IniciarLista(_model);



            var ApptListForDate = conexao.LoadAllAppointmentsInDateRange(start, end, _model.LogIn, idMedico);
            var listMedico = _model.GetMedico(_model.LogIn.Clinica);
            var listPaciente = _model.GetPaciente(_model.LogIn.Clinica);

            foreach (var c in ApptListForDate)
            {
                for (int i = 0; i < listPaciente.Count(); i++)
                {
                    if (c.paciente == listPaciente[i].Chave)
                        c.nomepaciente = listPaciente[i].Valor;
                }
                for (int i = 0; i < listMedico.Count(); i++)
                {
                    if (c.medico == listMedico[i].Chave)
                        c.nomemedico = listMedico[i].Valor;
                }
            }

            var eventList = from e in ApptListForDate
                            select new
                            {
                                id = e.ID,
                                title = e.Title,
                                start = e.StartDateString,
                                end = e.EndDateString,
                                color = e.StatusColor,
                                className = e.ClassName,
                                someKey = e.SomeImportantKeyID,
                                paciente = e.nomepaciente,
                                idpaciente = e.paciente,
                                medico = e.nomemedico,
                                duracao = e.duracao,
                                diahorario = e.diahorarioconsulta,
                                statusENUM = e.statusENUM,
                                lembrete = e.lembrete,
                                allDay = false
                            };
            var rows = eventList.ToArray();
            return Json(rows, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region Sem Retorno
        public void IniciarLista(ClinicPulseViewModel _model)
        {
            if (_model.Lembretes == null)
                _model.Lembretes = new Lembretes();
            if (_model.Empresa == null)
                _model.Empresa = new Empresa();
            if (_model.Agenda == null)
                _model.Agenda = new Agenda();
            if (_model.PacienteDados == null)
                _model.PacienteDados = new PacienteDados();
            if (_model.PacienteDados == null)
                _model.PacienteDados = new PacienteDados();
            if (_model.PacienteComplementar == null)
                _model.PacienteComplementar = new PacienteComplementar();
            if (_model.PacienteConvenio == null)
                _model.PacienteConvenio = new PacienteConvenio();
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
            if (_model.ListProntuarioDentista == null)
                _model.ListProntuarioDentista = new List<ProntuarioDentista>();
            if (_model.ListPacienteDados == null)
                _model.ListPacienteDados = new List<PacienteDados>();
        }
        #endregion
    }
}