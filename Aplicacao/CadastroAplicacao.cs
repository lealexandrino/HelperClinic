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
    public class CadastroAplicacao
    {
        private CadastroRepositorioEF repositorio = new CadastroRepositorioEF();

        #region GRAVAR & ALTERAR
        public void SalvarAtividade(ClinicPulse _model)
        {
            _model.PacienteDados.DataNascimento = DateTime.ParseExact(_model.PacienteDados.DataNascimentoS, "dd/MM/yyyy", new CultureInfo("en-US"));
            if (_model.PacienteConvenio.ValidadeS != null)
                _model.PacienteConvenio.Validade = DateTime.ParseExact(_model.PacienteConvenio.ValidadeS, "dd/MM/yyyy", new CultureInfo("en-US"));
            else if (_model.PacienteConvenio.Validade.ToString() == "01/01/0001 00:00:00")
                _model.PacienteConvenio.Validade = new DateTime(1900, 1, 1).Add(Convert.ToDateTime("01/01/1900 12:00:00").TimeOfDay);

            _model.PacienteDados.CriadoPor = _model.LogIn.IdUsuario;
            _model.PacienteDados.AlteradoPor = _model.LogIn.IdUsuario;
            _model.PacienteDados.DataAlterado = TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time"));
            _model.PacienteDados.Clinica = _model.LogIn.Clinica;
            _model.PacienteDados.Novo = "Sim";

            _model.PacienteComplementar.PacienteDados = _model.PacienteDados;
            _model.PacienteConvenio.PacienteDados = _model.PacienteDados;

            repositorio.SalvarAtividade(_model);
        }

        #endregion

        #region Consulta
        public int ExisteCpf(string cpf, string clinica)
        {
            return repositorio.ExisteCpf(cpf, clinica);
        }
        #endregion


    }
}
