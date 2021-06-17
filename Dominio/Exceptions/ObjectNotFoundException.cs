using System;

namespace Dominio.Exceptions
{
    /// <summary>
    /// Exceção para quando alguma consulta no banco não retorna dados
    /// </summary>
    [Serializable]
    public class ObjectNotFoundException : Exception
    {
        public ObjectNotFoundException(string Mensagem) : base(Mensagem) { }
    }
}