using Dominio;
using RepositorioEF;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacao
{
    public class AgendaAplicacao
    {
        AgendaRepositorioEF repositorio = new AgendaRepositorioEF();
        #region Agenda
        public int ID;
        public string Title;
        public int SomeImportantKeyID;
        public string StartDateString;
        public string EndDateString;
        public string StatusString;
        public string StatusColor;
        public string ClassName;
        public int paciente;
        public int idpaciente;
        public string nomepaciente;
        public int medico;
        public string nomemedico;
        public string duracao;
        public string diahorarioconsulta;
        public int statusENUM;
        public int? lembrete;

        private ConfiguracaoAplicacao conexaoEmpresa = new ConfiguracaoAplicacao();
        private ConsultaAplicacao conexaoPaciente = new ConsultaAplicacao();
        private CadastreGratisAplicacao conexaousuario = new CadastreGratisAplicacao();

        public void UpdateDiaryEvent(int id, string NewEventStart, string NewEventEnd, LogIn _model, int lembrete)
        {
            // EventStart comes ISO 8601 format, eg:  "2000-01-10T10:00:00Z" - need to convert to DateTime

            Agenda entidade = new Agenda();
            if (entidade != null)
            {
                Lembretes entidadeLembrete = new Lembretes();
                Empresa entidadeEmpresa = new Empresa();
                PacienteDados entidadePaciente = new PacienteDados();

                entidadeEmpresa = conexaoEmpresa.Empresa(_model.Clinica);
                entidadePaciente = conexaoPaciente.Paciente(repositorio.Pacienteid(id, _model.Clinica), _model.Clinica);

                IFormatProvider culture = new CultureInfo("en-US", true);
                DateTime DateTimeStart = TimeZoneInfo.ConvertTime(Convert.ToDateTime(NewEventStart), TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time"));//DateTime.Parse(NewEventStart).ToUniversalTime(); // and convert offset to localtime

                entidadeLembrete.DataLembrete = DateTimeStart.Date;
                entidadeLembrete.Lembrete = "Olá " + entidadePaciente.Nome + " tudo bem? Apenas gostaria de relembrar que " + DateTimeStart.ToString("dddd",
                            new CultureInfo("pt-BR")) + ", dia " + DateTimeStart.ToString("dd/MM HH:mm") + " você tem consulta marcada com o Dr. " + _model.Nome + ". "
                            + (!string.IsNullOrEmpty(entidadeEmpresa.MensagemWhatsApp) ? entidadeEmpresa.MensagemWhatsApp : " Obrigado pela atenção. " + entidadeEmpresa.Nome);
                entidadeLembrete.Celular = entidadePaciente.TelefoneCelular;

                

                entidade.DateTimeScheduled = DateTimeStart;
                entidade.ID = id;
                if (!String.IsNullOrEmpty(NewEventEnd))
                {
                    TimeSpan span = TimeZoneInfo.ConvertTime(Convert.ToDateTime(NewEventEnd), TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time")) - DateTimeStart;
                    entidade.AppointmentLength = Convert.ToInt32(span.TotalMinutes);
                }

                entidade.IdUsuario = _model.IdUsuario;
                entidade.DataAlterado = TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time"));
                entidade.AlteradoPor = _model.IdUsuario;
                entidade.IdLembrete = lembrete;
                entidade.Lembretes = entidadeLembrete;

                repositorio.UpdateDiaryEvent(entidade);
            }
        }

        public void PacienteAguardando(int id, ClinicPulse _model)
        {
            _model.Agenda.ID = id;

            repositorio.UpdatePacienteAguardando(_model.Agenda);
        }

        public bool DeleteEvent(int id, ClinicPulse _model, int idlembrete)
        {
            try
            {
                _model.Agenda.ID = id;
                _model.Agenda.DataAlterado = TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time"));
                _model.Agenda.Deletado = true;
                _model.Agenda.IdUsuario = _model.LogIn.IdUsuario;
                _model.Agenda.AlteradoPor = _model.LogIn.IdUsuario;
                _model.Agenda.IdLembrete = idlembrete;

                return repositorio.DeleteEvent(_model.Agenda);
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool CreateNewEvent(string Title, string NewEventDate, string NewEventTime, string NewEventDuration, int IdPaciente, int IdMedico, ClinicPulse _model)
        {
            try
            {
                _model.Empresa = conexaoEmpresa.Empresa(_model.LogIn.Clinica);
                _model.PacienteDados = conexaoPaciente.Paciente(IdPaciente, _model.LogIn.Clinica);
                LogIn _modelUsuario = conexaousuario.Usuario(IdMedico, _model.LogIn.Clinica);
                _model.Lembretes.IdUsuario = _model.LogIn.IdUsuario;
                _model.Lembretes.Pagina = 0;

                IFormatProvider culture = new CultureInfo("en-US", true);
                DateTime dateVal = DateTime.ParseExact(NewEventDate + " " + NewEventTime, "dd/MM/yyyy HH:mm", culture);

                _model.Lembretes.DataLembrete = dateVal.Date;
                _model.Lembretes.Lembrete = "Olá " + _model.PacienteDados.Nome + " tudo bem? Apenas gostaria de relembrar que " + dateVal.ToString("dddd",
                            new CultureInfo("pt-BR")) + ", dia " + dateVal.ToString("dd/MM HH:mm") + " você tem consulta marcada com o Dr. " + _modelUsuario.Nome + ". "
                            + (!string.IsNullOrEmpty(_model.Empresa.MensagemWhatsApp) ? _model.Empresa.MensagemWhatsApp : " Obrigado pela atenção. " + _model.Empresa.Nome);
                _model.Lembretes.Celular = _model.PacienteDados.TelefoneCelular;
                _model.Lembretes.Tipo = 1;
                _model.Lembretes.Clinica = _model.LogIn.Clinica;
                _model.Lembretes.Deletado = false;

                _model.Agenda.Title = Title;
                _model.Agenda.DateTimeScheduled = DateTime.ParseExact(NewEventDate + " " + NewEventTime, "dd/MM/yyyy HH:mm", CultureInfo.InvariantCulture);
                _model.Agenda.AppointmentLength = Int32.Parse(NewEventDuration);
                _model.Agenda.IdPaciente = IdPaciente;
                _model.Agenda.Clinica = _model.LogIn.Clinica;
                _model.Agenda.IdUsuario = _model.LogIn.IdUsuario;
                _model.Agenda.IdMedico = IdMedico;
                _model.Agenda.AlteradoPor = _model.LogIn.IdUsuario;
                _model.Agenda.DataAlterado = TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time"));
                _model.Agenda.Deletado = false;
                _model.Agenda.Lembretes = _model.Lembretes;

                return repositorio.CreateNewEvent(_model);
            }
            catch (Exception)
            {
                return false;
            }
        }

        public List<AgendaAplicacao> LoadAppointmentSummaryInDateRange(double start, double end, LogIn _model, string idMedico)
        {
            var fromDate = ConvertFromUnixTimestamp(start);
            var toDate = ConvertFromUnixTimestamp(end);

            var rslt = repositorio.LoadAppointmentSummaryInDateRange(fromDate, toDate, _model, idMedico);

            var result = new List<AgendaAplicacao>();
            int i = 0;
            foreach (var item in rslt)
            {
                AgendaAplicacao rec = new AgendaAplicacao();
                rec.ID = i; //we dont link this back to anything as its a group summary but the fullcalendar needs unique IDs for each event item (unless its a repeating event)
                rec.SomeImportantKeyID = -1;
                string StringDate = string.Format("{0:yyyy-MM-dd}", item.DateTimeScheduled);
                rec.StartDateString = StringDate + "T00:00:00"; //ISO 8601 format
                rec.EndDateString = StringDate + "T23:59:59";
                rec.Title = "Booked: " + rslt.Count().ToString();
                rec.statusENUM = item.StatusENUM;
                rec.lembrete = item.IdLembrete;
                result.Add(rec);
                i++;
            }

            return result;

        }
        private static DateTime ConvertFromUnixTimestamp(double timestamp)
        {
            var origin = new DateTime(1970, 1, 1, 0, 0, 0, 0);
            return origin.AddSeconds(timestamp);
        }

        public List<AgendaAplicacao> LoadAllAppointmentsInDateRange(double start, double end, LogIn _model, string idMedico)
        {
            var fromDate = ConvertFromUnixTimestamp(start);
            var toDate = ConvertFromUnixTimestamp(end);

            var rslt = repositorio.LoadAppointmentSummaryInDateRange(fromDate, toDate, _model, idMedico);

            List<AgendaAplicacao> result = new List<AgendaAplicacao>();
            foreach (var item in rslt)
            {
                AgendaAplicacao rec = new AgendaAplicacao();
                rec.ID = item.ID;
                rec.SomeImportantKeyID = item.IdPaciente;
                rec.StartDateString = item.DateTimeScheduled.ToString("s"); // "s" is a preset format that outputs as: "2009-02-27T12:12:22"
                rec.EndDateString = item.DateTimeScheduled.AddMinutes(item.AppointmentLength).ToString("s"); // field AppointmentLength is in minutes
                rec.Title = item.Title;
                rec.duracao = item.AppointmentLength.ToString() + " mins";
                rec.StatusString = item.Cor;
                rec.StatusColor = Enums.GetEnumDescription<AppointmentStatus>(rec.StatusString);
                string ColorCode = rec.StatusColor.Substring(0, rec.StatusColor.IndexOf(":"));
                rec.ClassName = rec.StatusColor.Substring(rec.StatusColor.IndexOf(":") + 1, rec.StatusColor.Length - ColorCode.Length - 1);
                rec.StatusColor = ColorCode;
                rec.medico = item.IdMedico;
                rec.paciente = item.IdPaciente;
                rec.diahorarioconsulta = item.DateTimeScheduled.ToString("dd/MM/yyyy hh:mm:ss tt");//
                rec.statusENUM = item.StatusENUM;
                rec.lembrete = item.IdLembrete;
                result.Add(rec);
            }
            return result;
        }
        public enum AppointmentStatus
        {
            [Description("#00924F:MEDICO1")] // green
            Medico1 = 0,
            [Description("#F39C12:MEDICO2")] // orange
            Medico2,
            [Description("#00C0EF:MEDICO3")] // lightBlue
            Medico3,
            [Description("#3C8DBC:MEDICO4")] // lightBlue
            Medico4,
            [Description("#DD4B39:MEDICO5")] // lightBlue
            Medico5,
            [Description("#F012BE:MEDICO6")] // lightBlue
            Medico6,
            [Description("#01FF70:MEDICO7")] // lightBlue
            Medico7,
            [Description("#001F3F:MEDICO8")] // lightBlue
            Medico8,
            [Description("#605CA8:MEDICO9")] // lightBlue
            Medico9,

        }

        public static class Enums
        {
            /// Get all values
            public static IEnumerable<T> GetValues<T>()
            {
                return Enum.GetValues(typeof(T)).Cast<T>();
            }

            /// Get all the names
            public static IEnumerable<T> GetNames<T>()
            {
                return Enum.GetNames(typeof(T)).Cast<T>();
            }

            /// Get the name for the enum value
            public static string GetName<T>(T enumValue)
            {
                return Enum.GetName(typeof(T), enumValue);
            }

            /// Get the underlying value for the Enum string
            public static int GetValue<T>(string enumString)
            {
                return (int)Enum.Parse(typeof(T), enumString.Trim());
            }

            public static string GetEnumDescription<T>(string value)
            {
                Type type = typeof(T);
                var name = Enum.GetNames(type).Where(f => f.Equals(value, StringComparison.CurrentCultureIgnoreCase)).Select(d => d).FirstOrDefault();

                if (name == null)
                {
                    return string.Empty;
                }
                var field = type.GetField(name);
                var customAttribute = field.GetCustomAttributes(typeof(DescriptionAttribute), false);
                return customAttribute.Length > 0 ? ((DescriptionAttribute)customAttribute[0]).Description : name;
            }
        }
        #endregion

        public List<Listas.ChaveValor> FiltroPaciente(string clinica)
        {
            return repositorio.FiltroPaciente(clinica);
        }
        public List<Listas.ChaveValor> FiltroMedico(string clinica)
        {
            return repositorio.FiltroMedico(clinica);
        }
        private List<Listas.ChaveValor> RetornoFiltro(SqlDataReader reader)
        {
            var _model = new List<Listas.ChaveValor>()
                {
                    new Listas.ChaveValor() { Chave = 0, Valor = string.Empty },    
                };
            while (reader.Read())
            {
                var hasRows = new Listas.ChaveValor()
                {
                    Chave = Convert.ToInt32(reader["Id"].ToString()),
                    Valor = reader["Nome"].ToString(),
                };
                _model.Add(hasRows);
            }
            reader.Close();
            return _model;
        }

        public List<LogIn> LegendaMedico(string clinica)
        {
            return repositorio.LegendaMedico(clinica);
        }

        public List<PacienteAgenda> PacientesDia(LogIn _modelLogin)
        {
            return repositorio.PacientesDia(_modelLogin);
        }

        public string PacienteEmail(int id)
        {
            return repositorio.PacienteEmail(id);
        }
    }
}
