using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class ProntuarioExame
    {
        public int Id { get; set; }
        public int IdPaciente { get; set; }
        public System.Guid IdUsuario { get; set; }

        [DisplayName("Clínica ")]
        public string Clinica { get; set; }

        [DisplayName("Altura ")]
        public string Altura { get; set; }

        [DisplayName("Peso ")]
        public string Peso { get; set; }

        [DisplayName("Frequência Cardíaca ")]
        public string FrequenciaCardiaca { get; set; }

        [DisplayName("Pressão Arterial Sistólica")]
        public string PressaoArterialSistolica { get; set; }

        [DisplayName("Pressão Arterial Diastólica")]
        public string PressaoArterialDiastolica { get; set; }

        [DisplayName("Observação")]
        public string Obs { get; set; }
        public Nullable<int> ProntuarioConsulta_Id { get; set; }
        public virtual ProntuarioConsulta ProntuarioConsulta { get; set; }
    }
}
