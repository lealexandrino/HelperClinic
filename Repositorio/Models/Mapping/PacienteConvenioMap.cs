using Dominio;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace RepositorioEF.Models.Mapping
{
    public class PacienteConvenioMap : EntityTypeConfiguration<PacienteConvenio>
    {
        public PacienteConvenioMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            // Table & Column Mappings
            this.ToTable("PacienteConvenio");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.IdPacienteConvenio).HasColumnName("IdPacienteConvenio");
            this.Property(t => t.Convenio).HasColumnName("Convenio");
            this.Property(t => t.Plano).HasColumnName("Plano");
            this.Property(t => t.NumeroCarteirinha).HasColumnName("NumeroCarteirinha");
            this.Property(t => t.ValidadeS).HasColumnName("ValidadeS");
            this.Property(t => t.Validade).HasColumnName("Validade");
            this.Property(t => t.Acomodacao).HasColumnName("Acomodacao");
            this.Property(t => t.PacienteDados_Id).HasColumnName("PacienteDados_Id");

            // Relationships
            this.HasOptional(t => t.PacienteDados)
                .WithMany(t => t.ListPacienteConvenio)
                .HasForeignKey(d => d.PacienteDados_Id);

        }
    }
}
