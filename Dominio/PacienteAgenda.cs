using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class PacienteAgenda
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Nome { get; set; }
        public string Medico { get; set; }
        public System.DateTime DateTimeScheduled { get; set; }
        public int StatusENUM { get; set; }

    }
}
