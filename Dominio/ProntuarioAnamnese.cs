using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class ProntuarioAnamnese
    {
        public int Id { get; set; }
        public int IdPaciente { get; set; }
        public System.Guid IdUsuario { get; set; }

        [DisplayName("Clínica")]
        public string Clinica { get; set; }

        [DisplayName("História")]
        public string Historia { get; set; }

        [DisplayName("Problema Renais")]
        public string ProblemaRenais { get; set; }

        [DisplayName("Problema Articulares")]
        public string ProblemaArticulares { get; set; }

        [DisplayName("Problema Cardíaco")]
        public string ProblemaCardiaco { get; set; }

        [DisplayName("Problema Respiratório")]
        public string ProblemaRespiratorio { get; set; }

        [DisplayName("Problema Gástrico")]
        public string ProblemaGastrico { get; set; }

        [DisplayName("Alergia")]
        public string Alergia { get; set; }

        [DisplayName("Hepatite")]
        public bool Hepatite { get; set; }

        [DisplayName("Hiv")]
        public bool Hiv { get; set; }

        [DisplayName("Diabetes")]
        public bool Diabetes { get; set; }

        [DisplayName("Gravidez")]
        public bool Gravidez { get; set; }

        [DisplayName("Uso de Medicamento")]
        public string UsoMedicamento { get; set; }

        [DisplayName("Queixa Principal")]
        public string QueixaPrincipal { get; set; }
        public Nullable<int> ProntuarioConsulta_Id { get; set; }
        public virtual ProntuarioConsulta ProntuarioConsulta { get; set; }
    }
}
