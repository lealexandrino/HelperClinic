using Dominio;
using RepositorioEF;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacao
{
    public class PainelAplicacao
    {
        private PainelRepositorioEF repositorio = new PainelRepositorioEF();

        public void InserirLembrete(Lembretes _model)
        {
            repositorio.InserirLembrete(_model);
        }

        public DadosPainel Dados(LogIn _model)
        {
            DateTime date = TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time"));
            while (date.DayOfWeek != DayOfWeek.Sunday)
            {
                date = date.AddDays(-1);
            }

            string startDate = date.ToString("dd/MM/yyyy 00:00:00");
            string endDate = date.AddDays(6).ToString("dd/MM/yyyy 23:59:59");

            DateTime start = DateTime.ParseExact(startDate, "dd/MM/yyyy HH:mm:ss", new CultureInfo("en-US")); ;
            DateTime end = DateTime.ParseExact(endDate, "dd/MM/yyyy HH:mm:ss", new CultureInfo("en-US")); ;

            var lista = repositorio.Dados(_model, start, end);
            DadosPainel dados = new DadosPainel();
            foreach(var item in lista)
            {
                if (item.Novo == "Sim")
                    dados.Novos += 1;
                else
                    dados.Velhos += 1;
            }
            return dados;
        }

        public ClinicPulse ListLembretes(ClinicPulse _model)
        {
            _model.ListLembretes = repositorio.ListLembretes(_model);

            if (_model.ListLembretes.Count() != 0)
            {
                int j = 0;
                _model.Lembretes.QuantidadePaginas = 1;
                for (int i = 0; i < _model.ListLembretes[0].QuantidadePaginas; i++)
                {
                    if (j == 9)
                    {
                        _model.Lembretes.QuantidadePaginas += 1;
                        j = 0;
                    }
                    else
                    {
                        j++;
                    }
                }
                foreach (var c in _model.ListLembretes)
                {
                    TimeSpan span = (c.DataLembrete - TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time")));
                    if (span.Days != 0)
                        c.Dias = span.Days;
                    else if (span.Hours != 0)
                        c.Horas = span.Hours;
                    else
                        c.Minutos = span.Minutes;
                }
            }
            return _model;
        }
        public ClinicPulse ListLembretesDiarios(ClinicPulse _model)
        {
            _model.ListLembretesDiarios = repositorio.ListLembretesDiarios(_model);

            if (_model.ListLembretesDiarios.Count() != 0)
            {
                int j = 0;
                _model.Lembretes.QuantidadePaginas = 1;
                for (int i = 0; i < _model.ListLembretesDiarios[0].QuantidadePaginas; i++)
                {
                    if (j == 9)
                    {
                        _model.Lembretes.QuantidadePaginas += 1;
                        j = 0;
                    }
                    else
                    {
                        j++;
                    }
                }
                foreach (var c in _model.ListLembretesDiarios)
                {
                    TimeSpan span = (c.DataLembrete - TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time")));
                    if (span.Days != 0)
                        c.Dias = span.Days;
                    else if (span.Hours != 0)
                        c.Horas = span.Hours;
                    else
                        c.Minutos = span.Minutes;
                }
            }
            return _model;
        }

        public bool Deletar(int id, Guid IdUsuario)
        {
            try
            {
                repositorio.Deletar(id, IdUsuario);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

    }
}
