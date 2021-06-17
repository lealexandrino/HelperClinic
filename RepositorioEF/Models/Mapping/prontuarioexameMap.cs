using Dominio;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace RepositorioEF.Models.Mapping
{
    public class ProntuarioExameMap : EntityTypeConfiguration<ProntuarioExame>
    {
        public ProntuarioExameMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            // Table & Column Mappings
            this.ToTable("ProntuarioExame");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.IdPaciente).HasColumnName("IdPaciente");
            this.Property(t => t.IdUsuario).HasColumnName("IdUsuario");
            this.Property(t => t.Clinica).HasColumnName("Clinica");
            this.Property(t => t.Altura).HasColumnName("Altura");
            this.Property(t => t.Peso).HasColumnName("Peso");
            this.Property(t => t.FrequenciaCardiaca).HasColumnName("FrequenciaCardiaca");
            this.Property(t => t.PressaoArterialSistolica).HasColumnName("PressaoArterialSistolica");
            this.Property(t => t.PressaoArterialDiastolica).HasColumnName("PressaoArterialDiastolica");
            this.Property(t => t.Obs).HasColumnName("Obs");
            this.Property(t => t.ProntuarioConsulta_Id).HasColumnName("ProntuarioConsulta_Id");

            // Relationships
            this.HasOptional(t => t.ProntuarioConsulta)
                .WithMany(t => t.ListProntuarioExame)
                .HasForeignKey(d => d.ProntuarioConsulta_Id);

        }
    }
}
