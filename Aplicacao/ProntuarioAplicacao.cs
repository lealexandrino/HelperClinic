using Dominio;
using RepositorioEF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacao
{
    public class ProntuarioAplicacao
    {
        private ProntuarioRepositorioEF repositorio = new ProntuarioRepositorioEF();
        public void SalvarProntuario(ClinicPulse _model)
        {
            _model.ProntuarioConsulta.IdUsuario = _model.LogIn.IdUsuario;
            _model.ProntuarioConsulta.Clinica = _model.LogIn.Clinica;
            _model.ProntuarioConsulta.DataConsulta = TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time"));

            _model.ProntuarioAnamnese.IdUsuario = _model.LogIn.IdUsuario;
            _model.ProntuarioAnamnese.Clinica = _model.LogIn.Clinica;

            _model.ProntuarioEvolucao.IdUsuario = _model.LogIn.IdUsuario;
            _model.ProntuarioEvolucao.Clinica = _model.LogIn.Clinica;

            _model.ProntuarioExame.IdUsuario = _model.LogIn.IdUsuario;
            _model.ProntuarioExame.Clinica = _model.LogIn.Clinica;

            _model.ProntuarioHipotese.IdUsuario = _model.LogIn.IdUsuario;
            _model.ProntuarioHipotese.Clinica = _model.LogIn.Clinica;

            _model.ProntuarioDentista.IdUsuario = _model.LogIn.IdUsuario;
            _model.ProntuarioDentista.Clinica = _model.LogIn.Clinica;

            _model.ProntuarioAnamnese.ProntuarioConsulta = _model.ProntuarioConsulta;
            _model.ProntuarioEvolucao.ProntuarioConsulta = _model.ProntuarioConsulta;
            _model.ProntuarioExame.ProntuarioConsulta = _model.ProntuarioConsulta;
            _model.ProntuarioHipotese.ProntuarioConsulta = _model.ProntuarioConsulta;
            _model.ProntuarioDentista.ProntuarioConsulta = _model.ProntuarioConsulta;
            repositorio.UsuarioComHistorico(_model.ProntuarioConsulta.IdPaciente);
            repositorio.SalvaProntuario(_model);
        }
        public List<PacienteDados> ListGrid(string clinica)
        {
            return repositorio.ListGrid(clinica);
        }
        public List<ProntuarioConsulta> ListHistorico(int id, string clinica)
        {
            return repositorio.ListHistorico(id, clinica);
        }
    }
}
