using System.IO;
using System.Web.Mvc;

namespace Sollo.Controllers
{
    public class DeleteFileAttribute : ActionFilterAttribute
    {
        public override void OnResultExecuted(ResultExecutedContext filterContext)
        {
            if ((filterContext.Result as FilePathResult) == null)
                return;

            filterContext.HttpContext.Response.Flush();

            //convert the current filter context to file and get the file path
            string filePath = (filterContext.Result as FilePathResult).FileName;

            //delete the file after download
            File.Delete(filePath);
        }
    }
}