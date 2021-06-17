using Aplicacao;
using ClinicPulse.Models;
using Dominio;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web.Mvc;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ClinicPulse.Controllers
{
    public class RelatorioController : HelperClinicBaseController
    {
        private RelatorioAplicacao conexao = new RelatorioAplicacao();
        #region ActionResult

        [Authentication]
        public ActionResult Index()
        {
            try
            {
                //ClinicPulseViewModel _model = new ClinicPulseViewModel();
                IniciarLista(_model);
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
        public ActionResult GerarRelatorio(ClinicPulseViewModel _model)
        {
            try
            {
                IniciarLista(_model);

                _model.ListRelatorio = conexao.ListRelatorio(_model);
                if (_model.ListRelatorio.Count() != 0)
                    ExportExcel(_model);

                return View("Index", _model);
            }
            catch (Exception ex)
            {
                _model = new ClinicPulseViewModel();
                IniciarLista(_model);
                return View("Error", _model);
            }
        }
        #endregion
        private void ExportExcel(ClinicPulseViewModel _model)
        {
            try
            {
                if (_model.ListRelatorio.Count() != 0)
                {
                    var products = new System.Data.DataTable("");

                    products.Columns.Add("Nome", typeof(string));
                    products.Columns.Add("Email", typeof(string));
                    products.Columns.Add("Telefone Celular", typeof(string));
                    products.Columns.Add("Data Nascimento", typeof(DateTime));
                    products.Columns.Add("Tempo de consulta", typeof(int));
                    products.Columns.Add("Data da consulta", typeof(string));

                    foreach (var c in _model.ListRelatorio)
                    {
                        var data = c.DateTimeScheduled.ToString("dd/MM/yyyy HH:mm:ss");
                        products.Rows.Add(c.Nome, c.Email, c.TelefoneCelular, c.DataNascimento, c.AppointmentLength, data);
                    }

                    var grid = new GridView();
                    grid.DataSource = products;
                    grid.DataBind();

                    Response.ClearContent();
                    Response.Buffer = true;
                    Response.AddHeader("content-disposition", "attachment; filename=Relatorio.xls");
                    Response.ContentType = "application/ms-excel";

                    Response.Charset = "";
                    StringWriter sw = new StringWriter();
                    HtmlTextWriter htw = new HtmlTextWriter(sw);

                    grid.RenderControl(htw);

                    Response.Output.Write(sw.ToString());
                    Response.Flush();
                    Response.End();
                }
            }
            catch (Exception ex)
            {

            }
        }

        public void IniciarLista(ClinicPulseViewModel _model)
        {
            if (_model.Relatorio == null)
                _model.Relatorio = new Relatorio();
            if (_model.ListRelatorio == null)
                _model.ListRelatorio = new List<Relatorio>();
        }
    }
}