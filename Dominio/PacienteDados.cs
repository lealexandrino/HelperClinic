using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class PacienteDados
    {
        public PacienteDados()
        {
            this.ListPacienteComplementar = new List<PacienteComplementar>();
            this.ListPacienteConvenio = new List<PacienteConvenio>();
        }

        public int Id { get; set; }

        [DisplayName("Nome")]
        public string Nome { get; set; }
        public string DataNascimentoS { get; set; }

        [DisplayName("Data de Nascimento")]
        public System.DateTime DataNascimento { get; set; }

        [DisplayName("Sexo")]
        public string Sexo { get; set; }

        [DisplayName("Email")]
        public string Email { get; set; }

        [DisplayName("Obs")]
        public string Obs { get; set; }

        [DisplayName("Pergunta Clinica")]
        public string PerguntaClinica { get; set; }

        [DisplayName("Telefone Fixo")]
        public string TelefoneFixo { get; set; }

        [DisplayName("Telefone Celular")]
        public string TelefoneCelular { get; set; }

        [DisplayName("Telefone Trabalho")]
        public string TelefoneTrabalho { get; set; }

        [DisplayName("Aceita Sms?")]
        public bool AceitaSms { get; set; }

        [DisplayName("CEP")]
        public string EnderecoCEP { get; set; }

        [DisplayName("Rua")]
        public string EnderecoRua { get; set; }

        [DisplayName("Numero")]
        public int EnderecoNumero { get; set; }

        [DisplayName("Complemento")]
        public string EnderecoComplemento { get; set; }

        [DisplayName("Bairro")]
        public string EnderecoBairro { get; set; }

        [DisplayName("Cidade")]
        public string EnderecoCidade { get; set; }

        [DisplayName("Estado")]
        public string EnderecoEstado { get; set; }

        [DisplayName("País")]
        public string EnderecoPais { get; set; }

        public System.Guid CriadoPor { get; set; }
        public System.Guid AlteradoPor { get; set; }
        public System.DateTime DataAlterado { get; set; }
        public string Clinica { get; set; }
        public string Cpf { get; set; }
        public string Novo { get; set; }
        public virtual ICollection<PacienteComplementar> ListPacienteComplementar { get; set; }
        public virtual ICollection<PacienteConvenio> ListPacienteConvenio { get; set; }
    }
}
