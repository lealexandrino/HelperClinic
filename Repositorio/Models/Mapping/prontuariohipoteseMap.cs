using Dominio;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace RepositorioEF.Models.Mapping
{
    public class ProntuarioHipoteseMap : EntityTypeConfiguration<ProntuarioHipotese>
    {
        public ProntuarioHipoteseMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            // Table & Column Mappings
            this.ToTable("ProntuarioHipotese");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.IdPaciente).HasColumnName("IdPaciente");
            this.Property(t => t.IdUsuario).HasColumnName("IdUsuario");
            this.Property(t => t.Clinica).HasColumnName("Clinica");
            this.Property(t => t.Diagnostico).HasColumnName("Diagnostico");
            this.Property(t => t.Obs).HasColumnName("Obs");
            this.Property(t => t.ProntuarioConsulta_Id).HasColumnName("ProntuarioConsulta_Id");

            // Relationships
            this.HasOptional(t => t.ProntuarioConsulta)
                .WithMany(t => t.ListProntuarioHipotese)
                .HasForeignKey(d => d.ProntuarioConsulta_Id);

        }
    }
}
