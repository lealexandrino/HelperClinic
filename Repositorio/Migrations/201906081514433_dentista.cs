namespace RepositorioEF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dentista : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ProntuarioDentista", "Extracao", c => c.String());
            AddColumn("dbo.ProntuarioDentista", "Furca", c => c.String());
            AddColumn("dbo.ProntuarioDentista", "protese", c => c.String());
        }
        
        public override void Down()
        {
        }
    }
}
