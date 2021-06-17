using Dominio;
using RepositorioEF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Dominio.Cryptography;

namespace Aplicacao
{
    public class CadastreGratisAplicacao
    {
        CadastrarGratisEF repositorio = new CadastrarGratisEF();

        public void Cadastrar(ClinicPulse _model)
        {
            _model.LogIn.ClinicaEmail = _model.LogIn.Email;
            _model.LogIn.Teste = "Sim";
            _model.LogIn.Cor = "Medico1";
            _model.LogIn.Foto = "semfoto.jpg";
            _model.LogIn.IdUsuario = Guid.NewGuid();
            _model.LogIn.LastActiveDate = TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time"));
            _model.LogIn.Perfil = "Medico";
            _model.LogIn.Clinica = (Guid.NewGuid()).ToString();
            _model.LogIn.Senha = Crypt(_model.LogIn.Senha);
            repositorio.Cadastrar(_model);
        }

        public void CadastrarUsuario(ClinicPulse _model)
        {
            LogIn _modelusuario = new LogIn();
            _modelusuario.Email = _model.Usuario.Email;
            _modelusuario.Teste = "Sim";
            _modelusuario.Cor = "Medico";
            _modelusuario.Foto = "semfoto.jpg";
            _modelusuario.IdUsuario = Guid.NewGuid();
            _modelusuario.LastActiveDate = TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time"));
            if (_model.Usuario.Medico)
                _modelusuario.Perfil = "Medico";
            else
                _modelusuario.Perfil = "Atendente";
            _modelusuario.Senha = _model.Usuario.Senha;
            _modelusuario.Nome = _model.Usuario.Nome;
            _modelusuario.Clinica =_model.LogIn.Clinica;
            _modelusuario.ClinicaEmail = _model.LogIn.ClinicaEmail;
            repositorio.CadastrarUsuario(_modelusuario, _model);
        }

        public void UpdateUsuario(ClinicPulse _model)
        {
            repositorio.UpdateUsuario(_model);
        }

        #region Consulta
        public List<LogIn> ListGrid(ClinicPulse _model)
        {
            return repositorio.ListGrid(_model);
        }

        public LogIn Usuario(int id, string clinica)
        {
            return repositorio.Usuario(id,clinica);
        }

        public LogIn PesquisaDadosUsuario(Guid id, string clinica)
        {
            return repositorio.PesquisaDadosUsuario(id, clinica);
        }
        #endregion
    }
}
