using Aplicacao;
using ClinicPulse.Models;
using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace ClinicPulse.Controllers
{
    public class ConsultaUsuarioController : HelperClinicBaseController
    {
        // GET: ConsultaUsuario
        private CadastreGratisAplicacao conexao = new CadastreGratisAplicacao();

        [Authentication]
        public ActionResult Index()
        {
            try
            {
                //ClinicPulseViewModel _model = new ClinicPulseViewModel();
                IniciarLista(_model);

                _model.ListUsuarios = conexao.ListGrid(_model);
                TempData["ListUsuarios"] = _model.ListUsuarios;

                return View(_model);
            }
            catch (Exception ex)
            {
                //ClinicPulseViewModel _model = new ClinicPulseViewModel();
                IniciarLista(_model);
                return View("Error", _model);
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult UpdateUsuario(ClinicPulseViewModel _model)
        {
            try
            {
                IniciarLista(_model);

                conexao.UpdateUsuario(_model);

                return RedirectToAction("Index");
            }
            catch (Exception ex)
            {
                _model = new ClinicPulseViewModel();
                IniciarLista(_model);
                return View("Error", _model);
            }
        }

        public PartialViewResult ConsultaGrid()
        {
            //ClinicPulseViewModel _model = new ClinicPulseViewModel();
            IniciarLista(_model);

            _model.ListUsuarios = TempData["ListUsuarios"] as List<LogIn>;
            TempData["ListUsuarios"] = _model.ListUsuarios;

            string drop = TempData["drop"] as string;
            string text = TempData["text"] as string;

            TempData["drop"] = drop;
            TempData["text"] = text;

            if (drop == "Nome")
                _model.ListUsuarios = _model.ListUsuarios.Where(x => x.Nome.ToLower().Contains(text.ToLower())).ToList();
            else if (drop == "Email")
                _model.ListUsuarios = _model.ListUsuarios.Where(x => x.Email.Contains(text)).ToList();

            return PartialView("_GridConsulta", _model);
        }

        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public PartialViewResult ConsultaGrid(string drop, string text)
        {
            //ClinicPulseViewModel _model = new ClinicPulseViewModel();
            IniciarLista(_model);

            TempData["drop"] = drop;
            TempData["text"] = text;

            _model.ListUsuarios = TempData["ListUsuarios"] as List<LogIn>;
            TempData["ListUsuarios"] = _model.ListUsuarios;

            if (drop == "Nome")
                _model.ListUsuarios = _model.ListUsuarios.Where(x => x.Nome.ToLower().Contains(text.ToLower())).ToList();
            else if (drop == "Cpf")
                _model.ListUsuarios = _model.ListUsuarios.Where(x => x.Email.Contains(text)).ToList();

            return PartialView("_GridConsulta", _model);
        }

        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public PartialViewResult ConsultaUsuario(int id)
        {
            //ClinicPulseViewModel _model = new ClinicPulseViewModel();
            IniciarLista(_model);

            LogIn _modelusuario = conexao.Usuario(id, _model.LogIn.Clinica);
            _model.Usuario.Clinica = _modelusuario.Clinica;
            _model.Usuario.ClinicaEmail = _modelusuario.ClinicaEmail;
            _model.Usuario.Cor = _modelusuario.Cor;
            _model.Usuario.Email = _modelusuario.Email;
            _model.Usuario.Foto = _modelusuario.Foto;
            _model.Usuario.Nome = _modelusuario.Nome;
            _model.Usuario.Perfil = _modelusuario.Perfil;
            if (_model.Usuario.Perfil == "Medico")
                _model.Usuario.Medico = true;
            else
                _model.Usuario.Medico = false;
            _model.Usuario.Senha = _modelusuario.Senha;

            return PartialView("_Consulta", _model);
        }

        #region Sem retorno
        public void IniciarLista(ClinicPulseViewModel _model)
        {
            if (_model.Usuario == null)
                _model.Usuario = new Usuario();
        }
        #endregion
    }
}