using Dominio;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace RepositorioEF.Models.Mapping
{
    public class ProntuarioConsultaMap : EntityTypeConfiguration<ProntuarioConsulta>
    {
        public ProntuarioConsultaMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            // Table & Column Mappings
            this.ToTable("ProntuarioConsulta");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.IdConsulta).HasColumnName("IdConsulta");
            this.Property(t => t.IdPaciente).HasColumnName("IdPaciente");
            this.Property(t => t.IdUsuario).HasColumnName("IdUsuario");
            this.Property(t => t.Clinica).HasColumnName("Clinica");
            this.Property(t => t.DuracaoConsulta).HasColumnName("DuracaoConsulta");
            this.Property(t => t.DataConsulta).HasColumnName("DataConsulta");
        }
    }
}
