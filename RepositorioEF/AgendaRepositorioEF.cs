using Dominio;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositorioEF
{
    public class AgendaRepositorioEF
    {
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
        public string nomepaciente;
        public int medico;
        public string nomemedico;
        public string duracao;

        private Contexto contexto = new Contexto();

        public void UpdateDiaryEvent(Agenda entidade)
        {
            var UpdateLembrete = contexto.Lembretes.First(x => x.id == entidade.IdLembrete);
            UpdateLembrete.DataLembrete = entidade.Lembretes.DataLembrete;
            UpdateLembrete.Lembrete = entidade.Lembretes.Lembrete;
            UpdateLembrete.Celular = entidade.Lembretes.Celular;

            if (UpdateLembrete.ListLembretesAgenda.Count() == 0)
            {
                UpdateLembrete.ListLembretesAgenda.Add(new Agenda());
            }
            UpdateLembrete.ListLembretesAgenda.FirstOrDefault().DateTimeScheduled = entidade.DateTimeScheduled;
            UpdateLembrete.ListLembretesAgenda.FirstOrDefault().AppointmentLength = entidade.AppointmentLength;
            UpdateLembrete.ListLembretesAgenda.FirstOrDefault().AlteradoPor = entidade.AlteradoPor;
            UpdateLembrete.ListLembretesAgenda.FirstOrDefault().DataAlterado = entidade.DataAlterado;

            contexto.SaveChanges();
        }

        public void UpdatePacienteAguardando(Agenda entidade)
        {
            var UpdateAgenda = contexto.Agenda.First(x => x.ID == entidade.ID);
            if (UpdateAgenda.StatusENUM == 1)
                UpdateAgenda.StatusENUM = 0;
            else
                UpdateAgenda.StatusENUM = 1;

            contexto.SaveChanges();
        }

        public bool DeleteEvent(Agenda entidade)
        {
            try
            {
                var UpdateLembrete = contexto.Lembretes.First(x => x.id == entidade.IdLembrete);
                UpdateLembrete.Deletado = true;

                if (UpdateLembrete.ListLembretesAgenda.Count() == 0)
                {
                    UpdateLembrete.ListLembretesAgenda.Add(new Agenda());
                }
                UpdateLembrete.ListLembretesAgenda.FirstOrDefault().IdUsuario = entidade.IdUsuario;
                UpdateLembrete.ListLembretesAgenda.FirstOrDefault().Deletado = entidade.Deletado;
                UpdateLembrete.ListLembretesAgenda.FirstOrDefault().AlteradoPor = entidade.AlteradoPor;
                UpdateLembrete.ListLembretesAgenda.FirstOrDefault().DataAlterado = entidade.DataAlterado;

                contexto.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool CreateNewEvent(ClinicPulse _model)
        {
            try
            {
                contexto.Agenda.Add(_model.Agenda);
                contexto.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        private void CreateNew(ClinicPulse _model, Agenda rec)
        {
            //            var cmdComando = new SqlCommand();

            //            cmdComando.CommandText = @"INSERT INTO Agenda
            //                    (Title, IdPaciente, DateTimeScheduled, AppointmentLength, StatusENUM, IdUsuario, Clinica, AlteradoPor, DataAlterado, IdMedico, Deletado)
            //                    VALUES 
            //                    (@Title, @IdPaciente, @DateTimeScheduled, @AppointmentLength, @StatusENUM, @IdUsuario, @Clinica, @AlteradoPor, @DataAlterado, @IdMedico, @Deletado)";

            //            cmdComando.Parameters.AddWithValue("Title", SqlDbType.Text).Value = rec.Title;
            //            cmdComando.Parameters.AddWithValue("IdPaciente", SqlDbType.Int).Value = rec.IdPaciente;
            //            cmdComando.Parameters.AddWithValue("DateTimeScheduled", SqlDbType.DateTime).Value = rec.DateTimeScheduled;
            //            cmdComando.Parameters.AddWithValue("AppointmentLength", SqlDbType.Int).Value = rec.AppointmentLength;
            //            cmdComando.Parameters.AddWithValue("StatusENUM", SqlDbType.Int).Value = rec.StatusENUM;
            //            cmdComando.Parameters.AddWithValue("IdUsuario", SqlDbType.UniqueIdentifier).Value = _model.LogIn.IdUsuario;
            //            cmdComando.Parameters.AddWithValue("Clinica", SqlDbType.Text).Value = _model.LogIn.Clinica;
            //            cmdComando.Parameters.AddWithValue("AlteradoPor", SqlDbType.UniqueIdentifier).Value = _model.LogIn.IdUsuario;
            //            cmdComando.Parameters.AddWithValue("DataAlterado", SqlDbType.DateTime).Value = TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time"));
            //            cmdComando.Parameters.AddWithValue("IdMedico", SqlDbType.Int).Value = rec.IdMedico;
            //            cmdComando.Parameters.AddWithValue("Deletado", SqlDbType.Bit).Value = false;

            //            using (contexto = new Contexto())
            //            {
            //                contexto.ExecutaComando(cmdComando);
            //            }
        }

        public List<Agenda> LoadAppointmentSummaryInDateRange(DateTime fromDate, DateTime toDate, LogIn login, string idMedico)
        {
            List<Agenda> ListAgenda = new List<Agenda>();
            if (string.IsNullOrEmpty(idMedico) && login.Perfil != "Medico")
            {
                var agenda = contexto.Agenda.Join(contexto.LogIn,
                             post => post.IdMedico,
                             meta => meta.Id,
                             (post, meta) => new { Post = post, Meta = meta })
                          .Where(postAndMeta => postAndMeta.Post.DateTimeScheduled >= fromDate
                                              && postAndMeta.Post.DateTimeScheduled <= toDate
                                              && postAndMeta.Post.Clinica == login.Clinica
                                              && postAndMeta.Post.Deletado == false
                          ).ToList();
                foreach (var c in agenda)
                {
                    c.Post.Cor = c.Meta.Cor;
                    ListAgenda.Add(c.Post);
                }
            }
            else
            {
                int id;
                if (!string.IsNullOrEmpty(idMedico))
                    id = Int32.Parse(idMedico);
                else
                    id = login.Id;

                var agenda = contexto.Agenda.Join(contexto.LogIn,
                             post => post.IdMedico,
                             meta => meta.Id,
                             (post, meta) => new { Post = post, Meta = meta })
                          .Where(postAndMeta => postAndMeta.Post.DateTimeScheduled >= fromDate
                                              && postAndMeta.Post.DateTimeScheduled <= toDate
                                              && postAndMeta.Post.Clinica == login.Clinica
                                              && postAndMeta.Post.Deletado == false
                                              && postAndMeta.Post.IdMedico == id
                          ).ToList();
                foreach (var c in agenda)
                {
                    c.Post.Cor = c.Meta.Cor;
                    ListAgenda.Add(c.Post);
                }
            }

            return ListAgenda;
        }
        private static DateTime ConvertFromUnixTimestamp(double timestamp)
        {
            var origin = new DateTime(1970, 1, 1, 0, 0, 0, 0);
            return origin.AddSeconds(timestamp);
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
            return contexto.PacienteDados.Where(x => x.Clinica == clinica).OrderBy(x => x.Nome).Select(x => new Listas.ChaveValor { Chave = x.Id, Valor = x.Nome }).ToList();
        }
        public List<Listas.ChaveValor> FiltroMedico(string clinica)
        {
            return contexto.LogIn.Where(x => x.Clinica == clinica && x.Perfil == "Medico").OrderBy(x => x.Nome).Select(x => new Listas.ChaveValor { Chave = x.Id, Valor = x.Nome }).ToList();
        }

        public List<LogIn> LegendaMedico(string clinica)
        {
            return contexto.LogIn.Where(x => x.Clinica == clinica && x.Perfil == "Medico").OrderBy(x => x.Nome).ToList();
        }

        public List<PacienteAgenda> PacientesDia(LogIn _modelLogin)
        {
            DateTime ini = DateTime.Now.Date;
            DateTime fim = DateTime.Now.Date.AddDays(1);
            List<PacienteAgenda> ListAgenda = new List<PacienteAgenda>();
            if (_modelLogin.Perfil == "Medico")
            {
                var agenda = contexto.Agenda.Join(contexto.PacienteDados,
                  Agenda => Agenda.IdPaciente,
                  Paciente => Paciente.Id,
                  (Agenda, Paciente) => new { Agenda, Paciente }).Join(contexto.LogIn,
                  Medico => Medico.Agenda.IdMedico,
                  nomemedico => nomemedico.Id,
                  (Medico, nomemedico) => new { Medico, nomemedico })
                  .Where(postAndMeta => postAndMeta.Medico.Agenda.DateTimeScheduled >= ini
                                   && postAndMeta.Medico.Agenda.DateTimeScheduled <= fim
                                   && postAndMeta.Medico.Agenda.Clinica == _modelLogin.Clinica
                                   && postAndMeta.Medico.Agenda.Deletado == false
                                   && postAndMeta.Medico.Agenda.IdMedico == _modelLogin.Id
                  ).ToList();


                foreach (var c in agenda)
                {
                    PacienteAgenda PA = new PacienteAgenda();
                    PA.StatusENUM = c.Medico.Agenda.StatusENUM;
                    PA.ID = c.Medico.Agenda.ID;
                    PA.Nome = c.Medico.Paciente.Nome;
                    PA.Title = c.Medico.Agenda.Title;
                    PA.DateTimeScheduled = c.Medico.Agenda.DateTimeScheduled;
                    PA.Medico = c.nomemedico.Nome;
                    ListAgenda.Add(PA);
                }
            }
            else
            {
                var agenda = contexto.Agenda.Join(contexto.PacienteDados,
                  Agenda => Agenda.IdPaciente,
                  Paciente => Paciente.Id,
                  (Agenda, Paciente) => new { Agenda, Paciente }).Join(contexto.LogIn,
                  Medico => Medico.Agenda.IdMedico,
                  nomemedico => nomemedico.Id,
                  (Medico, nomemedico) => new { Medico, nomemedico })
                  .Where(postAndMeta => postAndMeta.Medico.Agenda.DateTimeScheduled >= ini
                                   && postAndMeta.Medico.Agenda.DateTimeScheduled <= fim
                                   && postAndMeta.Medico.Agenda.Clinica == _modelLogin.Clinica
                                   && postAndMeta.Medico.Agenda.Deletado == false
                  ).ToList();


                foreach (var c in agenda)
                {
                    PacienteAgenda PA = new PacienteAgenda();
                    PA.StatusENUM = c.Medico.Agenda.StatusENUM;
                    PA.ID = c.Medico.Agenda.ID;
                    PA.Nome = c.Medico.Paciente.Nome;
                    PA.Title = c.Medico.Agenda.Title;
                    PA.DateTimeScheduled = c.Medico.Agenda.DateTimeScheduled;
                    PA.Medico = c.nomemedico.Nome;
                    ListAgenda.Add(PA);
                }
            }

            return ListAgenda;
        }

        public string PacienteEmail(int id)
        {
            var paciente = contexto.PacienteDados.Where(x => x.Id == id).FirstOrDefault();
            return paciente.Email;
        }

        public int Pacienteid(int id, string Clinica)
        {
            var paciente = contexto.Agenda.Where(x => x.ID == id && x.Clinica == Clinica).FirstOrDefault();
            return paciente.IdPaciente;
        }
    }
}
