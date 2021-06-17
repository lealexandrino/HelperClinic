namespace RepositorioEF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class teste3 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Lembretes", "Celular", c => c.String(maxLength: 20));
            AddColumn("dbo.Lembretes", "Tipo", c => c.Int());
        }
        
        public override void Down()
        {
            
        }
    }
}
