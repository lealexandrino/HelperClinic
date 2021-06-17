USE Sollo
GO

ALTER TABLE Empresas ADD OrigemCadastro tinyint not null CONSTRAINT DF_Empresas_OrigemCadastro DEFAULT (1)
GO

ALTER PROCEDURE SP_Insert_Empresas
@CodEmpresa int output,
@CodUsuario uniqueidentifier output,
@CodAprovacao uniqueidentifier output,
@RazaoSocial varchar(150),
@NomeFantasia varchar(20),
@CNPJ varchar(18),
@IE varchar(30) = null,
@Responsavel varchar(80),
@CPF varchar(14),
@CEP varchar(9),
@Endereco varchar(150),
@Numero varchar(10),
@CodCidade int,
@Bairro varchar(60) = null,
@Email varchar(60),
@Telefone varchar(60),
--Parâmetros usuário
@Nome varchar(14),
@EmailUsuario varchar(60),
@Senha varchar(max),
@TelefoneUsuario varchar(14) = null,
@Celular varchar(16)  = null,
@OrigemCadastro tinyint,
@CNPJContabilidade varchar (18) = null
AS
BEGIN
	SET @CodUsuario = NEWID()

	SET @CodAprovacao = NEWID()

	DECLARE @CodPlano INT
	SET @CodPlano = (SELECT TOP 1 CodPlano FROM Planos WHERE Excluido = 0 ORDER BY Valor DESC)

	INSERT INTO Empresas (RazaoSocial, NomeFantasia, CNPJ, IE, Responsavel, CPF, CEP, 
						  Endereco, Numero, CodCidade, Bairro, Telefone, Email, DtLimiteAcesso, CodPlano, OrigemCadastro, CNPJContador)
	VALUES (@RazaoSocial, @NomeFantasia, @CNPJ, @IE, @Responsavel, @CPF, @CEP, 
			@Endereco, @Numero, @CodCidade, @Bairro, @Telefone, @Email, DATEADD(DAY, 7, GETDATE()), @CodPlano, @OrigemCadastro, @CNPJContabilidade)
				
	SET @CodEmpresa = SCOPE_IDENTITY()

	INSERT INTO ParametrosEmpresas (CodEmpresa, TipoEmpresa, QtdCasasDecimais, TipoCertificado)
	VALUES (@CodEmpresa, 1, 2, 0)

	INSERT INTO Usuarios (CodUsuario, Nome, Email, Senha, Telefone, Celular, DtCadastro)
	VALUES (@CodUsuario, @Nome, @EmailUsuario, @Senha, @Telefone, @Celular, GETDATE())

	---------------------- Criando grupos gerais para a nova empresa ----------------------------------------
	INSERT INTO GruposUsuarios (CodEmpresa, Descricao, TipoGrupo) VALUES (@CodEmpresa, 'GERAL', 1)

	DECLARE @CodGrupoUsuario int
	SET @CodGrupoUsuario = SCOPE_IDENTITY()

	INSERT INTO GruposClientes (CodEmpresa, Descricao, Excluido) VALUES (@CodEmpresa, 'GERAL', 0)

	INSERT INTO GruposProdutos (CodEmpresa, Descricao, Excluido) VALUES (@CodEmpresa, 'GERAL', 0)

	DECLARE @CodGrupoProduto int
	SET @CodGrupoProduto = SCOPE_IDENTITY()
	---------------------------------------------------------------------------------------------------------
	---------------------- Criando os recursos de tutoriais para a nova empresa ----------------------------------------
	DECLARE @CodRecurso int
	SET @CodRecurso = 1
	
	WHILE @CodRecurso <= 19
	BEGIN
		INSERT INTO RecursosEmpresas (CodEmpresa, CodRecurso, MostraTutorial)
		VALUES (@CodEmpresa, @CodRecurso, 1)

		SET @CodRecurso = @CodRecurso + 1
	END
	---------------------------------------------------------------------------------------------------------
	---------------------- Criando os produtos de NF-e complementar ----------------------------------------
	insert into Produtos 
	(CodEmpresa, CodInterno, Descricao, CodGrupo, CodNCM, UnidComercial, Visivel)
	values (@CodEmpresa, 'COMP.ICMS', 'NF COMPLEMENTAR DE ICMS', @CodGrupoProduto, '73181900', 'R$', 0),
	(@CodEmpresa, 'COMP.IPI', 'NF COMPLEMENTAR DE IPI', @CodGrupoProduto, '73181900', 'R$', 0),
	(@CodEmpresa, 'COMP.ICMSST', 'NF COMPLEMENTAR DE ICMS SUBSTITUICAO TRIBUTARIA', @CodGrupoProduto, '73181900', 'R$', 0),
	(@CodEmpresa, 'COMP.CREDITOICMS', 'IMOBILIZADO', @CodGrupoProduto, '73181900', 'R$', 0)
	---------------------------------------------------------------------------------------------------------
	---------------------- Criando regras de tributação complementar para SN ----------------------------------------
	DECLARE @CodProdutoCompICMS INT
	SET @CodProdutoCompICMS = (select CodProduto from Produtos where CodEmpresa = @CodEmpresa and CodInterno = 'COMP.ICMS')

	DECLARE @CodProdutoCompIPI INT
	SET @CodProdutoCompIPI = (select CodProduto from Produtos where CodEmpresa = @CodEmpresa and CodInterno = 'COMP.IPI')

	DECLARE @CodProdutoCompICMSST INT
	SET @CodProdutoCompICMSST = (select CodProduto from Produtos where CodEmpresa = @CodEmpresa and CodInterno = 'COMP.ICMSST')

	DECLARE @CodProdutoCREDITOICMS INT
	SET @CodProdutoCREDITOICMS = (select CodProduto from Produtos where CodEmpresa = @CodEmpresa and CodInterno = 'COMP.CREDITOICMS')
	
	INSERT INTO RegrasTributacoes 
		 (CodEmpresa, CodProduto,         ForcaCFOPs, CalculaIPI, PorcentIPI, AgregaFreteIPI, CSTIPI, CalculaICMS, CalculaReducICMS, PorcentReducICMS, ICMSDiferido, CalculaCredICMS, PorcentCredICMS, AgregaDespesas, CSOSN, CalculaPIS, PorcentPIS, CSTPIS, CalculaCOFINS, PorcentCOFINS, CSTCOFINS, SubstTributaria, SubstTributariaRetida)
		 VALUES 
		 (@CodEmpresa, @CodProdutoCompICMS,        0,		  0,		  0,			 0,			55,			   1,			  0,				0,			   0,			   0,			     0,			     0,			900,	  0,			0,		 7,		    0,			0,			7,			  0,				  0),
		 (@CodEmpresa, @CodProdutoCompIPI,		   0,         0,		  0,			 0,			50,			   0,			  0,				0,			   0,			   0,			     0,			     0,			900,	  0,			0,		 99,		0,			0,			99,			  0,				  0),
		 (@CodEmpresa, @CodProdutoCompICMSST,	   0,         0,		  0,			 0,			55,			   1,			  0,				0,			   0,			   0,			     0,			     0,			900,	  0,			0,		 7,			0,			0,			7,			  0,				  0),
		 (@CodEmpresa, @CodProdutoCREDITOICMS, 0,         0,		  0,			 0,			53,			   1,			  0,				0,			   0,			   0,			     0,			     0,			900,	  0,			0,		 7,			0,			0,			7,			  0,				  0)
	---------------------------------------------------------------------------------------------------------
	---------------------- Criando os quadros de primeiros passos ----------------------------------------
	INSERT INTO QuadrosIniciais (CodEmpresa) VALUES (@CodEmpresa)
	---------------------------------------------------------------------------------------------------------
	---------------------- Cadastrando os módulos gratuitos para empresa ----------------------------------------
	DECLARE modulos CURSOR FOR SELECT CodModulo FROM ModulosPlanos WHERE CodPlano = @CodPlano
	OPEN modulos

	DECLARE @CodModulo int

	FETCH NEXT FROM modulos INTO @CodModulo

	WHILE @@FETCH_STATUS = 0
	BEGIN
		INSERT INTO ModulosEmpresas (CodEmpresa, CodModulo)
		VALUES (@CodEmpresa, @CodModulo)
		
		FETCH NEXT FROM modulos INTO @CodModulo
	END

	CLOSE modulos
	DEALLOCATE modulos
		
	INSERT INTO CotasEmpresas (CodEmpresa, Restantes, Avulsas)
	VALUES (@CodEmpresa, (SELECT NumDocumentos FROM Planos WHERE CodPlano = (SELECT MAX(CodPlano) FROM Planos)), 0)
	---------------------------------------------------------------------------------------------------------

	INSERT INTO UsuariosEmpresas (CodEmpresa, CodUsuario, CodGrupo, CodAprovacao, [Root], Enviado)
	VALUES (@CodEmpresa, @CodUsuario, @CodGrupoUsuario, @CodAprovacao, 1, 1)

	INSERT INTO SeriesNFE VALUES (@CodEmpresa, '001', 1, 100000)

	INSERT INTO SeriesRPS VALUES (@CodEmpresa, '001', 1, 100000)

	INSERT INTO SeriesCTE VALUES (@CodEmpresa, '001', 1, 100000)
		
	INSERT INTO SeriesCTEOS VALUES (@CodEmpresa, '001', 1, 100000)

	INSERT INTO SeriesMDFE VALUES (@CodEmpresa, '001', 1, 100000)
END
GO