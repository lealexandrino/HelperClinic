namespace RepositorioEF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class teste8 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Empresa", "Plano", c => c.String(maxLength: 20));
            AddColumn("dbo.Empresa", "VigenciaPlano", c => c.DateTime());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Lembretes", "Deletado");
        }
    }
}
