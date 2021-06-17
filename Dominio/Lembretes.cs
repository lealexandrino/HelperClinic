using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Lembretes
    {
        public int id { get; set; }
        public int Pagina { get; set; }
        public Nullable<System.Guid> IdUsuario { get; set; }
        public string Lembrete { get; set; }
        public System.DateTime DataLembrete { get; set; }
        public int Minutos { get; set; }
        public int Horas { get; set; }
        public int Dias { get; set; }
        public int QuantidadePaginas { get; set; }
        public string HoraMinuto { get; set; }
        public string Celular { get; set; }
        public int Tipo { get; set; }
        public string Clinica { get; set; }
        public bool Deletado { get; set; }
        public virtual ICollection<Agenda> ListLembretesAgenda { get; set; }
    }
}
