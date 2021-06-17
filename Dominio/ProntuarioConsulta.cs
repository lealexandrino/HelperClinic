using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class ProntuarioConsulta
    {
        public ProntuarioConsulta()
        {
            this.ListProntuarioAnamnese = new List<ProntuarioAnamnese>();
            this.ListProntuarioEvolucao = new List<ProntuarioEvolucao>();
            this.ListProntuarioExame = new List<ProntuarioExame>();
            this.ListProntuarioHipotese = new List<ProntuarioHipotese>();
            this.ListProntuarioDentista = new List<ProntuarioDentista>();
        }

        public int Id { get; set; }
        public int IdConsulta { get; set; }
        public int IdPaciente { get; set; }
        public System.Guid IdUsuario { get; set; }

        [DisplayName("Clínica")]
        public string Clinica { get; set; }

        [DisplayName("Duração da Consulta")]
        public string DuracaoConsulta { get; set; }

        [DisplayName("Observação")]
        public System.DateTime DataConsulta { get; set; }
        public string NomeMedico;
        public virtual ICollection<ProntuarioAnamnese> ListProntuarioAnamnese { get; set; }
        public virtual ICollection<ProntuarioEvolucao> ListProntuarioEvolucao { get; set; }
        public virtual ICollection<ProntuarioExame> ListProntuarioExame { get; set; }
        public virtual ICollection<ProntuarioHipotese> ListProntuarioHipotese { get; set; }
        public virtual ICollection<ProntuarioDentista> ListProntuarioDentista { get; set; }
    }
}
