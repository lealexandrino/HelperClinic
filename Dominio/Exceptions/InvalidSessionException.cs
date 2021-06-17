using System;

namespace Dominio.Exceptions
{
    [Serializable]
    public class InvalidSessionException : LoginException
    {
        public InvalidSessionException(string Mensagem) : base(Mensagem) { }
    }
}