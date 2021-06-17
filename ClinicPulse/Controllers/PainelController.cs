using Aplicacao;
using ClinicPulse.Models;
using Dominio;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Web.Mvc;

namespace ClinicPulse.Controllers
{
    public class PainelController : HelperClinicBaseController
    {
        private PainelAplicacao conexao = new PainelAplicacao();

        [Authentication]
        public ActionResult Index()
        {
            try
            {
                //ClinicPulseViewModel _model = new ClinicPulseViewModel();
                Dominio.ClinicPulse _modelTemp = new Dominio.ClinicPulse();
                IniciarLista(_model);
                _model.Lembretes.Pagina = 0;
                _model.Lembretes.IdUsuario = _model.LogIn.IdUsuario;
                _modelTemp = conexao.ListLembretes(_model);
                _modelTemp = conexao.ListLembretesDiarios(_model);

                _model.Lembretes = _modelTemp.Lembretes;
                _model.ListLembretes = _modelTemp.ListLembretes;
                _model.ListLembretesDiarios = _modelTemp.ListLembretesDiarios;

                _model.DadosPainel = conexao.Dados(_model.LogIn);
                
                return View(_model);
            }
            catch (Exception ex)
            {
                //ClinicPulseViewModel _model = new ClinicPulseViewModel();
                IniciarLista(_model);
                return View("Error", _model);
            }
        }

        #region PartialView
        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public PartialViewResult LembretesPaginacao(string Pagina)
        {
            //ClinicPulseViewModel _model = new ClinicPulseViewModel();
            Dominio.ClinicPulse _modelTemp = new Dominio.ClinicPulse();

            IniciarLista(_model);

            _model.Lembretes.IdUsuario = _model.LogIn.IdUsuario;
            Pagina += 0;
            _model.Lembretes.Pagina = Convert.ToInt32(Pagina) - 10;

            _modelTemp = conexao.ListLembretes(_model);

            _model.Lembretes = _modelTemp.Lembretes;
            _model.ListLembretes = _modelTemp.ListLembretes;

            return PartialView("_Lembretes", _model);
        }

        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public PartialViewResult AdicionarLembrete(string Lembrete, string DataHorario)
        {
            //ClinicPulseViewModel _model = new ClinicPulseViewModel();
            Dominio.ClinicPulse _modelTemp = new Dominio.ClinicPulse();

            IniciarLista(_model);

            _model.Lembretes.IdUsuario = _model.LogIn.IdUsuario;
            _model.Lembretes.Pagina = 0;

            IFormatProvider culture = new CultureInfo("en-US", true);
            DateTime dateVal = DateTime.ParseExact(DataHorario, "dd/MM/yyyy HH:mm", culture);

            _model.Lembretes.DataLembrete = dateVal;
            _model.Lembretes.Lembrete = Lembrete;
            _model.Lembretes.Tipo = 0;


            conexao.InserirLembrete(_model.Lembretes);
         
            _modelTemp = conexao.ListLembretes(_model);

            _model.Lembretes = _modelTemp.Lembretes;
            _model.ListLembretes = _modelTemp.ListLembretes;

            return PartialView("_Lembretes", _model);
        }

        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public bool Deletar(int idD)
        {
            //ClinicPulseViewModel _model = new ClinicPulseViewModel();
            IniciarLista(_model);

            return conexao.Deletar(idD, _model.LogIn.IdUsuario);
        }
        #endregion

        #region Void

        public void IniciarLista(ClinicPulseViewModel _model)
        {
            if (_model.DadosPainel == null)
                _model.DadosPainel = new DadosPainel();
            if (_model.ListDadosPainel == null)
                _model.ListDadosPainel = new List<DadosPainel>();

            if (_model.Lembretes == null)
                _model.Lembretes = new Lembretes();
            if (_model.ListLembretes == null)
                _model.ListLembretes = new List<Lembretes>();

            if (_model.ListLembretesDiarios == null)
                _model.ListLembretesDiarios = new List<Lembretes>();

        }
        #endregion
    }
}