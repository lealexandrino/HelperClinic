using Dominio;
using RepositorioEF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacao
{
    public class ConfiguracaoAplicacao
    {
        ConfiguracaoEF repositorio = new ConfiguracaoEF();

        public void UpdateConfiguracao(ClinicPulse _model)
        {
            repositorio.UpdateConfiguracao(_model);
        }

        #region Consulta
        public Empresa Empresa(string clinica)
        {
            return repositorio.Empresa(clinica);
        }
        #endregion
    }
}
