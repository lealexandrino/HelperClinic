using Dominio;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace RepositorioEF.Models.Mapping
{
    public class AgendaMap : EntityTypeConfiguration<Agenda>
    {
        public AgendaMap()
        {
            // Primary Key
            this.HasKey(t => t.ID);

            // Properties
            // Table & Column Mappings
            this.ToTable("Agenda");
            this.Property(t => t.ID).HasColumnName("ID");
            this.Property(t => t.Title).HasColumnName("Title");
            this.Property(t => t.IdPaciente).HasColumnName("IdPaciente");
            this.Property(t => t.DateTimeScheduled).HasColumnName("DateTimeScheduled");
            this.Property(t => t.AppointmentLength).HasColumnName("AppointmentLength");
            this.Property(t => t.StatusENUM).HasColumnName("StatusENUM");
            this.Property(t => t.IdUsuario).HasColumnName("IdUsuario");
            this.Property(t => t.AlteradoPor).HasColumnName("AlteradoPor");
            this.Property(t => t.Clinica).HasColumnName("Clinica");
            this.Property(t => t.IdMedico).HasColumnName("IdMedico");
            this.Property(t => t.Cor).HasColumnName("Cor");
            this.Property(t => t.DataAlterado).HasColumnName("DataAlterado");
            this.Property(t => t.Deletado).HasColumnName("Deletado");
            this.Property(t => t.IdLembrete).HasColumnName("IdLembrete");

            // Relationships
            this.HasOptional(t => t.Lembretes)
                .WithMany(t => t.ListLembretesAgenda)
                .HasForeignKey(d => d.IdLembrete);
        }
    }
}
