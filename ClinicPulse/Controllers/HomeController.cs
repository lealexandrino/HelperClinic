using System;
using System.Net.Mail;
using System.Web.Mvc;

namespace ClinicPulse.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ClinicPulse.Token.Token.AjaxValidateAntiForgeryToken]
        public bool MandarEmail(string email, string assunto, string nome, string body)
        {
            try
            {
                SmtpClient mySmtpClient = new SmtpClient("smtp.gmail.com", 587);

                // set smtp-client with basicAuthentication
                mySmtpClient.UseDefaultCredentials = true;
                System.Net.NetworkCredential basicAuthenticationInfo = new
                   System.Net.NetworkCredential("rodrigo.hajj@gmail.com", "rnhajj0707");
                mySmtpClient.Credentials = basicAuthenticationInfo;

                // add from,to mailaddresses
                MailAddress from = new MailAddress(email, email);
                MailAddress to = new MailAddress("rodrigohajj@hotmail.com", "Clinic Pulse");
                MailMessage myMail = new System.Net.Mail.MailMessage(from, to);

                // add ReplyTo
                //MailAddress replyto = new MailAddress("reply@example.com");
                //myMail.ReplyTo = replyto;

                // set subject and encoding
                myMail.Subject = assunto + " - Clinic Pulse";
                myMail.SubjectEncoding = System.Text.Encoding.UTF8;

                // set body-message and encoding
                myMail.Body = body + " <br /> Email de:" + email + "<br /> Nome da Pessoa:" + nome; //"<b>Test Mail</b><br>using <b>HTML</b>.";
                myMail.BodyEncoding = System.Text.Encoding.UTF8;
                // text or html
                myMail.IsBodyHtml = true;
                mySmtpClient.EnableSsl = true;

                mySmtpClient.Send(myMail);

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
	}
}