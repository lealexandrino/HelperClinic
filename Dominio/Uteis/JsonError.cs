namespace Dominio
{
    /// <summary>
    /// Classe usada para validações
    /// </summary>
    public class JsonError
    {
        public JsonError() { }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="Key">Nome do campo com erro</param>
        /// <param name="Error">Mensagem de erro</param>
        public JsonError(string Key, string Error)
        {
            this.Key = Key;
            this.Error = Error;
        }

        public string Key { get; set; }
        public string Error { get; set; }
    }
}
