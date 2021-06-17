namespace ClinicPulse.Models
{
    public class formLogin
    {
        public string Email { get; set; }
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public string Senha { get; set; }
        public string ConfirmaSenha { get; set; }
        public bool Remember { get; set; }
    }
}