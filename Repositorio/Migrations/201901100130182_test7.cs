namespace RepositorioEF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class test7 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Lembretes", "Deletado", c => c.Boolean());
        }
        
        public override void Down()
        {
        }
    }
}
