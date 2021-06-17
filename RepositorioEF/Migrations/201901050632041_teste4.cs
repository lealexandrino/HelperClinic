namespace RepositorioEF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class teste4 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Lembretes", "Clinica", c => c.String());
        }
        
        public override void Down()
        {
        }
    }
}
