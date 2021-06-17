namespace RepositorioEF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class inicial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Agenda",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        IdPaciente = c.Int(nullable: false),
                        DateTimeScheduled = c.DateTime(nullable: false),
                        AppointmentLength = c.Int(nullable: false),
                        StatusENUM = c.Int(nullable: false),
                        IdUsuario = c.Guid(),
                        AlteradoPor = c.Guid(),
                        Clinica = c.String(),
                        IdMedico = c.Int(nullable: false),
                        Cor = c.String(),
                        DataAlterado = c.DateTime(nullable: false),
                        Deletado = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Lembretes",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        Pagina = c.Int(nullable: false),
                        IdUsuario = c.Guid(),
                        Lembrete = c.String(),
                        DataLembrete = c.DateTime(nullable: false),
                        Minutos = c.Int(nullable: false),
                        Horas = c.Int(nullable: false),
                        Dias = c.Int(nullable: false),
                        QuantidadePaginas = c.Int(nullable: false),
                        HoraMinuto = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.LogIn",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IdUsuario = c.Guid(nullable: false),
                        Nome = c.String(maxLength: 200),
                        LastActiveDate = c.DateTime(nullable: false),
                        Perfil = c.String(maxLength: 200),
                        Email = c.String(maxLength: 200),
                        Senha = c.String(maxLength: 200),
                        Foto = c.String(),
                        Clinica = c.String(maxLength: 200),
                        Cor = c.String(maxLength: 50),
                        ClinicaEmail = c.String(maxLength: 50),
                    })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "dbo.PacienteComplementar",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IdPacienteComplementar = c.Int(nullable: false),
                        Naturalidade = c.String(),
                        EstadoNasceu = c.String(),
                        Nacionalidade = c.String(),
                        Etnia = c.String(),
                        Rg = c.String(),
                        EstadoCivil = c.String(),
                        Profissao = c.String(),
                        Escolaridade = c.String(),
                        PacienteDados_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.PacienteDados", t => t.PacienteDados_Id)
                .Index(t => t.PacienteDados_Id);
            
            CreateTable(
                "dbo.PacienteDados",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Nome = c.String(nullable: false),
                        DataNascimentoS = c.String(),
                        DataNascimento = c.DateTime(nullable: false),
                        Sexo = c.String(),
                        Email = c.String(),
                        Obs = c.String(),
                        PerguntaClinica = c.String(),
                        TelefoneFixo = c.String(),
                        TelefoneCelular = c.String(),
                        TelefoneTrabalho = c.String(),
                        AceitaSms = c.Boolean(nullable: false),
                        EnderecoCEP = c.String(),
                        EnderecoRua = c.String(),
                        EnderecoNumero = c.Int(nullable: false),
                        EnderecoComplemento = c.String(),
                        EnderecoBairro = c.String(),
                        EnderecoCidade = c.String(),
                        EnderecoEstado = c.String(),
                        EnderecoPais = c.String(),
                        CriadoPor = c.Guid(nullable: false),
                        AlteradoPor = c.Guid(nullable: false),
                        DataAlterado = c.DateTime(nullable: false),
                        Clinica = c.String(),
                        Cpf = c.String(),
                        Novo = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.PacienteConvenio",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IdPacienteConvenio = c.Int(nullable: false),
                        Convenio = c.String(),
                        Plano = c.String(),
                        NumeroCarteirinha = c.Int(),
                        ValidadeS = c.String(),
                        Validade = c.DateTime(),
                        Acomodacao = c.String(),
                        PacienteDados_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.PacienteDados", t => t.PacienteDados_Id)
                .Index(t => t.PacienteDados_Id);
            
            CreateTable(
                "dbo.ProntuarioAnamnese",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IdPaciente = c.Int(nullable: false),
                        IdUsuario = c.Guid(nullable: false),
                        Clinica = c.String(),
                        Historia = c.String(),
                        ProblemaRenais = c.String(),
                        ProblemaArticulares = c.String(),
                        ProblemaCardiaco = c.String(),
                        ProblemaRespiratorio = c.String(),
                        ProblemaGastrico = c.String(),
                        Alergia = c.String(),
                        Hepatite = c.Boolean(nullable: false),
                        Hiv = c.Boolean(nullable: false),
                        Diabetes = c.Boolean(nullable: false),
                        Gravidez = c.Boolean(nullable: false),
                        UsoMedicamento = c.String(),
                        QueixaPrincipal = c.String(),
                        ProntuarioConsulta_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ProntuarioConsulta", t => t.ProntuarioConsulta_Id)
                .Index(t => t.ProntuarioConsulta_Id);
            
            CreateTable(
                "dbo.ProntuarioConsulta",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IdConsulta = c.Int(nullable: false),
                        IdPaciente = c.Int(nullable: false),
                        IdUsuario = c.Guid(nullable: false),
                        Clinica = c.String(),
                        DuracaoConsulta = c.String(),
                        DataConsulta = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.ProntuarioEvolucao",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IdPaciente = c.Int(nullable: false),
                        IdUsuario = c.Guid(nullable: false),
                        Clinica = c.String(),
                        Obs = c.String(),
                        ProntuarioConsulta_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ProntuarioConsulta", t => t.ProntuarioConsulta_Id)
                .Index(t => t.ProntuarioConsulta_Id);
            
            CreateTable(
                "dbo.ProntuarioExame",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IdPaciente = c.Int(nullable: false),
                        IdUsuario = c.Guid(nullable: false),
                        Clinica = c.String(),
                        Altura = c.String(),
                        Peso = c.String(),
                        FrequenciaCardiaca = c.String(),
                        PressaoArterialSistolica = c.String(),
                        PressaoArterialDiastolica = c.String(),
                        Obs = c.String(),
                        ProntuarioConsulta_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ProntuarioConsulta", t => t.ProntuarioConsulta_Id)
                .Index(t => t.ProntuarioConsulta_Id);
            
            CreateTable(
                "dbo.ProntuarioHipotese",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IdPaciente = c.Int(nullable: false),
                        IdUsuario = c.Guid(nullable: false),
                        Clinica = c.String(),
                        Diagnostico = c.String(),
                        Obs = c.String(),
                        ProntuarioConsulta_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ProntuarioConsulta", t => t.ProntuarioConsulta_Id)
                .Index(t => t.ProntuarioConsulta_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ProntuarioAnamnese", "ProntuarioConsulta_Id", "dbo.ProntuarioConsulta");
            DropForeignKey("dbo.ProntuarioHipotese", "ProntuarioConsulta_Id", "dbo.ProntuarioConsulta");
            DropForeignKey("dbo.ProntuarioExame", "ProntuarioConsulta_Id", "dbo.ProntuarioConsulta");
            DropForeignKey("dbo.ProntuarioEvolucao", "ProntuarioConsulta_Id", "dbo.ProntuarioConsulta");
            DropForeignKey("dbo.PacienteComplementar", "PacienteDados_Id", "dbo.PacienteDados");
            DropForeignKey("dbo.PacienteConvenio", "PacienteDados_Id", "dbo.PacienteDados");
            DropIndex("dbo.ProntuarioHipotese", new[] { "ProntuarioConsulta_Id" });
            DropIndex("dbo.ProntuarioExame", new[] { "ProntuarioConsulta_Id" });
            DropIndex("dbo.ProntuarioEvolucao", new[] { "ProntuarioConsulta_Id" });
            DropIndex("dbo.ProntuarioAnamnese", new[] { "ProntuarioConsulta_Id" });
            DropIndex("dbo.PacienteConvenio", new[] { "PacienteDados_Id" });
            DropIndex("dbo.PacienteComplementar", new[] { "PacienteDados_Id" });
            DropTable("dbo.ProntuarioHipotese");
            DropTable("dbo.ProntuarioExame");
            DropTable("dbo.ProntuarioEvolucao");
            DropTable("dbo.ProntuarioConsulta");
            DropTable("dbo.ProntuarioAnamnese");
            DropTable("dbo.PacienteConvenio");
            DropTable("dbo.PacienteDados");
            DropTable("dbo.PacienteComplementar");
            DropTable("dbo.LogIn");
            DropTable("dbo.Lembretes");
            DropTable("dbo.Agenda");
        }
    }
}
