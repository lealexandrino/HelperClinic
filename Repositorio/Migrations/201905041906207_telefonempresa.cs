namespace RepositorioEF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class telefonempresa : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Empresa", "ClinicaTelefone", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Empresa", "ClinicaTelefone");
        }
    }
}
