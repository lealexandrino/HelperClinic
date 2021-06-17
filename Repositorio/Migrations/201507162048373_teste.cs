namespace RepositorioEF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    public partial class teste : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.LogIn", "Teste", c => c.String(maxLength: 50));
            AlterColumn("dbo.PacienteConvenio", "NumeroCarteirinha", c => c.Int());
            AlterColumn("dbo.PacienteConvenio", "validade", c => c.DateTime());
        }

        public override void Down()
        {
            DropColumn("dbo.LogIn", "Teste");
        }
    }
}
