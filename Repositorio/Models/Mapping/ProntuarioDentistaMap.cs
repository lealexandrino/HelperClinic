using Dominio;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace RepositorioEF.Models.Mapping
{
    public class ProntuarioDentistaMap : EntityTypeConfiguration<ProntuarioDentista>
    {
        public ProntuarioDentistaMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            // Table & Column Mappings
            this.ToTable("ProntuarioDentista");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.IdPaciente).HasColumnName("IdPaciente");
            this.Property(t => t.IdUsuario).HasColumnName("IdUsuario");
            this.Property(t => t.Clinica).HasColumnName("Clinica");
            this.Property(t => t.s11a).HasColumnName("s11a");
            this.Property(t => t.Extracao).HasColumnName("Extracao");
            this.Property(t => t.Furca).HasColumnName("Furca");
            this.Property(t => t.protese).HasColumnName("protese");
            this.Property(t => t.ProntuarioConsulta_Id).HasColumnName("ProntuarioConsulta_Id");

            // Relationships
            this.HasOptional(t => t.ProntuarioConsulta)
                .WithMany(t => t.ListProntuarioDentista)
                .HasForeignKey(d => d.ProntuarioConsulta_Id);

        }
    }
}
