using Dominio;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace RepositorioEF.Models.Mapping
{
    public class PacienteComplementarMap : EntityTypeConfiguration<PacienteComplementar>
    {
        public PacienteComplementarMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            // Table & Column Mappings
            this.ToTable("PacienteComplementar");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.IdPacienteComplementar).HasColumnName("IdPacienteComplementar");
            this.Property(t => t.Naturalidade).HasColumnName("Naturalidade");
            this.Property(t => t.EstadoNasceu).HasColumnName("EstadoNasceu");
            this.Property(t => t.Nacionalidade).HasColumnName("Nacionalidade");
            this.Property(t => t.Etnia).HasColumnName("Etnia");
            this.Property(t => t.Rg).HasColumnName("Rg");
            this.Property(t => t.EstadoCivil).HasColumnName("EstadoCivil");
            this.Property(t => t.Profissao).HasColumnName("Profissao");
            this.Property(t => t.Escolaridade).HasColumnName("Escolaridade");
            this.Property(t => t.PacienteDados_Id).HasColumnName("PacienteDados_Id");

            // Relationships
            this.HasOptional(t => t.PacienteDados)
                .WithMany(t => t.ListPacienteComplementar)
                .HasForeignKey(d => d.PacienteDados_Id);

        }
    }
}
