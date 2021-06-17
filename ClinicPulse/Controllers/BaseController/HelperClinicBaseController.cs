using ClinicPulse.Models;
using System.Configuration;
using System.Web.Mvc;

namespace ClinicPulse.Controllers
{
    /// <summary>
    /// Todas as controllers (exceto a de login) devem herdar desta classe
    /// </summary>
    public abstract class HelperClinicBaseController : Controller
    {
        public ClinicPulseViewModel _model { get; set; }

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            //if(ConfigurationManager.AppSettings.Get("SystemStatus").ToString() == "down")
            //    filterContext.Result = View("../Login/Indisponivel");

            if (filterContext.HttpContext.Request.Browser.Browser == "SAFARI" || filterContext.HttpContext.Request.Browser.Browser == "IE" || filterContext.HttpContext.Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                filterContext.Result = RedirectToAction("Aviso", "Browsers");

            _model = new ClinicPulseViewModel(ValidaUsuario: false);

            base.OnActionExecuting(filterContext);
        }

        public ActionResult Redirect(string action, string controller)
        {
            return base.RedirectToAction(action, controller);
        }

        public ActionResult ReturnView(string viewName)
        {
            return base.View(viewName);
        }

        public ActionResult ReturnView(string viewName, object model)
        {
            return base.View(viewName, model);
        }
    }
}