using System;
using System.Text;
using static Repositorio.BDOperations.ComandosBD;

namespace Repositorio
{
    internal static class Logs
    {
        /// <summary>
        /// Envia os logs de erros por e-mail
        /// </summary>
        /// <param name="erro">Mensagem da exceção (ex.Message)</param>
        /// <param name="inner">Mensagem interna da exceção ex.InnerException != null ? ex.InnerException.Message : "null"</param>
        /// <param name="metodo">Nome do método aonde ocorreu a exceção</param>
        /// <param name="classe">Nome da classe aonde ocorreu a exceção</param>
        public static void Envia(Exception erro, string metodo, string classe)
        {
            StringBuilder sb = new StringBuilder();

            try
            {
                sb.Append("------------------------------------------------------------------------------" + Environment.NewLine);
                sb.Append("Ocorreu uma exceção em: " + DateTime.Now);
                sb.Append(Environment.NewLine);
                sb.Append("Mensagem: " + erro.Message);
                sb.Append(Environment.NewLine);
                sb.Append("InnerException: " + (erro.InnerException == null ? "null" : erro.InnerException.Message));
                sb.Append(Environment.NewLine);
                sb.Append("Método: " + metodo);
                sb.Append(Environment.NewLine);
                sb.Append("Classe: " + classe);
                sb.Append(Environment.NewLine);
                sb.Append("------------------------------------------------------------------------------");
                sb.Append(Environment.NewLine);

                EnviaEmail.Enviar("le.alexandrino.santos@gmail.com", "Servico de logs HelperClinic", "le.alexandrino.santos@gmail.com",
                                  "Ocorreu uma nova exceção no HelperClinic", sb.ToString(), false);

                try
                {
                    //Command(string.Format("insert into Logs (Descricao) values ('{0}')", sb.ToString()));
                }
                catch { }
            }
            catch
            {
            }
        }
    }
}