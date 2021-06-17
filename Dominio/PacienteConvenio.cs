using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class PacienteConvenio
    {
        public int Id { get; set; }
        public int IdPacienteConvenio { get; set; }

        [DisplayName("Convênio")]
        public string Convenio { get; set; }

        [DisplayName("Plano")]
        public string Plano { get; set; }

        [DisplayName("Número da Carteirinha")]
        public int NumeroCarteirinha { get; set; }
        public string ValidadeS { get; set; }

        [DisplayName("Validade")]
        public System.DateTime Validade { get; set; }

        [DisplayName("Acomodação")]
        public string Acomodacao { get; set; }
        public Nullable<int> PacienteDados_Id { get; set; }
        public virtual PacienteDados PacienteDados { get; set; }
    }
}
