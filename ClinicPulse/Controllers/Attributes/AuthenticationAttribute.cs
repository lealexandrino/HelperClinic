using Dominio;
using Dominio.Exceptions;
using System;
using System.Web.Mvc;
using ClinicPulse.Models;

namespace ClinicPulse.Controllers
{
    public class AuthenticationAttribute : ActionFilterAttribute
    {
        public bool IgnorarVencimento { get; set; } = false;
        
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            HelperClinicBaseController controller = (filterContext.Controller as HelperClinicBaseController);

            if (filterContext.HttpContext.Request.Browser.Browser == "SAFARI" || filterContext.HttpContext.Request.Browser.Browser == "IE" || filterContext.HttpContext.Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                filterContext.Result = controller.Redirect("Aviso", "Browsers");

            try
            {
                controller._model = new ClinicPulseViewModel(ValidaUsuario: true);

                //if (!IgnorarVencimento)
                //{
                //    filterContext.Controller.ViewBag.DtVencimento = EmpresaDAO.DtLimiteAcesso(controller._model.Login.CodEmpresa);

                //    if (!string.IsNullOrEmpty(filterContext.Controller.ViewBag.DtVencimento))
                //        if (Convert.ToDateTime(filterContext.Controller.ViewBag.DtVencimento).Date < DateTime.Now.Date)
                //        {
                //            filterContext.Controller.TempData["Util"] = new Util(false, "Sua licença expirou");
                //            filterContext.Result = controller.Redirect("Index", "Planos");
                //        }
                //}

                base.OnActionExecuting(filterContext);
            }
            catch (InvalidSessionException ex)
            {
                filterContext.Controller.ViewBag.Error = ex.Message;
                filterContext.Result = controller.ReturnView("InvalidSession");
            }
            catch (LoginException ex)
            {
                filterContext.Controller.ViewBag.Error = ex.Message;
                filterContext.Result = controller.ReturnView("LoginException");
            }
            catch (Exception ex)
            {
                filterContext.Result = controller.ReturnView("LoginException");
                //filterContext.Result = controller.Redirect("LogoutLogin", "Logout");
            }
        }
    }
}