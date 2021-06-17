namespace RepositorioEF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class teste11 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Empresa",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    Nome = c.String(maxLength: 200),
                    Foto = c.String(),
                    Clinica = c.String(maxLength: 200),
                    ClinicaEmail = c.String(maxLength: 50),
                    QtdeMensagemRestante = c.Int(nullable: false),
                    MensagemWhatsApp = c.String(),
                    EnderecoCEP = c.String(),
                    EnderecoRua = c.String(),
                    EnderecoNumero = c.Int(nullable: false),
                    EnderecoComplemento = c.String(),
                    EnderecoBairro = c.String(),
                    EnderecoCidade = c.String(),
                    EnderecoEstado = c.String(),
                    EnderecoPais = c.String(),
                    CNPJ = c.String(maxLength: 20)
                })
                .PrimaryKey(t => t.Id);
        }
        
        public override void Down()
        {
            DropColumn("dbo.LogIn", "Teste");
        }
    }
}
