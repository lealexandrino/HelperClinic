using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class PacienteComplementar
    {
        public int Id { get; set; }
        public int IdPacienteComplementar { get; set; }

        [DisplayName("Naturalidade")]
        public string Naturalidade { get; set; }

        [DisplayName("Estado em que Nasceu")]
        public string EstadoNasceu { get; set; }

        [DisplayName("Nacionalidade")]
        public string Nacionalidade { get; set; }

        [DisplayName("Etnia")]
        public string Etnia { get; set; }

        [DisplayName("Rg")]
        public string Rg { get; set; }

        [DisplayName("Estado civil")]
        public string EstadoCivil { get; set; }

        [DisplayName("Profissão")]
        public string Profissao { get; set; }

        [DisplayName("Escolaridade")]
        public string Escolaridade { get; set; }
        public Nullable<int> PacienteDados_Id { get; set; }
        public virtual PacienteDados PacienteDados { get; set; }
    }
}
