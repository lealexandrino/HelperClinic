using Dominio;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace RepositorioEF.Models.Mapping
{
    public class PacienteDadosMap : EntityTypeConfiguration<PacienteDados>
    {
        public PacienteDadosMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            this.Property(t => t.Nome)
                .IsRequired();

            // Table & Column Mappings
            this.ToTable("PacienteDados");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.Nome).HasColumnName("Nome");
            this.Property(t => t.DataNascimentoS).HasColumnName("DataNascimentoS");
            this.Property(t => t.DataNascimento).HasColumnName("DataNascimento");
            this.Property(t => t.Sexo).HasColumnName("Sexo");
            this.Property(t => t.Email).HasColumnName("Email");
            this.Property(t => t.Obs).HasColumnName("Obs");
            this.Property(t => t.PerguntaClinica).HasColumnName("PerguntaClinica");
            this.Property(t => t.TelefoneFixo).HasColumnName("TelefoneFixo");
            this.Property(t => t.TelefoneCelular).HasColumnName("TelefoneCelular");
            this.Property(t => t.TelefoneTrabalho).HasColumnName("TelefoneTrabalho");
            this.Property(t => t.AceitaSms).HasColumnName("AceitaSms");
            this.Property(t => t.EnderecoCEP).HasColumnName("EnderecoCEP");
            this.Property(t => t.EnderecoRua).HasColumnName("EnderecoRua");
            this.Property(t => t.EnderecoNumero).HasColumnName("EnderecoNumero");
            this.Property(t => t.EnderecoComplemento).HasColumnName("EnderecoComplemento");
            this.Property(t => t.EnderecoBairro).HasColumnName("EnderecoBairro");
            this.Property(t => t.EnderecoCidade).HasColumnName("EnderecoCidade");
            this.Property(t => t.EnderecoEstado).HasColumnName("EnderecoEstado");
            this.Property(t => t.EnderecoPais).HasColumnName("EnderecoPais");
            this.Property(t => t.CriadoPor).HasColumnName("CriadoPor");
            this.Property(t => t.AlteradoPor).HasColumnName("AlteradoPor");
            this.Property(t => t.DataAlterado).HasColumnName("DataAlterado");
            this.Property(t => t.Clinica).HasColumnName("Clinica");
            this.Property(t => t.Cpf).HasColumnName("Cpf");
            this.Property(t => t.Novo).HasColumnName("Novo");
        }
    }
}
