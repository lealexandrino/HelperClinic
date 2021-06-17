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
    public class ConsultaAplicacao
    {
        private ConsultaRepositorioEF repositorio = new ConsultaRepositorioEF();

        #region Update
        public void UpdatePaciente(ClinicPulse _model)
        {
            _model.PacienteDados.DataNascimento = DateTime.ParseExact(_model.PacienteDados.DataNascimentoS, "dd/MM/yyyy", new CultureInfo("en-US"));
            if (_model.PacienteConvenio.ValidadeS != null)
                _model.PacienteConvenio.Validade = DateTime.ParseExact(_model.PacienteConvenio.ValidadeS, "dd/MM/yyyy", new CultureInfo("en-US"));
            else if (_model.PacienteConvenio.Validade.ToString() == "01/01/0001 00:00:00")
                _model.PacienteConvenio.Validade = new DateTime(1900, 1, 1).Add(Convert.ToDateTime("01/01/1900 12:00:00").TimeOfDay);

            repositorio.UpdatePaciente(_model);
        }
        #endregion

        #region Consulta
        public List<PacienteDados> ListGrid(ClinicPulse _model)
        {
            return repositorio.ListGrid(_model);            
        }

        public PacienteDados Paciente(int id, string clinica)
        {
            return repositorio.Paciente(id, clinica);
        }

        public int ExisteCpf(string cpf)
        {
            return repositorio.ExisteCpf(cpf);
        }
        #endregion
    }
}
