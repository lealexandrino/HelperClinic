using Dominio.Exceptions;
using System.Web.Mvc;

namespace ClinicPulse.Filters
{
    public class LoginExceptionAttribute : HandleErrorAttribute
    {
        public override void OnException(ExceptionContext filterContext)
        {
            if (!(filterContext.Exception is LoginException))
                return;

            filterContext.ExceptionHandled = true;
            filterContext.Controller.ViewBag.Error = filterContext.Exception.Message;

            if (filterContext.Exception is InvalidSessionException)
                filterContext.Result = new ViewResult
                {
                    ViewName = "InvalidSession",
                    ViewData = new ViewDataDictionary(filterContext.Controller.ViewData)
                };
            else if (filterContext.Exception is LoginException)
            {
                filterContext.Result = new ViewResult
                {
                    ViewName = "LoginException",
                    ViewData = new ViewDataDictionary(filterContext.Controller.ViewData)
                };
            }
        }
    }
}