using System;

namespace Dominio.Exceptions
{
    /// <summary>
    /// Exceção para tentativa de geração de NF-e sem itens incluídos
    /// </summary>
    [Serializable]
    public class EmptyNFEException : Exception
    {
        public EmptyNFEException() : base("NF-e sem itens") { }
    }
}
