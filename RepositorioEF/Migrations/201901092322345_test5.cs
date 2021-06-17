namespace RepositorioEF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class test5 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Agenda", "IdLembrete", c => c.Int());
            CreateIndex("dbo.Agenda", "IdLembrete");
            AddForeignKey("dbo.Agenda", "IdLembrete", "dbo.Lembretes", "id");
        }
        
        public override void Down()
        {
        }
    }
}
