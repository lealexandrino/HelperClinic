using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Relatorio
    {
        public int Id { get; set; }
        public Guid IdUsuario { get; set; }
        public string DataInicials { get; set; }
        public string DataFims { get; set; }

        [DisplayName("Data Inicial")]
        public DateTime DataInicial { get; set; }

        [DisplayName("Data Final")]
        public DateTime DataFim { get; set; }
        public DateTime DateTimeScheduled { get; set; }
        public int AppointmentLength { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string TelefoneCelular { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Registros { get; set; }
    }
}
