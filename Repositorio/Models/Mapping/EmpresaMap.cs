using Dominio;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace RepositorioEF.Models.Mapping
{
    public class EmpresaMap : EntityTypeConfiguration<Empresa>
    {
        public EmpresaMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            this.Property(t => t.Nome)
                .HasMaxLength(200);

            this.Property(t => t.Clinica)
                .HasMaxLength(200);

            this.Property(t => t.ClinicaEmail)
                .HasMaxLength(50);

            this.Property(t => t.CNPJ)
                .HasMaxLength(20);

            // Table & Column Mappings
            this.ToTable("Empresa");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.Nome).HasColumnName("Nome");
            this.Property(t => t.Foto).HasColumnName("Foto");
            this.Property(t => t.Clinica).HasColumnName("Clinica");
            this.Property(t => t.ClinicaEmail).HasColumnName("ClinicaEmail");
            this.Property(t => t.ClinicaTelefone).HasColumnName("ClinicaTelefone");
            this.Property(t => t.QtdeMensagemRestante).HasColumnName("QtdeMensagemRestante");
            this.Property(t => t.MensagemWhatsApp).HasColumnName("MensagemWhatsApp");
            this.Property(t => t.EnderecoCEP).HasColumnName("EnderecoCEP");
            this.Property(t => t.EnderecoRua).HasColumnName("EnderecoRua");
            this.Property(t => t.EnderecoNumero).HasColumnName("EnderecoNumero");
            this.Property(t => t.EnderecoComplemento).HasColumnName("EnderecoComplemento");
            this.Property(t => t.EnderecoBairro).HasColumnName("EnderecoBairro");
            this.Property(t => t.EnderecoCidade).HasColumnName("EnderecoCidade");
            this.Property(t => t.EnderecoEstado).HasColumnName("EnderecoEstado");
            this.Property(t => t.EnderecoPais).HasColumnName("EnderecoPais");
            this.Property(t => t.CNPJ).HasColumnName("CNPJ");
        }
    }
}
