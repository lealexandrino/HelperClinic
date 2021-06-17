using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositorioEF
{
    public class CadastrarGratisEF
    {
        private Contexto contexto = new Contexto();
        public void Cadastrar(ClinicPulse _model)
        {
            try
            {
                if (contexto.LogIn.Where(x => x.Email == _model.LogIn.Email).Count() == 0)
                {
                    if (contexto.LogIn.Where(x => x.Clinica == _model.LogIn.Clinica).Count() == 0)
                    {
                        _model.Empresa = new Empresa();
                        _model.Empresa.Nome = _model.LogIn.Clinica;
                        _model.Empresa.Clinica = _model.LogIn.Clinica;
                        _model.Empresa.ClinicaEmail = _model.LogIn.Email;
                        _model.Empresa.Foto = "semfoto.jpg";
                        _model.Empresa.QtdeMensagemRestante = 0;
                        _model.Empresa.EnderecoNumero = 0;

                        contexto.LogIn.Add(_model.LogIn);
                        contexto.Empresa.Add(_model.Empresa);
                        contexto.SaveChanges();
                    }
                    else
                    {
                        _model.Util.Mensagem = "Nome da clínica já existe em nosso banco de dados, cadastre outro nome para clínica.";
                    }
                }
                else
                {
                    _model.Util.Mensagem = "E-mail já cadastrado em nosso banco de dados. Entre em contato com o clinic pulse";
                }
            }
            catch(Exception ex)
            {
                _model.Util.Mensagem = ex.ToString();
            }
        }

        public void CadastrarUsuario(LogIn _modelusuario, ClinicPulse _model)
        {
            try
            {
                if (contexto.LogIn.Where(x => x.Email == _modelusuario.Email).Count() == 0)
                {
                    int qtde = contexto.LogIn.Count();
                    if (qtde <= 10)
                    {
                        qtde = qtde + 1;
                        _modelusuario.Cor = _modelusuario.Cor + qtde;
                        contexto.LogIn.Add(_modelusuario);
                        contexto.SaveChanges();
                    }
                    else
                    {
                        _model.Util.Mensagem = "Qtde de Usuários excedida. Entre em contato com o clinic pulse";
                    }
                }
                else
                {
                    _model.Util.Mensagem = "E-mail já cadastrado em nosso banco de dados. Entre em contato com o clinic pulse";
                }
            }
            catch (Exception ex)
            {
                _model.Util.Mensagem = ex.ToString();
            }
        }

        public void UpdateUsuario(ClinicPulse _model)
        {
            if (_model.Usuario.Id > 0)
            {
                var UpdateUsuario = contexto.LogIn.First(x => x.Id == _model.Usuario.Id);

                UpdateUsuario.Nome = _model.Usuario.Nome;
                UpdateUsuario.Email = _model.Usuario.Email;
                UpdateUsuario.Perfil = _model.Usuario.Perfil;
                UpdateUsuario.Senha = _model.Usuario.Senha;

                contexto.SaveChanges();
            }
        }

        public List<LogIn> ListGrid(ClinicPulse _model)
        {
            return contexto.LogIn.Where(x => x.Clinica == _model.LogIn.Clinica).ToList();
        }

        public LogIn Usuario(int id, string clinica)
        {
            LogIn _model = new LogIn();
            _model = contexto.LogIn.FirstOrDefault(x => x.Id == id && x.Clinica == clinica);

            return _model;
        }

        public LogIn PesquisaDadosUsuario(Guid id, string clinica)
        {
            LogIn _model = new LogIn();
            _model = contexto.LogIn.FirstOrDefault(x => x.IdUsuario == id && x.Clinica == clinica);

            return _model;
        }
    }
}
