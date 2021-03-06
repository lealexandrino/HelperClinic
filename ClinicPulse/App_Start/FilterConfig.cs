using System.Web.Mvc;
using ClinicPulse.Filters;

namespace ClinicPulse
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new LoginExceptionAttribute());
        }
    }
}
