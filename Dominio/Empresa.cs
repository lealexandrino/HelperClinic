using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;

namespace Dominio
{
    public class Empresa
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Foto { get; set; }
        [DisplayName("CodeName Clinica")]
        public string Clinica { get; set; }
        public string ClinicaEmail { get; set; }
        public string ClinicaTelefone { get; set; }
        [DisplayName("Qtde de SMS")]
        public int QtdeMensagemRestante { get; set; }
        [DisplayName("Mensagem Padrão para o final do Lembrete")]
        public string MensagemWhatsApp { get; set; }
        public string CNPJ { get; set; }

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
    }
}
