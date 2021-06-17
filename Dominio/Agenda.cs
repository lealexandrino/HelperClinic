using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Agenda
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public int IdPaciente { get; set; }
        public System.DateTime DateTimeScheduled { get; set; }
        public int AppointmentLength { get; set; }
        public int StatusENUM { get; set; }
        public Nullable<System.Guid> IdUsuario { get; set; }
        public Nullable<System.Guid> AlteradoPor { get; set; }
        public string Clinica { get; set; }
        public int IdMedico { get; set; }
        public string Cor { get; set; }
        public System.DateTime DataAlterado { get; set; }
        public bool Deletado { get; set; }
        public Nullable<int> IdLembrete { get; set; }
        public virtual Lembretes Lembretes { get; set; }
    }
}
