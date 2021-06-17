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
    public class RelatorioAplicacao
    {
        private RelatorioRepositorioEF repositorio = new RelatorioRepositorioEF();
        public List<Relatorio> ListRelatorio(ClinicPulse _model)
        {
            _model.Relatorio.IdUsuario = _model.LogIn.IdUsuario;
            _model.Relatorio.DataInicial = DateTime.ParseExact(_model.Relatorio.DataInicials, "dd/MM/yyyy", new CultureInfo("en-US"));

            _model.Relatorio.DataFims += " 23:59:59";
            _model.Relatorio.DataFim = DateTime.ParseExact(_model.Relatorio.DataFims, "dd/MM/yyyy HH:mm:ss", new CultureInfo("en-US"));

            return repositorio.ListRelatorio(_model);
        }
    }
}
