using Dominio;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace RepositorioEF.Models.Mapping
{
    public class LoginMap : EntityTypeConfiguration<LogIn>
    {
        public LoginMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            this.Property(t => t.Nome)
                .HasMaxLength(200);

            this.Property(t => t.Perfil)
                .HasMaxLength(200);

            this.Property(t => t.Email)
                .HasMaxLength(200);

            this.Property(t => t.Senha)
                .HasMaxLength(200);

            this.Property(t => t.Clinica)
                .HasMaxLength(200);

            this.Property(t => t.Cor)
                .HasMaxLength(50);

            this.Property(t => t.ClinicaEmail)
                .HasMaxLength(50);

            this.Property(t => t.Teste)
                .HasMaxLength(50);

            this.Property(t => t.CodEmpresa);

            this.Property(t => t.CodSessao);

            // Table & Column Mappings
            this.ToTable("LogIn");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.IdUsuario).HasColumnName("IdUsuario");
            this.Property(t => t.Nome).HasColumnName("Nome");
            this.Property(t => t.LastActiveDate).HasColumnName("LastActiveDate");
            this.Property(t => t.Perfil).HasColumnName("Perfil");
            this.Property(t => t.Email).HasColumnName("Email");
            this.Property(t => t.Senha).HasColumnName("Senha");
            this.Property(t => t.Foto).HasColumnName("Foto");
            this.Property(t => t.Clinica).HasColumnName("Clinica");
            this.Property(t => t.Cor).HasColumnName("Cor");
            this.Property(t => t.ClinicaEmail).HasColumnName("ClinicaEmail");
            this.Property(t => t.Teste).HasColumnName("Teste");
            this.Property(t => t.CodEmpresa).HasColumnName("CodEmpresa");
            this.Property(t => t.CodSessao).HasColumnName("CodSessao");
        }
    }
}
