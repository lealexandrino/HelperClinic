using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositorioEF
{
    public class CadastroRepositorioEF
    {
        private Contexto contexto = new Contexto();
        public void SalvarAtividade(ClinicPulse _model)
        {
            contexto.PacienteComplementar.Add(_model.PacienteComplementar);
            contexto.PacienteConvenio.Add(_model.PacienteConvenio);
            contexto.SaveChanges();
        }

        public int ExisteCpf(string cpf, string clinica)
        {
            return contexto.PacienteDados.Where(x => x.Cpf == cpf && x.Clinica == clinica).Count();
        }
    }
}
