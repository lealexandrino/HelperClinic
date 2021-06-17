using System;

namespace Dominio.Exceptions
{
    /// <summary>
    /// Execeção genérica de algum problema no login
    /// </summary>
    [Serializable]
    public class LoginException : Exception
    {
        public LoginException(string Mensagem) : base(Mensagem) { }
    }
}