using System.Web;
using System.Web.Optimization;

namespace ClinicPulse
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                      "~/Content/plugins/input-mask/jquery.mask.js",
                      "~/Content/plugins/bootstrap/js/bootstrap.min.js",
                      "~/Content/plugins/slimScroll/jquery.slimscroll.min.js",
                      "~/Content/plugins/datepicker/bootstrap-datepicker.js",
                      "~/Content/plugins/datepicker/locales/bootstrap-datepicker.pt-BR.js",
                      "~/Content/plugins/jQueryUI/jquery-ui-1.10.3.min.js",
                      "~/Content/plugins/alertfy/alertify.js",
                      "~/Content/plugins/dist/js/app.js",
                      "~/Scripts/methods_pt.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/plugins/bootstrap/css/bootstrap.min.css",
                      "~/Content/plugins/dist/css/skins/_all-skins.min.css",
                      "~/Content/plugins/dist/css/AdminLTE.css",
                      "~/Content/plugins/datepicker/datepicker3.css",
                      "~/Content/plugins/alertfy/alertify.core.css",
                      "~/Content/plugins/alertfy/alertify.default.css",
                      "~/Content/site.css"));
        }
    }
}
