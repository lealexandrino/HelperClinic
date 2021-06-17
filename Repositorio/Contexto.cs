using Dominio;
using RepositorioEF.Models.Mapping;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositorioEF
{
    public class Contexto : DbContext
    {
        static Contexto()
        {
            Database.SetInitializer<Contexto>(null);
        }

        private static string ConnectionString
        {
            get
            {
                //return "data source=localhost, 32568; initial catalog = ClinicPulse; user id = sa; password =#@bdInteGRA-sis!;";
                return "data source=localhost; initial catalog = ClinicPulse; user id = sa; password =#@bdInteGRA-sis!;";
            }
        }

        public Contexto() : base("iMedicoConfig")
        {
        }

        public DbSet<Agenda> Agenda { get; set; }
        public DbSet<Lembretes> Lembretes { get; set; }
        public DbSet<LogIn> LogIn { get; set; }
        public DbSet<Empresa> Empresa { get; set; }
        public DbSet<PacienteDados> PacienteDados { get; set; }
        public DbSet<PacienteComplementar> PacienteComplementar { get; set; }
        public DbSet<PacienteConvenio> PacienteConvenio { get; set; }
        public DbSet<ProntuarioAnamnese> ProntuarioAnamnese { get; set; }
        public DbSet<ProntuarioConsulta> ProntuarioConsulta { get; set; }
        public DbSet<ProntuarioEvolucao> ProntuarioEvolucao { get; set; }
        public DbSet<ProntuarioExame> ProntuarioExame { get; set; }
        public DbSet<ProntuarioHipotese> ProntuarioHipotese { get; set; }
        public DbSet<ProntuarioDentista> ProntuarioDentista { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Configurations.Add(new AgendaMap());
            modelBuilder.Configurations.Add(new LembretesMap());
            modelBuilder.Configurations.Add(new LoginMap());
            modelBuilder.Configurations.Add(new PacienteComplementarMap());
            modelBuilder.Configurations.Add(new PacienteConvenioMap());
            modelBuilder.Configurations.Add(new PacienteDadosMap());
            modelBuilder.Configurations.Add(new ProntuarioAnamneseMap());
            modelBuilder.Configurations.Add(new ProntuarioConsultaMap());
            modelBuilder.Configurations.Add(new ProntuarioEvolucaoMap());
            modelBuilder.Configurations.Add(new ProntuarioExameMap());
            modelBuilder.Configurations.Add(new ProntuarioHipoteseMap());
            modelBuilder.Configurations.Add(new ProntuarioDentistaMap());
        }
    }
}
