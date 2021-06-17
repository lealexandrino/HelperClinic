using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class LogIn
    {
        public int Id { get; set; }
        public System.Guid IdUsuario { get; set; }
        public string Nome { get; set; }
        public System.DateTime LastActiveDate { get; set; }
        public string Perfil { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Foto { get; set; }
        public string Clinica { get; set; }
        public string Cor { get; set; }
        public string ClinicaEmail { get; set; }
        public string Teste { get; set; }
        public int CodEmpresa { get; set; }
        public Guid CodSessao { get; set; }
    }
}
