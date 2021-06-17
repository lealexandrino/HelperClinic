using Dominio;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace RepositorioEF.Models.Mapping
{
    public class LembretesMap : EntityTypeConfiguration<Lembretes>
    {
        public LembretesMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            // Table & Column Mappings
            this.ToTable("Lembretes");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.Pagina).HasColumnName("Pagina");
            this.Property(t => t.IdUsuario).HasColumnName("IdUsuario");
            this.Property(t => t.Lembrete).HasColumnName("Lembrete");
            this.Property(t => t.DataLembrete).HasColumnName("DataLembrete");
            this.Property(t => t.Minutos).HasColumnName("Minutos");
            this.Property(t => t.Horas).HasColumnName("Horas");
            this.Property(t => t.Dias).HasColumnName("Dias");
            this.Property(t => t.QuantidadePaginas).HasColumnName("QuantidadePaginas");
            this.Property(t => t.HoraMinuto).HasColumnName("HoraMinuto");
            this.Property(t => t.Tipo).HasColumnName("Tipo");
            this.Property(t => t.Celular).HasColumnName("Celular");
            this.Property(t => t.Clinica).HasColumnName("Clinica");
            this.Property(t => t.Deletado).HasColumnName("Deletado");
        }
    }
}
