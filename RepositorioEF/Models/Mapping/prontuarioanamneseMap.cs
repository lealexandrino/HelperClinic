using Dominio;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace RepositorioEF.Models.Mapping
{
    public class ProntuarioAnamneseMap : EntityTypeConfiguration<ProntuarioAnamnese>
    {
        public ProntuarioAnamneseMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            // Table & Column Mappings
            this.ToTable("ProntuarioAnamnese");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.IdPaciente).HasColumnName("IdPaciente");
            this.Property(t => t.IdUsuario).HasColumnName("IdUsuario");
            this.Property(t => t.Clinica).HasColumnName("Clinica");
            this.Property(t => t.Historia).HasColumnName("Historia");
            this.Property(t => t.ProblemaRenais).HasColumnName("ProblemaRenais");
            this.Property(t => t.ProblemaArticulares).HasColumnName("ProblemaArticulares");
            this.Property(t => t.ProblemaCardiaco).HasColumnName("ProblemaCardiaco");
            this.Property(t => t.ProblemaRespiratorio).HasColumnName("ProblemaRespiratorio");
            this.Property(t => t.ProblemaGastrico).HasColumnName("ProblemaGastrico");
            this.Property(t => t.Alergia).HasColumnName("Alergia");
            this.Property(t => t.Hepatite).HasColumnName("Hepatite");
            this.Property(t => t.Hiv).HasColumnName("Hiv");
            this.Property(t => t.Diabetes).HasColumnName("Diabetes");
            this.Property(t => t.Gravidez).HasColumnName("Gravidez");
            this.Property(t => t.UsoMedicamento).HasColumnName("UsoMedicamento");
            this.Property(t => t.QueixaPrincipal).HasColumnName("QueixaPrincipal");
            this.Property(t => t.ProntuarioConsulta_Id).HasColumnName("ProntuarioConsulta_Id");

            // Relationships
            this.HasOptional(t => t.ProntuarioConsulta)
                .WithMany(t => t.ListProntuarioAnamnese)
                .HasForeignKey(d => d.ProntuarioConsulta_Id);

        }
    }
}
