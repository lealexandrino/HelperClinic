namespace RepositorioEF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addtableProntuarioDentista : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ProntuarioDentista",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    IdPaciente = c.Int(nullable: false),
                    IdUsuario = c.Guid(nullable: false),
                    Clinica = c.String(),
                    s11a = c.Int(nullable: false),
                    ProntuarioConsulta_Id = c.Int(),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ProntuarioConsulta", t => t.ProntuarioConsulta_Id)
                .Index(t => t.ProntuarioConsulta_Id);
        }
        
        public override void Down()
        {
        }
    }
}
