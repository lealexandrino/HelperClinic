using System;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace Repositorio
{
    public static class EnviaEmail
    {
        public static string UrlLogo(int CodEmpresa)
        {
            if (File.Exists("~/Content/img/Logos/" + CodEmpresa + ".png"))
                return string.Format("https://erp.solloerp.com.br/Content/img/Logos/{0}.png", CodEmpresa);
            else
                return "https://erp.solloerp.com.br/Content/img/sollo.png";
        }

        public static void EnviarAsIntegra(string EmailRemetente, string NomeRemetente, string EmailDestinatario, string Assunto, string Mensagem, bool HTML = true, string[] anexos = null, MailPriority prioridade = MailPriority.Normal)
        {
            SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
            smtp.Credentials = new NetworkCredential("administrativo@integrasistemas.com.br", "Integra2508@");
            smtp.EnableSsl = true;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;

            MailAddress From = new MailAddress(EmailRemetente, NomeRemetente);
            MailAddress To = new MailAddress(EmailDestinatario, EmailDestinatario);

            MailMessage mail = new MailMessage(From, To);
            mail.ReplyToList.Add(new MailAddress("administrativo@integrasistemas.com.br", ""));

            mail.Subject = Assunto;
            mail.Body = Mensagem;
            mail.IsBodyHtml = HTML;
            mail.BodyEncoding = Encoding.UTF8;
            mail.Priority = prioridade;

            if (anexos != null)
            {
                for (int i = 0; i < anexos.Length; i++)
                {
                    if (!string.IsNullOrEmpty(anexos[i]))
                        mail.Attachments.Add(new Attachment(anexos[i]));
                }
            }

            try
            {
                smtp.Send(mail);
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                mail.Dispose();
                smtp.Dispose();
                GC.Collect();
            }
        }

        public static void Enviar(string EmailRemetente, string NomeRemetente, string EmailDestinatario, string Assunto, string Mensagem, bool HTML = true, string[] anexos = null, MailPriority prioridade = MailPriority.Normal)
        {
            SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
            smtp.Credentials = new NetworkCredential("le.alexandrino.santos@gmail.com", "1234alexandrino");
            smtp.EnableSsl = true;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;

            MailAddress From = new MailAddress(EmailRemetente, NomeRemetente);
            MailAddress To = new MailAddress(EmailDestinatario, EmailDestinatario);

            MailMessage mail = new MailMessage(From, To);
            mail.ReplyToList.Add(new MailAddress("le.alexandrino.santos@gmail.com", ""));

            mail.Subject = Assunto;
            mail.Body = Mensagem;
            mail.IsBodyHtml = HTML;
            mail.BodyEncoding = Encoding.UTF8;
            mail.Priority = prioridade;

            if (anexos != null)
            {
                for (int i = 0; i < anexos.Length; i++)
                {
                    if (!string.IsNullOrEmpty(anexos[i]))
                        mail.Attachments.Add(new Attachment(anexos[i]));
                }
            }

            try
            {
                smtp.Send(mail);
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                mail.Dispose();
                smtp.Dispose();
                GC.Collect();
            }
        }

        public static void Enviar(string EmailRemetente, string NomeRemetente, string[] EmailDestinatario, string Assunto, string Mensagem, bool HTML = true, string[] anexos = null, MailPriority prioridade = MailPriority.Normal)
        {
            for (int i = 0; i < EmailDestinatario.Length; i++)
                Enviar(EmailRemetente, NomeRemetente, EmailDestinatario[i], Assunto, Mensagem, HTML, anexos);
        }
    }
}