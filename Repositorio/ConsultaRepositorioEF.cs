using Dominio;
using System;
using System.Data.Entity;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositorioEF
{
    public class ConsultaRepositorioEF
    {
        private Contexto contexto = new Contexto();

        public void UpdatePaciente(ClinicPulse _model)
        {
            if ( _model.PacienteDados.Id > 0)
            {
                var UpdatePaciente = contexto.PacienteDados.First(x => x.Id == _model.PacienteDados.Id);

                UpdatePaciente.AceitaSms = _model.PacienteDados.AceitaSms;
                UpdatePaciente.AlteradoPor = _model.LogIn.IdUsuario;
                UpdatePaciente.DataAlterado = TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time"));
                UpdatePaciente.DataNascimento = _model.PacienteDados.DataNascimento;
                UpdatePaciente.Email = _model.PacienteDados.Email;
                UpdatePaciente.EnderecoBairro = _model.PacienteDados.EnderecoBairro;
                UpdatePaciente.EnderecoCEP = _model.PacienteDados.EnderecoCEP;
                UpdatePaciente.EnderecoCidade = _model.PacienteDados.EnderecoCidade;
                UpdatePaciente.EnderecoComplemento = _model.PacienteDados.EnderecoComplemento;
                UpdatePaciente.EnderecoEstado = _model.PacienteDados.EnderecoEstado;
                UpdatePaciente.EnderecoNumero = _model.PacienteDados.EnderecoNumero;
                UpdatePaciente.EnderecoPais = _model.PacienteDados.EnderecoPais;
                UpdatePaciente.EnderecoRua = _model.PacienteDados.EnderecoRua;
                UpdatePaciente.Nome = _model.PacienteDados.Nome;
                UpdatePaciente.Novo = _model.PacienteDados.Novo;
                UpdatePaciente.Obs = _model.PacienteDados.Obs;
                UpdatePaciente.PerguntaClinica = _model.PacienteDados.PerguntaClinica;
                UpdatePaciente.Sexo = _model.PacienteDados.Sexo;
                UpdatePaciente.TelefoneCelular = _model.PacienteDados.TelefoneCelular;
                UpdatePaciente.TelefoneFixo = _model.PacienteDados.TelefoneFixo;
                UpdatePaciente.TelefoneTrabalho = _model.PacienteDados.TelefoneTrabalho;

                if (UpdatePaciente.ListPacienteComplementar.Count() == 0)
                {
                    UpdatePaciente.ListPacienteComplementar.Add(new PacienteComplementar());
                }
                UpdatePaciente.ListPacienteComplementar.FirstOrDefault().Escolaridade = _model.PacienteComplementar.Escolaridade;
                UpdatePaciente.ListPacienteComplementar.FirstOrDefault().EstadoCivil = _model.PacienteComplementar.EstadoCivil;
                UpdatePaciente.ListPacienteComplementar.FirstOrDefault().EstadoNasceu = _model.PacienteComplementar.EstadoNasceu;
                UpdatePaciente.ListPacienteComplementar.FirstOrDefault().Etnia = _model.PacienteComplementar.Etnia;
                UpdatePaciente.ListPacienteComplementar.FirstOrDefault().Nacionalidade = _model.PacienteComplementar.Nacionalidade;
                UpdatePaciente.ListPacienteComplementar.FirstOrDefault().Naturalidade = _model.PacienteComplementar.Naturalidade;
                UpdatePaciente.ListPacienteComplementar.FirstOrDefault().Profissao = _model.PacienteComplementar.Profissao;
                UpdatePaciente.ListPacienteComplementar.FirstOrDefault().Rg = _model.PacienteComplementar.Rg;


                if (UpdatePaciente.ListPacienteConvenio.Count() == 0)
                {
                    UpdatePaciente.ListPacienteConvenio.Add(new PacienteConvenio());
                }
                UpdatePaciente.ListPacienteConvenio.FirstOrDefault().Acomodacao = _model.PacienteConvenio.Acomodacao;
                UpdatePaciente.ListPacienteConvenio.FirstOrDefault().Convenio = _model.PacienteConvenio.Convenio;
                UpdatePaciente.ListPacienteConvenio.FirstOrDefault().NumeroCarteirinha = _model.PacienteConvenio.NumeroCarteirinha;
                UpdatePaciente.ListPacienteConvenio.FirstOrDefault().Plano = _model.PacienteConvenio.Plano;
                if(_model.PacienteConvenio.Validade.ToString() == "1/1/0001 12:00:00 AM")
                    UpdatePaciente.ListPacienteConvenio.FirstOrDefault().Validade = Convert.ToDateTime("01/01/1900");
                else
                    UpdatePaciente.ListPacienteConvenio.FirstOrDefault().Validade = _model.PacienteConvenio.Validade;
                

                contexto.SaveChanges();
            }
        }

        public List<PacienteDados> ListGrid(ClinicPulse _model)
        {           
            return contexto.PacienteDados.Where(x => x.Clinica == _model.LogIn.Clinica).ToList();
        }

        public PacienteDados Paciente(int id, string clinica)
        {
            PacienteDados _model = new PacienteDados();
            _model = contexto.PacienteDados.FirstOrDefault(x => x.Id == id && x.Clinica == clinica);

            return _model;
        }

        public int ExisteCpf(string cpf)
        {
            return contexto.PacienteDados.Where(x => x.Cpf == cpf).Count();
        }
    }
}
