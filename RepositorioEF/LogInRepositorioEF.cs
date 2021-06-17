using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositorioEF
{
    public class LogInRepositorioEF
    {
        public LogIn PesquisaEmail(string email, string senha)
        {
            Contexto contexto = new Contexto();
            return contexto.LogIn.First(x => x.Email == email && x.Senha == senha && x.Teste != "Bloqueado");
        }
    }
}
