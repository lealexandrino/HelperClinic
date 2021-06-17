using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ClinicPulse.Startup))]
namespace ClinicPulse
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
