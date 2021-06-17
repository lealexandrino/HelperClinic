using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositorioEF
{
    public class ConfiguracaoEF
    {
        private Contexto contexto = new Contexto();

        public void UpdateConfiguracao(ClinicPulse _model)
        {
            if (_model.Empresa.Id > 0)
            {
                var UpdateEmpresa = contexto.Empresa.First(x => x.Id == _model.Empresa.Id);

                UpdateEmpresa.Nome = _model.Empresa.Nome;
                UpdateEmpresa.Clinica = _model.Empresa.Clinica;
                UpdateEmpresa.ClinicaEmail = _model.Empresa.ClinicaEmail;
                UpdateEmpresa.CNPJ = _model.Empresa.CNPJ;
                UpdateEmpresa.EnderecoCEP = _model.Empresa.EnderecoCEP;
                UpdateEmpresa.EnderecoRua = _model.Empresa.EnderecoRua;
                UpdateEmpresa.EnderecoNumero = _model.Empresa.EnderecoNumero;
                UpdateEmpresa.EnderecoComplemento = _model.Empresa.EnderecoComplemento;
                UpdateEmpresa.EnderecoBairro = _model.Empresa.EnderecoBairro;
                UpdateEmpresa.EnderecoCidade = _model.Empresa.EnderecoCidade;
                UpdateEmpresa.EnderecoEstado = _model.Empresa.EnderecoEstado;
                UpdateEmpresa.EnderecoPais = _model.Empresa.EnderecoPais;
                UpdateEmpresa.MensagemWhatsApp = _model.Empresa.MensagemWhatsApp;

                contexto.SaveChanges();
            }
        }

        public Empresa Empresa(string clinica)
        {
            Empresa _model = new Empresa();
            _model = contexto.Empresa.FirstOrDefault(x=> x.Clinica == clinica);

            return _model;
        }
    }
}
