using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class ProntuarioHipotese
    {
        public int Id { get; set; }
        public int IdPaciente { get; set; }
        public System.Guid IdUsuario { get; set; }

        [DisplayName("Clínica")]
        public string Clinica { get; set; }

        [DisplayName("Diagnóstico")]
        public string Diagnostico { get; set; }

        [DisplayName("Observação")]
        public string Obs { get; set; }
        public Nullable<int> ProntuarioConsulta_Id { get; set; }
        public virtual ProntuarioConsulta ProntuarioConsulta { get; set; }
    }
}
