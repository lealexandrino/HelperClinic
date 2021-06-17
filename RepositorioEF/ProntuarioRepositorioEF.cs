using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositorioEF
{
    public class ProntuarioRepositorioEF
    {
        private Contexto contexto = new Contexto();
        public void UsuarioComHistorico(int id)
        {
            var UpdatePaciente = contexto.PacienteDados.Where(x => x.Id == id).FirstOrDefault();
            UpdatePaciente.Novo = "Nao";
            contexto.SaveChanges();
        }
        public void SalvaProntuario(ClinicPulse _model)
        {
            contexto.ProntuarioAnamnese.Add(_model.ProntuarioAnamnese);
            contexto.ProntuarioEvolucao.Add(_model.ProntuarioEvolucao);
            contexto.ProntuarioExame.Add(_model.ProntuarioExame);
            contexto.ProntuarioHipotese.Add(_model.ProntuarioHipotese);
            
            contexto.SaveChanges();
        }
        public List<PacienteDados> ListGrid(string clinica)
        {
            return contexto.PacienteDados.Where(x => x.Clinica == clinica).ToList();
        }
        public List<ProntuarioConsulta> ListHistorico(int id, string clinica)
        {
            return contexto.ProntuarioConsulta
                .Where(x => x.IdPaciente == id && x.Clinica == clinica && x.DuracaoConsulta != null)
                    .OrderByDescending(x => x.DataConsulta)
                        .ToList();
        }
    }
}
