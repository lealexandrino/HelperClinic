using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class ProntuarioDentista
    {
        public int Id { get; set; }
        public int IdPaciente { get; set; }
        public System.Guid IdUsuario { get; set; }

        [DisplayName("Clínica")]
        public string Clinica { get; set; }

        #region Sangramento
        public int s11a { get; set; }
        public string Extracao { get; set; }
        public string Furca { get; set; }
        public string protese { get; set; }

        #endregion
        public Nullable<int> ProntuarioConsulta_Id { get; set; }
        public virtual ProntuarioConsulta ProntuarioConsulta { get; set; }
    }
}
