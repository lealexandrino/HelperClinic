USE Sollo
GO

CREATE PROCEDURE SP_Insert_Empresas
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
@Celular varchar(16)  = null
AS
BEGIN
	SET @CodUsuario = NEWID()

	SET @CodAprovacao = NEWID()

	DECLARE @CodPlano INT
	SET @CodPlano = (SELECT TOP 1 CodPlano FROM Planos WHERE Excluido = 0 ORDER BY Valor DESC)

	INSERT INTO Empresas (RazaoSocial, NomeFantasia, CNPJ, IE, Responsavel, CPF, CEP, 
						  Endereco, Numero, CodCidade, Bairro, Telefone, Email, DtLimiteAcesso, CodPlano)
	VALUES (@RazaoSocial, @NomeFantasia, @CNPJ, @IE, @Responsavel, @CPF, @CEP, 
			@Endereco, @Numero, @CodCidade, @Bairro, @Telefone, @Email, DATEADD(DAY, 15, GETDATE()), @CodPlano)
				
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
	
	WHILE @CodRecurso <= 17
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

	--INSERT INTO SeriesCTE VALUES (@CodEmpresa, '001', 1, 100000)
END
GO

CREATE PROCEDURE SP_NovaEmpresa
@CodEmpresa int output,
@CodUsuario uniqueidentifier,
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
@Telefone varchar(60)
AS
BEGIN
	INSERT INTO Empresas (RazaoSocial, NomeFantasia, CNPJ, IE, Responsavel, CPF, CEP, 
						  Endereco, Numero, CodCidade, Bairro, Telefone, Email)
	VALUES (@RazaoSocial, @NomeFantasia, @CNPJ, @IE, @Responsavel, @CPF, @CEP, 
			@Endereco, @Numero, @CodCidade, @Bairro, @Telefone, @Email)

	SET @CodEmpresa = SCOPE_IDENTITY()

	INSERT INTO ParametrosEmpresas (CodEmpresa, QtdCasasDecimais, Atividade, ObrigaEnvioSequencia, 
									LimiteNFePendentes, PendenciaCliente, LimiteItensNFE, FretePadrao, Especie, MarcaVolume, NumeroVolume, UnidPadrao, CodCFOP, AmbienteNFE, AmbienteNFSE, TipoEmpresa,
									RegimeEspecialTribuacaoNFSe, NaturezaTributacaoNFSe, TipoTributacaoNFSe, ExigibilidadeISSNFSe, IncentivoFiscal, IncentivadorCultural, CodCidadeNFSe, OperacaoNFSe,
									PISNFSe, COFINSNFSe, IRNFSe, INSSNFSe, CSLLNFSe, ISSNFSe)
	VALUES (@CodEmpresa, 2, 3, 10, 10, 1, 0, 1, 'VOLUME', null, null, 'UN', 5102, 1, 1, 1, 1, 1, 6, 1, 0, 0, @CodCidade, 'A', 0, 0, 0, 0, 0, 0)
	
	---------------------- Criando grupos gerais para a nova empresa ----------------------------------------
	INSERT INTO GruposUsuarios (CodEmpresa, Descricao, TipoGrupo, Excluido) VALUES (@CodEmpresa, 'GERAL', 1, 0)

	DECLARE @CodGrupoUsuario int
	SET @CodGrupoUsuario = SCOPE_IDENTITY()

	INSERT INTO GruposClientes (CodEmpresa, Descricao, Excluido) VALUES (@CodEmpresa, 'GERAL', 0)

	INSERT INTO GruposProdutos (CodEmpresa, Descricao, Excluido) VALUES (@CodEmpresa, 'GERAL', 0)

	DECLARE @CodGrupoProduto int
	SET @CodGrupoProduto = SCOPE_IDENTITY()
	---------------------------------------------------------------------------------------------------------
	---------------------- Criando os recursos para a nova empresa ----------------------------------------
	DECLARE recursos CURSOR FOR SELECT CodRecurso FROM Recursos
	OPEN recursos

	DECLARE @CodRecurso int

	FETCH NEXT FROM recursos INTO @CodRecurso

	WHILE @@FETCH_STATUS = 0
	BEGIN
		INSERT INTO RecursosEmpresas (CodEmpresa, CodRecurso)
		VALUES (@CodEmpresa, @CodRecurso)

		FETCH NEXT FROM recursos INTO @CodRecurso
	END

	CLOSE recursos
	DEALLOCATE recursos

	INSERT INTO RecursosEmpresas (CodEmpresa, CodRecurso)
	VALUES (@CodEmpresa, 11) -- NFe

	INSERT INTO RecursosEmpresas (CodEmpresa, CodRecurso)
	VALUES (@CodEmpresa, 12) -- Tributacao

    INSERT INTO RecursosEmpresas (CodEmpresa, CodRecurso)
	VALUES (@CodEmpresa, 14) -- NFSe

    INSERT INTO RecursosEmpresas (CodEmpresa, CodRecurso)
	VALUES (@CodEmpresa, 17) -- CTe
	---------------------------------------------------------------------------------------------------------
	---------------------- Criando os produtos de NF-e complementar ----------------------------------------
	insert into Produtos (CodEmpresa, CodInterno, Descricao, CodGrupo, CodNCM, UnidComercial, Visivel)
	values (@CodEmpresa, 'COMP.ICMS', 'NF COMPLEMENTAR DE ICMS', @CodGrupoProduto, '73181900', 'R$', 0),
	(@CodEmpresa, 'COMP.IPI', 'NF COMPLEMENTAR DE IPI', @CodGrupoProduto, '73181900', 'R$', 0),
	(@CodEmpresa, 'COMP.ICMSST', 'NF COMPLEMENTAR DE ICMS SUBSTITUICAO TRIBUTARIA', @CodGrupoProduto, '73181900', 'R$', 0),
	(@CodEmpresa, 'COMP.CREDITOICMS', 'IMOBILIZADO', @CodGrupoProduto, '73181900', 'R$', 0)
	---------------------------------------------------------------------------------------------------------
	---------------------- Criando regras de tributação complementar para SN ----------------------------------------
	insert into RegrasTributacoes 
	(CodEmpresa, CodProduto, ForcaCFOPs, CalculaICMS, CalculaReducICMS, CSOSN, CalculaIPI, AgregaFreteIPI, CSTIPI, CalculaPIS, CSTPIS, CalculaCOFINS, CSTCOFINS)
	values 
	(@CodEmpresa, (select CodProduto from Produtos where CodEmpresa = @CodEmpresa and CodInterno = 'COMP.ICMS'), 0, 1, 0, 900, 0, 0, 55, 0, 7, 0, 7),
	(@CodEmpresa, (select CodProduto from Produtos where CodEmpresa = @CodEmpresa and CodInterno = 'COMP.IPI'), 0, 0, 0, 900, 1, 0, 50, 0, 99, 0, 99),
	(@CodEmpresa, (select CodProduto from Produtos where CodEmpresa = @CodEmpresa and CodInterno = 'COMP.ICMSST'), 0, 1, 0, 900, 0, 0, 55, 0, 7, 0, 7),
	(@CodEmpresa, (select CodProduto from Produtos where CodEmpresa = @CodEmpresa and CodInterno = 'COMP.CREDITOICMS'), 0, 1, 0, 900, 0, 0, 53, 0, 7, 0, 7)
	---------------------------------------------------------------------------------------------------------
	---------------------- Criando os quadros de primeiros passos ----------------------------------------
	INSERT INTO QuadrosIniciais (CodEmpresa) VALUES (@CodEmpresa)
	---------------------------------------------------------------------------------------------------------
	---------------------- Cadastrando o módulo gratuito de NF-e para empresa ----------------------------------------
	INSERT INTO ModulosEmpresas (CodEmpresa, CodModulo, CodPlano) 
	VALUES (@CodEmpresa, 1, 1)

	INSERT INTO CotasEmpresas (CodEmpresa, CodModulo, Restantes, Avulsas) 
	VALUES (@CodEmpresa, 1, 5, 0)
	---------------------------------------------------------------------------------------------------------

	INSERT INTO UsuariosEmpresas (CodEmpresa, CodUsuario, CodGrupo, CodAprovacao, [Root], Enviado)
	VALUES (@CodEmpresa, @CodUsuario, @CodGrupoUsuario, NEWID(), 1, 1)

	INSERT INTO SeriesNFE VALUES (@CodEmpresa, '001', 1, 100000)

	INSERT INTO SeriesRPS VALUES (@CodEmpresa, '001', 1, 100000)
END
GO

CREATE PROCEDURE SP_RegistraAtividades
@CodUsuario uniqueidentifier,
@CodEmpresa int,
@Descricao varchar(740),
@CodRecurso int
AS
BEGIN
	DECLARE @Nome varchar(60)
	SET @Nome = (select Nome from Usuarios where CodUsuario = @CodUsuario)

	DECLARE @CodSessao uniqueidentifier
	SET @CodSessao = (select CodSessao from UsuariosEmpresas WHERE CodUsuario = @CodUsuario and CodEmpresa = @CodEmpresa)

	INSERT INTO LogsAtividadesUsuarios(CodSessao, CodUsuario, CodEmpresa, Descricao, CodRecurso) VALUES (@CodSessao, @CodUsuario, @CodEmpresa, UPPER(@Descricao), @CodRecurso)
END
GO

CREATE PROCEDURE SP_RegistraLogin
@CodSessao uniqueidentifier output,
@CodUsuario uniqueidentifier,
@CodEmpresa int,
@IP varchar (15)
AS
BEGIN
	SET @CodSessao = NEWID()

	INSERT INTO LogsLogin (CodSessao, CodUsuario, CodEmpresa, IP)
	VALUES (@CodSessao, @CodUsuario, @CodEmpresa, @IP)

	UPDATE UsuariosEmpresas SET CodSessao = @CodSessao, UltimaAtividade = GETDATE() WHERE CodUsuario = @CodUsuario and CodEmpresa = @CodEmpresa
END
GO

CREATE PROCEDURE SP_Insert_GruposUsuarios
@CodGrupo int output,
@CodUsuario uniqueidentifier,
@CodEmpresa int,
@Descricao varchar(30),
@TipoGrupo tinyint
AS
BEGIN
	INSERT INTO GruposUsuarios (Descricao, CodEmpresa, TipoGrupo) VALUES (@Descricao, @CodEmpresa, @TipoGrupo)

	SET @CodGrupo = SCOPE_IDENTITY()

	DECLARE @Registro varchar(700) = 'adicionou o grupo de usuários: ' + cast(@CodGrupo as varchar)
	EXEC SP_RegistraAtividades @CodUsuario, @CodEmpresa, @Registro, 1
END
GO

CREATE PROCEDURE SP_Update_GruposUsuarios
@CodGrupo int,
@CodUsuario uniqueidentifier,
@CodEmpresa int,
@Descricao varchar(30),
@TipoGrupo tinyint
AS
BEGIN
	UPDATE GruposUsuarios SET Descricao = @Descricao, TipoGrupo = @TipoGrupo WHERE CodGrupo = @CodGrupo

	DECLARE @Registro varchar(700) = 'alterou o grupo de usuários: ' + cast(@CodGrupo as varchar)
	EXEC SP_RegistraAtividades @CodUsuario, @CodEmpresa, @Registro, 1
END
GO

CREATE PROCEDURE SP_Delete_GruposUsuarios
@CodGrupo int,
@CodUsuario uniqueidentifier,
@CodEmpresa int
AS
BEGIN
	IF exists(select top 1 CodUsuario from UsuariosEmpresas where CodGrupo = @CodGrupo and CodEmpresa = @CodEmpresa and Excluido = 0)
	begin
		RAISERROR('ERRO001: Não é possível excluir este grupo, pois há usuários que fazem parte dele', 16, 1)
		return
	end

	UPDATE GruposUsuarios SET Excluido = 1 WHERE CodGrupo = @CodGrupo and CodEmpresa = @CodEmpresa

	IF @@ROWCOUNT = 0
	begin
		RAISERROR('ERRO001: Operacao executada com sucesso, mas nenhum registro foi excluído', 16, 1)
		return
	end

	DELETE FROM DireitosGruposUsuarios WHERE CodGrupo = @CodGrupo

	DECLARE @Registro varchar(700) = 'excluiu o grupo de usuários: ' + cast(@CodGrupo as varchar)
	EXEC SP_RegistraAtividades @CodUsuario, @CodEmpresa, @Registro, 1
END
GO

CREATE PROCEDURE SP_Insert_DireitosGruposUsuarios
@CodGrupo int,
@CodRecurso int,
@Consultar bit,
@Cadastrar bit,
@Alterar bit,
@Excluir bit
AS
BEGIN
	INSERT INTO DireitosGruposUsuarios (CodGrupo, CodRecurso, Consultar, Cadastrar, Alterar, Excluir)
	VALUES (@CodGrupo, @CodRecurso, @Consultar, @Cadastrar, @Alterar, @Excluir)
END
GO

CREATE PROCEDURE SP_Delete_DireitosGruposUsuarios
@CodGrupo int
AS
BEGIN
	DELETE FROM DireitosGruposUsuarios WHERE CodGrupo = @CodGrupo
END
GO

CREATE PROCEDURE SP_ValidaDireitoUsuario
@CodUsuario uniqueidentifier,
@CodEmpresa int,
@CodRecurso int,
@Acao int = 0,
@Resposta int output
AS
BEGIN
	IF (SELECT Trial FROM Empresas WHERE CodEmpresa = @CodEmpresa) = 1
	BEGIN
		SET @Resposta = 1
		return
	END
	
	DECLARE @CodGrupo int
	SET @CodGrupo = (select CodGrupo from UsuariosEmpresas where CodUsuario = @CodUsuario and CodEmpresa = @CodEmpresa)
	
	DECLARE @TipoGrupo tinyint
	SET @TipoGrupo = (select TipoGrupo From GruposUsuarios WHERE CodGrupo = @CodGrupo)

	IF(@TipoGrupo = 1) -- Se for admin
	BEGIN
		SET @Resposta = 1
		return
	END

	IF(@Acao = 0)
	BEGIN
		if(exists(select top 1 * from DireitosGruposUsuarios where CodGrupo = @CodGrupo and CodRecurso = @CodRecurso))
			SET @Resposta = 1
		else
			SET @Resposta = 0 
	END
	else if(@Acao = 1)
		SET @Resposta = (select Consultar from DireitosGruposUsuarios where CodGrupo = @CodGrupo and CodRecurso = @CodRecurso)
	else if (@Acao = 2)
		SET @Resposta = (select Cadastrar from DireitosGruposUsuarios where CodGrupo = @CodGrupo and CodRecurso = @CodRecurso)
	else if (@Acao = 3)
		SET @Resposta = (select Alterar from DireitosGruposUsuarios where CodGrupo = @CodGrupo and CodRecurso = @CodRecurso)
	else if (@Acao = 4)
		SET @Resposta = (select Excluir from DireitosGruposUsuarios where CodGrupo = @CodGrupo and CodRecurso = @CodRecurso)
END
GO

CREATE PROCEDURE SP_ValidaDireitosNFe
@CodUsuario uniqueidentifier,
@CodEmpresa int,
@Acao int = 0,
@Resposta int output
AS
BEGIN	
	IF (SELECT Trial FROM Empresas WHERE CodEmpresa = @CodEmpresa) = 1
	BEGIN
		SET @Resposta = 1
		return
	END
	
	DECLARE @CodGrupo int
	SET @CodGrupo = (select CodGrupo from UsuariosEmpresas where CodUsuario = @CodUsuario and CodEmpresa = @CodEmpresa)
	
	DECLARE @TipoGrupo tinyint
	SET @TipoGrupo = (select TipoGrupo From GruposUsuarios WHERE CodGrupo = @CodGrupo)

	IF(@TipoGrupo = 1)
	BEGIN
		SET @Resposta = 1
		return
	END

	IF(@Acao = 1)
		SET @Resposta =  (select Consultar from DireitosNFe where CodGrupo = @CodGrupo)
	else if(@Acao = 2)
		SET @Resposta =  (select Cadastrar from DireitosNFe where CodGrupo = @CodGrupo)
	else if (@Acao = 3)
		SET @Resposta =  (select Editar from DireitosNFe where CodGrupo = @CodGrupo)
	else if (@Acao = 4)
		SET @Resposta =  (select Gerar from DireitosNFe where CodGrupo = @CodGrupo)
	else if (@Acao = 5)
		SET @Resposta =  (select Cancelar from DireitosNFe where CodGrupo = @CodGrupo)
	else if (@Acao = 6)
		SET @Resposta =  (select Inutilizar from DireitosNFe where CodGrupo = @CodGrupo)
	else if (@Acao = 7)
		SET @Resposta =  (select CartaCorrecao from DireitosNFe where CodGrupo = @CodGrupo)
END
GO

CREATE PROCEDURE SP_Insert_Usuarios
@CodAprovacao uniqueidentifier output,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@CodUsuario uniqueidentifier output,
@Nome varchar(60),
@Email varchar(60),
@Senha varchar(max),
@CodGrupo int,
@Telefone varchar(14) = null,
@Celular varchar(15) = null
AS
BEGIN
	If(exists(select top 1 CodUsuario from Usuarios where Email = @Email))
	begin
		RAISERROR('ERRO001: E-mail já cadastrado para um usuário do Sollo. Caso esteja tentando adicionar um usuário que já foi cadastro por outra empresa que utiliza o Sollo, adicione-o na opção Adicionar usuário procurando pelo e-mail', 16, 1)
		return
	end

	SET @CodUsuario = NEWID()
	SET @CodAprovacao = NEWID()

	INSERT INTO Usuarios (CodUsuario, Nome, Email, Senha, Telefone, Celular, DtCadastro)
	VALUES (@CodUsuario, @Nome, @Email, @Senha, @Telefone, @Celular, GETDATE())

	INSERT INTO UsuariosEmpresas (CodUsuario, CodEmpresa, CodGrupo, CodAprovacao)
	VALUES (@CodUsuario, @CodEmpresa, @CodGrupo, @CodAprovacao)
	
	DECLARE @Registro varchar(700) = 'cadastrou o usuário: ' + cast(@CodUsuario as varchar(36))
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 2
END
GO

CREATE PROCEDURE SP_Update_Usuario
@CodEmpresa int,
@CodUsuario uniqueidentifier,
@CodUsuarioLogado uniqueidentifier,
@CodGrupo int
AS
BEGIN
	UPDATE UsuariosEmpresas SET CodGrupo = @CodGrupo WHERE CodEmpresa = @CodEmpresa and CodUsuario = @CodUsuario

	DECLARE @Registro varchar(700) = 'alterou o usuário: ' + cast(@CodUsuario as varchar(36))
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 2
END
GO

CREATE PROCEDURE SP_Delete_Usuario
@CodUsuario uniqueidentifier,
@CodUsuarioLogado uniqueidentifier,
@CodEmpresa int
As
BEGIN
	UPDATE UsuariosEmpresas SET Aprovado = 0, Excluido = 1 WHERE CodUsuario = @CodUsuario AND CodEmpresa = @CodEmpresa
	
	DECLARE @Registro varchar(700) = 'excluiu o usuário: ' + cast(@CodUsuario as varchar(36))
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 2

	INSERT INTO HistoricoUsuarios(CodEmpresa, CodUsuario, Data, Operacao)
	VALUES (@CodEmpresa, @CodUsuario, GETDATE(), 2)
END
GO

CREATE PROCEDURE SP_Bloqueia_Usuario
@CodUsuario uniqueidentifier,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier
AS
BEGIN
	UPDATE UsuariosEmpresas SET Bloqueado = 1 WHERE CodUsuario = @CodUsuario and CodEmpresa = @CodEmpresa

	DECLARE @Registro varchar(700) = 'bloqueou o usuário: ' + cast(@CodUsuario as varchar(32))
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 2
END
GO

CREATE PROCEDURE SP_Desbloqueia_Usuario
@CodUsuario uniqueidentifier,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier
AS
BEGIN
	UPDATE UsuariosEmpresas SET Bloqueado = 0 WHERE CodUsuario = @CodUsuario and CodEmpresa = @CodEmpresa

	DECLARE @Registro varchar(700) = 'desbloqueou o usuário: ' + cast(@CodUsuario as varchar(32))
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 2
END
GO

CREATE PROCEDURE SP_AdicionaUsuario
@CodUsuarioAdicionar uniqueidentifier,
@CodUsuarioLogado uniqueidentifier,
@CodEmpresa int,
@CodGrupo int,
@CodAprovacao uniqueidentifier output
AS
BEGIN
	SET @CodAprovacao = NEWID()

	IF exists(select top 1 CodUsuario from UsuariosEmpresas where CodUsuario = @CodUsuarioAdicionar and CodEmpresa = @CodEmpresa)
		UPDATE UsuariosEmpresas SET Excluido = 0, Aprovado = 0, Enviado = 1, CodAprovacao = @CodAprovacao, CodGrupo = @CodGrupo 
		WHERE CodUsuario = @CodUsuarioAdicionar and CodEmpresa = @CodEmpresa
	ELSE
		INSERT INTO UsuariosEmpresas (CodUsuario, CodEmpresa, CodGrupo, CodAprovacao, Enviado, Aprovado)
		VALUES (@CodUsuarioAdicionar, @CodEmpresa, @CodGrupo, @CodAprovacao, 1, 0)

	DECLARE @Registro varchar(700) = 'adicionou o usuário: ' + cast(@CodUsuarioAdicionar as varchar(32))
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 2
END
GO

CREATE PROCEDURE SP_Update_Empresas
@CodEmpresa int,
@RazaoSocial varchar(150),
@NomeFantasia varchar(20),
@IE varchar(30) = null,
@IM varchar(10) = null,
@Responsavel varchar(80),
@CPF varchar(14),
@CEP varchar(9),
@Endereco varchar(150),
@Numero varchar(10),
@CodCidade int,
@Bairro varchar(60) = null,
@Telefone varchar(14),
@Email varchar(60),
@EmailContador varchar(60) = null,
@TelefoneContador varchar(14) = null,
@ContatoContador varchar(30) = null,
@CNPJContador varchar(140) = null
AS
BEGIN
	UPDATE Empresas SET RazaoSocial = @RazaoSocial, NomeFantasia = @NomeFantasia, IE = @IE, Responsavel = @Responsavel,
	CPF = @CPF, CEP = @CEP, Endereco = @Endereco, Numero = @Numero, CodCidade = @CodCidade, Bairro = @Bairro, Telefone = @Telefone,
	Email = @Email, EmailContador = @EmailContador, TelefoneContador = @TelefoneContador, 
	ContatoContador = @ContatoContador, CNPJContador = @CNPJContador, IM = @IM WHERE CodEmpresa = @CodEmpresa
END
GO

CREATE PROCEDURE SP_UpdateDados_Empresas
@CodEmpresa int,
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
@Telefone varchar(14),
@Email varchar(60)
AS
BEGIN
	UPDATE Empresas SET RazaoSocial = @RazaoSocial, NomeFantasia = @NomeFantasia, IE = @IE, Responsavel = @Responsavel,
	CPF = @CPF, CEP = @CEP, Endereco = @Endereco, Numero = @Numero, CodCidade = @CodCidade, Bairro = @Bairro, Telefone = @Telefone,
	Email = @Email WHERE CodEmpresa = @CodEmpresa
END
GO

CREATE PROCEDURE SP_AtualizaPerfil
@CodUsuario uniqueidentifier,
@Nome varchar(60),
@Email varchar(60),
@Telefone varchar(14) = null,
@Celular varchar(16) = null
AS
BEGIN
	if(@Email != (select Email from Usuarios WHere CodUsuario = @CodUsuario))
	begin
		if(exists(select top 1 CodUsuario from Usuarios where Email = @Email))
		begin
			RAISERROR('ERRO001: E-mail já cadastrado para um usuário do Sollo. Caso esteja tentando adicionar um usuário que já foi cadastro por outra empresa que utiliza o Sollo, adicione-o na opção Adicionar usuário procurando pelo e-mail', 16, 1)
			return
		end
	end

	UPDATE Usuarios SET Nome = @Nome, Email = @Email, Telefone = @Telefone, Celular = @Celular WHERE CodUsuario = @CodUsuario
END
GO

CREATE PROCEDURE SP_Insert_GrupoProdutos
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@CodGrupo int output,
@Descricao varchar(30)
AS
BEGIN
	INSERT INTO GruposProdutos (CodEmpresa, Descricao)
	VALUES (@CodEmpresa, @Descricao)

	SET @CodGrupo = SCOPE_IDENTITY()

	DECLARE @Registro varchar(700) = 'adicionou o grupo de produtos: ' + cast(@CodGrupo as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 3
END
GO

CREATE PROCEDURE SP_Update_GrupoProdutos
@CodGrupo int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@Descricao varchar(30)
AS
BEGIN
	UPDATE GruposProdutos SET Descricao = @Descricao WHERE CodGrupo = @CodGrupo and CodEmpresa = @CodEmpresa

	DECLARE @Registro varchar(700) = 'alterou o grupo de produtos: ' + cast(@CodGrupo as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 3
END
GO

CREATE PROCEDURE SP_Delete_GrupoProdutos
@CodGrupo int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier
AS
BEGIN
	If(exists(select top 1 CodProduto from Produtos where CodGrupo = @CodGrupo and Excluido = 0))
	begin
		RAISERROR('ERRO001: Não foi possível excluir este grupo de produtos, pois há produtos ativos relacionados a ele', 16, 1)
		return
	end

	UPDATE GruposProdutos SET Excluido = 1 WHERE CodGrupo = @CodGrupo and CodEmpresa = @CodEmpresa

	IF @@ROWCOUNT = 0
	begin
		RAISERROR('ERRO001: Operacao executada com sucesso, mas nenhum registro foi excluído', 16, 1)
		return
	end

	DECLARE @Registro varchar(700) = 'excluiu o grupo de produtos: ' + cast(@CodGrupo as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 3
END
GO

CREATE PROCEDURE SP_Insert_GrupoClientes
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@CodGrupo int output,
@Descricao varchar(30)
AS
BEGIN
	INSERT INTO GruposClientes(CodEmpresa, Descricao)
	VALUES (@CodEmpresa, @Descricao)

	SET @CodGrupo = SCOPE_IDENTITY()

	DECLARE @Registro varchar(700) = 'adicionou o grupo de clientes: ' + cast(@CodGrupo as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 4
END
GO

CREATE PROCEDURE SP_Update_GrupoClientes
@CodGrupo int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@Descricao varchar(30)
AS
BEGIN
	UPDATE GruposClientes SET Descricao = @Descricao 
	WHERE CodGrupo = @CodGrupo and CodEmpresa = @CodEmpresa

	DECLARE @Registro varchar(700) = 'alterou o grupo de clientes: ' + cast(@CodGrupo as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 4
END
GO

CREATE PROCEDURE SP_Delete_GrupoClientes
@CodGrupo int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier
AS
BEGIN
	If(exists(select top 1 CodCliente from Clientes where CodGrupo = @CodGrupo and Excluido = 0))
	begin
		RAISERROR('ERRO001: Não foi possível excluir este grupo de clientes, pois há clientes ativos relacionados a ele', 16, 1)
		return
	end

	UPDATE GruposClientes SET Excluido = 1 WHERE CodGrupo = @CodGrupo and CodEmpresa = @CodEmpresa

	IF @@ROWCOUNT = 0
	begin
		RAISERROR('ERRO001: Operacao executada com sucesso, mas nenhum registro foi excluído', 16, 1)
		return
	end

	DECLARE @Registro varchar(700) = 'excluiu o grupo de clientes: ' + cast(@CodGrupo as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 4
END
GO

CREATE PROCEDURE SP_Insert_Marcas
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@Descricao varchar(30)
AS
BEGIN
	INSERT INTO Marcas(CodEmpresa, Descricao)
	VALUES (@CodEmpresa, @Descricao)

	DECLARE @CodMarca int = SCOPE_IDENTITY()

	DECLARE @Registro varchar(700) = 'adicionou a marca: ' + cast(@CodMarca as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 5
END
GO

CREATE PROCEDURE SP_Update_Marcas
@CodMarca int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@Descricao varchar(30)
AS
BEGIN
	UPDATE Marcas SET Descricao = @Descricao WHERE CodMarca = @CodMarca and CodEmpresa = @CodEmpresa

	DECLARE @Registro varchar(700) = 'alterou a marca: ' + cast(@CodMarca as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 5
END
GO

CREATE PROCEDURE SP_Delete_Marcas
@CodMarca int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier
AS
BEGIN
	If(exists(select top 1 CodMarca from Produtos where CodMarca = @CodMarca and Excluido = 0))
	begin
		RAISERROR('ERRO001: Não foi possível excluir esta marca de produtos, pois há produtos ativos relacionados a ela', 16, 1)
		return
	end

	UPDATE Marcas SET Excluido = 1 WHERE CodMarca = @CodMarca and CodEmpresa = @CodEmpresa

	IF @@ROWCOUNT = 0
	begin
		RAISERROR('ERRO001: Operacao executada com sucesso, mas nenhum registro foi excluído', 16, 1)
		return
	end

	DECLARE @Registro varchar(700) = 'excluiu a marca: ' + cast(@CodMarca as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 5
END
GO

CREATE PROCEDURE SP_AlteraSenha
@CodUsuario uniqueidentifier,
@Senha varchar(max)
AS
BEGIN
	UPDATE Usuarios SET Senha = @Senha WHERE CodUsuario = @CodUsuario
END
GO

CREATE PROCEDURE SP_Insert_Transportadoras
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@Nome varchar(60),
@TipoPessoa tinyint,
@Email varchar(60) = null,
@CpfCnpj varchar(18),
@Telefone varchar(16) = null,
@IE varchar(20) = null,
@Observacoes varchar(500) = null,
@CEP varchar(9),
@Endereco varchar(60),
@Numero varchar(10),
@Complemento varchar(60) = null,
@Bairro varchar(60),
@CodCidade int,
@TipoFrete int
AS
BEGIN
	INSERT INTO Transportadoras (CodEmpresa, Nome, TipoPessoa, Email, CpfCnpj, Telefone, IE, Observacoes, CEP, Endereco, Numero, Complemento, Bairro, CodCidade, TipoFrete, Excluido)
	VALUES (@CodEmpresa ,@Nome, @TipoPessoa, @Email, @CpfCnpj, @Telefone, @IE, @Observacoes, @CEP, @Endereco, @Numero, @Complemento, @Bairro, @CodCidade, @TipoFrete, 0)

	DECLARE @CodTransportadora int = SCOPE_IDENTITY()

	DECLARE @Registro varchar(700) = 'adicionou a transportadora: ' + cast(@CodTransportadora as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 7
END
GO

CREATE PROCEDURE SP_Update_Transportadoras
@CodTransportadora int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@Nome varchar(60),
@TipoPessoa int,
@Email varchar(60) = null,
@CpfCnpj varchar(18),
@Telefone varchar(16) = null,
@IE varchar(20) = null,
@Observacoes varchar(500) = null,
@CEP varchar(9),
@Endereco varchar(60),
@Numero varchar(10),
@Complemento varchar(60) = null,
@Bairro varchar(60),
@CodCidade int,
@TipoFrete int
AS
BEGIN
	UPDATE Transportadoras SET Nome = @Nome, TipoPessoa = @TipoPessoa, Email = @Email, CpfCnpj = @CpfCnpj, Telefone = @Telefone, IE = @IE,
	Observacoes = @Observacoes, CEP = @CEP, Endereco = @Endereco, Numero = @Numero, Complemento = @Complemento,
	Bairro = @Bairro, CodCidade = @CodCidade, TipoFrete = @TipoFrete
	WHERE CodTransportadora = @CodTransportadora and CodEmpresa = @CodEmpresa

	DECLARE @Registro varchar(700) = 'alterou a transportadora: ' + cast(@CodTransportadora as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 7
END
GO

CREATE PROCEDURE SP_Delete_Transportadoras
@CodTransportadora int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier
AS
BEGIN
	If(exists(select top 1 CodCliente from Clientes where CodTransportadora = @CodTransportadora and Excluido = 0))
	begin
		RAISERROR('ERRO001: Não foi possível excluir esta transportadora, pois há clientes ativos relacionados a ela', 16, 1)
		return
	end

	If(exists(select top 1 CodTransportadora from NFes where CodTransportadora = @CodTransportadora))
	begin
		RAISERROR('ERRO001: Não foi possível excluir esta transportadora, pois há NFes ativos relacionadas a ela', 16, 1)
		return
	end

	UPDATE Transportadoras SET Excluido = 1 WHERE CodTransportadora = @CodTransportadora and CodEmpresa = @CodEmpresa

	IF @@ROWCOUNT = 0
	begin
		RAISERROR('ERRO001: Operacao executada com sucesso, mas nenhum registro foi excluído', 16, 1)
		return
	end

	DECLARE @Registro varchar(700) = 'excluiu a transportadora: ' + cast(@CodTransportadora as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 7
END
GO

CREATE PROCEDURE SP_Insert_Clientes
@CodCliente int output,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@CodGrupo int,
@CodTransportadora int = null,
@CpfCnpjPassaporte varchar (18),
@Nome varchar(60),
@Telefone varchar(14) = null,
@TipoPessoa tinyint,
@Atividade int,
@IE varchar(30) = null,
@IM varchar(10) = null,
@Suframa varchar(9) = null,
@LimiteItensNFE int,
@EnviaNFEEmail bit,
@IsentaIPI bit,
@CreditaICMS bit,
@AbatePISCOFINSSUF bit,
@CalculaDescontoSuf bit,
@LimiteCredito decimal(10,2),
@Observacoes varchar(500) = null,
@EmailContador varchar(60) = null,
@NomeContador varchar(60) = null,
@TelefoneContador varchar(16) = null
AS
BEGIN
	INSERT INTO Clientes (CodEmpresa, CodGrupo, CodTransportadora, CpfCnpjPassaporte, Nome, Telefone, TipoPessoa, Atividade, IE, Suframa,
	LimiteItensNFE, EnviaNFEEmail, IsentaIPI, CreditaICMS, AbatePISCOFINSSUF, CalculaDescontoSuf, LimiteCredito, Observacoes, EmailContador,
	NomeContador, TelefoneContador, IM)
	VALUES (@CodEmpresa, @CodGrupo, @CodTransportadora, @CpfCnpjPassaporte, @Nome, @Telefone, @TipoPessoa, @Atividade, @IE, @Suframa,
	@LimiteItensNFE, @EnviaNFEEmail, @IsentaIPI, @CreditaICMS, @AbatePISCOFINSSUF, @CalculaDescontoSuf, @LimiteCredito, @Observacoes, @EmailContador,
	@NomeContador, @TelefoneContador, @IM)

	SET @CodCliente = SCOPE_IDENTITY()

	DECLARE @Registro varchar(700) = 'adicionou o cliente: ' + cast(@CodCliente as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 6
END
GO

CREATE PROCEDURE SP_Update_Clientes
@CodCliente int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@CodGrupo int,
@CodTransportadora int = null,
@CpfCnpjPassaporte varchar (18),
@Nome varchar(60),
@Telefone varchar(14) = null,
@TipoPessoa tinyint,
@Atividade int,
@IE varchar(30) = null,
@IM varchar(10) = null,
@Suframa varchar(9) = null,
@LimiteItensNFE int,
@EnviaNFEEmail bit,
@IsentaIPI bit,
@CreditaICMS bit,
@AbatePISCOFINSSUF bit,
@CalculaDescontoSuf bit,
@LimiteCredito decimal(10,2),
@Observacoes varchar(500) = null,
@EmailContador varchar(60) = null,
@NomeContador varchar(60) = null,
@TelefoneContador varchar(16) = null
AS
BEGIN
	IF @CodGrupo = 0 
		SET @CodGrupo = (select top 1 CodGrupo from GruposClientes where CodEmpresa = @CodEmpresa)

	UPDATE Clientes SET CodGrupo = @CodGrupo, CodTransportadora = @CodTransportadora, CpfCnpjPassaporte = @CpfCnpjPassaporte, Nome = @Nome, TipoPessoa = @TipoPessoa,
	Telefone = @Telefone, Atividade = @Atividade, IE = @IE, IM = @IM, Suframa = @Suframa, LimiteItensNFE = @LimiteItensNFE, EnviaNFEEmail = @EnviaNFEEmail, IsentaIPI = @IsentaIPI,
	CreditaICMS = @CreditaICMS, AbatePISCOFINSSUF = @AbatePISCOFINSSUF, CalculaDescontoSuf = @CalculaDescontoSuf, LimiteCredito = @LimiteCredito,
	Observacoes = @Observacoes, EmailContador = @EmailContador, NomeContador = @NomeContador, TelefoneContador = @TelefoneContador
	WHERE CodCliente = @CodCliente and CodEmpresa = @CodEmpresa

	DECLARE @Registro varchar(700) = 'alterou o cliente: ' + cast(@CodCliente as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 6
END
GO

CREATE PROCEDURE SP_Delete_EnderecosClientes
@CodCliente int
AS
BEGIN
	DELETE FROM EnderecosClientes WHERE CodCliente = @CodCliente
END
GO

CREATE PROCEDURE SP_Insert_EnderecosClientes
@CodCliente int,
@TipoEndereco bit, -- 1 nf-e, 0 boleto
@CEP varchar(9),
@Endereco varchar(60),
@Numero varchar(10),
@Complemento varchar(60) = null,
@Bairro varchar(60),
@CodCidade int
AS
BEGIN
	INSERT INTO EnderecosClientes (CodCliente, TipoEndereco, CEP, Endereco, Numero, Complemento, Bairro, CodCidade)
	VALUES (@CodCliente, @TipoEndereco, @CEP, @Endereco, @Numero, @Complemento, @Bairro, @CodCidade)
END
GO

CREATE PROCEDURE SP_Delete_ContatosClientes
@CodCliente int
AS
BEGIN
	DELETE FROM ContatosClientes WHERE CodCliente = @CodCliente
END
GO

CREATE PROCEDURE SP_Insert_ContatosClientes
@CodCliente int,
@CodContato tinyint, -- 1 nf-e, 0 boleto
@Nome varchar(60),
@Email varchar(60) = null,
@Telefone varchar(16) = null
AS
BEGIN
	INSERT INTO ContatosClientes (CodCliente, CodContato, Nome, Email, Telefone)
	VALUES (@CodCliente, @CodContato, @Nome, @Email, @Telefone)
END
GO

CREATE PROCEDURE SP_Insert_CondicoesPagamentosClientes
@CodCliente int,
@Condicao1 int,
@Condicao2 int,
@Condicao3 int,
@Condicao4 int,
@Condicao5 int,
@Condicao6 int,
@Condicao7 int,
@Condicao8 int,
@Condicao9 int,
@Condicao10 int,
@Condicao11 int,
@Condicao12 int
AS
BEGIN
	delete from CondicoesPagamentosClientes WHERE CodCliente = @CodCliente
	
	INSERT INTO CondicoesPagamentosClientes (CodCliente, Condicao1, Condicao2, Condicao3, Condicao4, Condicao5, Condicao6,
	Condicao7, Condicao8, Condicao9, Condicao10, Condicao11, Condicao12)
	VALUES (@CodCliente, @Condicao1, @Condicao2, @Condicao3, @Condicao4, @Condicao5, @Condicao6,
	@Condicao7, @Condicao8, @Condicao9, @Condicao10, @Condicao11, @Condicao12)
END
GO

CREATE PROCEDURE SP_Delete_Cliente
@CodCliente int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier
AS
BEGIN
	If(exists(select top 1 CodCliente from NFes where CodCliente = @CodCliente))
	begin
		RAISERROR('ERRO001: Não foi possível excluir este cliente, pois há NFes ativos relacionadas a ele', 16, 1)
		return
	end
	UPDATE Clientes SET Excluido = 1 WHERE CodEmpresa = @CodEmpresa AND CodCliente = @CodCliente

	IF @@ROWCOUNT = 0
	begin
		RAISERROR('ERRO001: Operacao executada com sucesso, mas nenhum registro foi excluído', 16, 1)
		return
	end

	DECLARE @Registro varchar(700) = 'excluiu o cliente: ' + cast(@CodCliente as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 6
END
GO

CREATE PROCEDURE SP_BloqueiaCliente
@CodCliente int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier
AS
BEGIN
	UPDATE Clientes SET Bloqueado = 1 WHERE CodEmpresa = @CodEmpresa AND CodCliente = @CodCliente

	DECLARE @Registro varchar(700) = 'bloqueou o cliente: ' + cast(@CodCliente as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 6
END
GO

CREATE PROCEDURE SP_DesbloqueiaCliente
@CodCliente int,	
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier
AS
BEGIN
	UPDATE Clientes SET Bloqueado = 0 WHERE CodEmpresa = @CodEmpresa AND CodCliente = @CodCliente

	DECLARE @Registro varchar(700) = 'desbloqueou o cliente: ' + cast(@CodCliente as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 6
END
GO

CREATE PROCEDURE SP_Insert_Fornecedores
@CodFornecedor int output,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@Nome varchar(60),
@Telefone varchar(14) = null,
@TipoPessoa tinyint,
@CpfCnpjPassaporte varchar (18) = null,
@IE varchar(20) = null,
@EnviaNFEEmail bit,
@Observacoes varchar(500) = null
AS
BEGIN
	DECLARE @Tipo varchar(1)
	
	INSERT INTO Fornecedores (CodEmpresa, Nome, Telefone, CpfCnpj, TipoPessoa, IE, EnviaNFEEmail, Observacoes)
	VALUES (@CodEmpresa, @Nome, @Telefone, @CpfCnpjPassaporte, @TipoPessoa, @IE, @EnviaNFEEmail, @Observacoes)

	SET @CodFornecedor = SCOPE_IDENTITY()

	DECLARE @Registro varchar(700) = 'adicionou o fornecedor: ' + cast(@CodFornecedor as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 8
END
GO

CREATE PROCEDURE SP_Delete_EnderecosFornecedores
@CodFornecedor int
AS
BEGIN
	DELETE FROM EnderecosFornecedores WHERE CodFornecedor = @CodFornecedor
END
GO

CREATE PROCEDURE SP_Insert_EnderecosFornecedores
@CodFornecedor int,
@TipoEndereco bit, -- 1 nf-e, 0 boleto
@CEP varchar(9),
@Endereco varchar(60),
@Numero varchar(10),
@Complemento varchar(60) = null,
@Bairro varchar(60),
@CodCidade int
AS
BEGIN
	INSERT INTO EnderecosFornecedores (CodFornecedor, TipoEndereco, CEP, Endereco, Numero, Complemento, Bairro, CodCidade)
	VALUES (@CodFornecedor, @TipoEndereco, @CEP, @Endereco, @Numero, @Complemento, @Bairro, @CodCidade)
END
GO

CREATE PROCEDURE SP_Delete_ContatosFornecedores
@CodFornecedor int
AS
BEGIN
	DELETE FROM ContatosFornecedores WHERE CodFornecedor = @CodFornecedor
END
GO

CREATE PROCEDURE SP_Insert_ContatosFornecedores
@CodFornecedor int,
@CodContato tinyint, -- 1 nf-e, 0 boleto
@Nome varchar(60),
@Email varchar(60) = null,
@Telefone varchar(16) = null
AS
BEGIN
	INSERT INTO ContatosFornecedores (CodFornecedor, CodContato, Nome, Email, Telefone)
	VALUES (@CodFornecedor, @CodContato, @Nome, @Email, @Telefone)
END
GO

CREATE PROCEDURE SP_Insert_CondicoesPagamentosFornecedores
@CodFornecedor int,
@Condicao1 int,
@Condicao2 int,
@Condicao3 int,
@Condicao4 int,
@Condicao5 int,
@Condicao6 int,
@Condicao7 int,
@Condicao8 int,
@Condicao9 int,
@Condicao10 int,
@Condicao11 int,
@Condicao12 int
AS
BEGIN
	delete from CondicoesPagamentosFornecedores WHERE CodFornecedor = @CodFornecedor
	
	INSERT INTO CondicoesPagamentosFornecedores (CodFornecedor, Condicao1, Condicao2, Condicao3, Condicao4, Condicao5, Condicao6,
	Condicao7, Condicao8, Condicao9, Condicao10, Condicao11, Condicao12)
	VALUES (@CodFornecedor, @Condicao1, @Condicao2, @Condicao3, @Condicao4, @Condicao5, @Condicao6,
	@Condicao7, @Condicao8, @Condicao9, @Condicao10, @Condicao11, @Condicao12)
END
GO

CREATE PROCEDURE SP_Update_Fornecedores
@CodFornecedor int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@Nome varchar(60),
@Telefone varchar(14) = null,
@TipoPessoa tinyint,
@CpfCnpjPassaporte varchar (18) = null,
@IE varchar(20) = null,
@EnviaNFEEmail bit,
@Observacoes varchar(500) = null
AS
BEGIN
	UPDATE Fornecedores SET Nome = @Nome, CpfCnpj = @CpfCnpjPassaporte, TipoPessoa = @TipoPessoa, IE = @IE, 
	Telefone = @Telefone, EnviaNFEEmail = @EnviaNFEEmail, Observacoes = @Observacoes
	WHERE CodFornecedor = @CodFornecedor and CodEmpresa = @CodEmpresa

	DECLARE @Registro varchar(700) = 'alterou o fornecedor: ' + cast(@CodFornecedor as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 8
END
GO

CREATE PROCEDURE SP_Delete_Fornecedor
@CodFornecedor int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier
AS
BEGIN
    If(exists(select top 1 CodFornecedor from FornecedoresProdutos where CodFornecedor = @CodFornecedor))
	begin
		RAISERROR('ERRO001: Não foi possível excluir este fornecedor, pois há produto(s) ativos relacionados a ele', 16, 1)
		return
	end

	If(exists(select top 1 CodFornecedor from NFes where CodFornecedor = @CodFornecedor))
	begin
		RAISERROR('ERRO001: Não foi possível excluir este fornecedor, pois há NFes ativos relacionadas a ele', 16, 1)
		return
	end

	UPDATE Fornecedores SET Excluido = 1 WHERE CodEmpresa = @CodEmpresa AND CodFornecedor = @CodFornecedor

	IF @@ROWCOUNT = 0
	begin
		RAISERROR('ERRO001: Operacao executada com sucesso, mas nenhum registro foi excluído', 16, 1)
		return
	end

	DECLARE @Registro varchar(700) = 'excluiu o fornecedor: ' + cast(@CodFornecedor as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 8
END
GO

CREATE PROCEDURE SP_Insert_NCMsEmpresas
@CodNCM varchar(8),
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@InfosComplementares varchar(500),
@CEST varchar(7) = null,
@ClassificacaoFiscal varchar (3) = null,
@PorcentFCP decimal(5,2)
AS
BEGIN
	INSERT INTO NCMsEmpresas (CodEmpresa, CodNCM, InfosComplementares, CEST, ClassificacaoFiscal, PorcentFCP)
	VALUES (@CodEmpresa, @CodNCM, @InfosComplementares, @CEST, @ClassificacaoFiscal, @PorcentFCP)

	DECLARE @Registro varchar(700) = 'adicionou o NCM: ' + cast(@CodNCM as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 9
END
GO

CREATE PROCEDURE SP_Update_NCMsEmpresas
@CodNCM varchar(8),
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@InfosComplementares varchar(500),
@CEST varchar(7) = null,
@ClassificacaoFiscal varchar (3) = null,
@PorcentFCP decimal(5,2)
AS
BEGIN
	UPDATE NCMsEmpresas SET InfosComplementares = @InfosComplementares, CEST = @CEST, ClassificacaoFiscal = @ClassificacaoFiscal, PorcentFCP = @PorcentFCP
	WHERE CodNCM = @CodNCM AND CodEmpresa = @CodEmpresa

	DECLARE @Registro varchar(700) = 'alterou o NCM: ' + cast(@CodNCM as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 9
END
GO

CREATE PROCEDURE SP_Delete_NCMsEmpresas
@CodNCM varchar(8),
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier
AS
BEGIN
	IF(exists(select top 1 * from Produtos where CodNCM = @CodNCM and Excluido = 0))
	begin
		RAISERROR('ERRO001: Não é possível excluir este NCM, pois há produtos ativos relacionados a ele', 16, 1)
		return
	end

	DELETE FROM NCMsEmpresas WHERE CodNCM = @CodNCM AND CodEmpresa = @CodEmpresa

	IF @@ROWCOUNT = 0
	begin
		RAISERROR('ERRO001: Operacao executada com sucesso, mas nenhum registro foi excluído', 16, 1)
		return
	end

	DECLARE @Registro varchar(700) = 'excluiu o NCM: ' + cast(@CodNCM as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 9
END
GO

CREATE PROCEDURE SP_Insert_HistoricoReajustes
@CodProduto int,
@CodUsuario uniqueidentifier,
@LucroAtacado decimal(5, 2),
@ValorAtacado decimal(21, 10),
@LucroVarejo decimal(5, 2),
@ValorVarejo decimal(21, 10),
@CustoInicial decimal(21, 10),
@DemaisCustos decimal(5, 2),
@CustoFinal decimal(21, 10)
AS
BEGIN
	INSERT INTO HistoricoReajuste (CodProduto, CodUsuario, LucroAtacado, ValorAtacado, LucroVarejo, ValorVarejo, CustoInicial, DemaisCustos, CustoFinal, Data)
	VALUES (@CodProduto, @CodUsuario, @LucroAtacado, @ValorAtacado, @LucroVarejo, @ValorVarejo, @CustoInicial, @DemaisCustos, @CustoFinal, GETDATE())
END
GO

CREATE PROCEDURE SP_Insert_Produtos
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@CodProduto int output,
@CodInterno varchar(20),
@CodBarras varchar(14) = null,
@CodBalanca varchar(7) = null,
@Descricao varchar(120),
@CodGrupo int,
@CodNCM varchar(8),
@UnidComercial varchar(6),
@CoefUnidade int,
@QtdPacote smallint,
@CustoInicial decimal(21, 10),
@DemaisCustos decimal(5, 2),
@CustoFinal decimal(21, 10),
@LucroAtacado decimal(5, 2),
@ValorAtacado decimal(21, 10),
@LucroVarejo decimal(5, 2),
@ValorVarejo decimal(21, 10),
@PesoLiquido decimal(15, 3),
@PesoBruto decimal(15, 3),
@Fabricante varchar(60) = null,
@CodMarca int = null,
@TipoProduto varchar (1),
@Origem tinyint,
@FCI varchar(36) = null,
@DescontoMaximo decimal(5, 2),
@CodANP varchar(9) = null,
@DemandaMinima int,
@DemandaMaxima int,
@SaldoInicial decimal (12, 4),
@SaldoFinal decimal (12, 4),
@Localizacao varchar (250) = null,
@CEST varchar(7) = null,
@Observacoes varchar(750) = null,
@InfosComplementares varchar(500)= null
AS
BEGIN
	if(@CodMarca = 0)
		SET @CodMarca = null

	INSERT INTO Produtos (CodEmpresa, CodInterno, CodBarras, CodBalanca, Descricao, CodGrupo, CodNCM, UnidComercial, CoefUnidade, QtdPacote,
	CustoInicial, DemaisCustos, CustoFinal, LucroAtacado, ValorAtacado, LucroVarejo, ValorVarejo, PesoLiquido, PesoBruto, Fabricante, CodMarca,
	TipoProduto, Origem, FCI, DescontoMaximo, CodANP, DemandaMinima, DemandaMaxima, SaldoInicial,
	SaldoFinal, Localizacao, CEST, Observacoes, InfosComplementares) 
	values (@CodEmpresa, @CodInterno, @CodBarras, @CodBalanca, @Descricao, @CodGrupo, @CodNCM, @UnidComercial, @CoefUnidade, @QtdPacote,
	@CustoInicial, @DemaisCustos, @CustoFinal, @LucroAtacado, @ValorAtacado, @LucroVarejo, @ValorVarejo, @PesoLiquido, @PesoBruto, @Fabricante, @CodMarca,
	@TipoProduto, @Origem, @FCI, @DescontoMaximo, @CodANP, @DemandaMinima, @DemandaMaxima, @SaldoInicial,
	@SaldoFinal, @Localizacao, @CEST, @Observacoes, @InfosComplementares)

	SET @CodProduto = SCOPE_IDENTITY()

	EXEC SP_Insert_HistoricoReajustes @CodProduto, @CodUsuarioLogado, @LucroAtacado, @ValorAtacado, @LucroVarejo, @ValorVarejo, @CustoInicial, @DemaisCustos, @CustoFinal

	DECLARE @Registro varchar(700) = 'adicionou o produto: ' + cast(@CodProduto as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 10
END
GO

CREATE PROCEDURE SP_Insert_FornecedoresProdutos
@CodProduto int,
@CodFornecedor int
AS
BEGIN
	INSERT INTO FornecedoresProdutos (CodProduto, CodFornecedor) VALUES (@CodProduto, @CodFornecedor)
END
GO

CREATE PROCEDURE SP_Delete_FornecedoresProdutos
@CodProduto int
AS
BEGIN
	DELETE FROM FornecedoresProdutos WHERE CodProduto = @CodProduto
END
GO

CREATE PROCEDURE SP_Insert_PrecosProdutosClientes
@CodProduto int,
@CodCliente int,
@ValorVarejo decimal(21, 10),
@ValorAtacado decimal(21, 10)
AS
BEGIN
	INSERT INTO PrecosProdutosClientes (CodProduto, CodCliente, ValorVarejo, ValorAtacado)
	VALUES (@CodProduto, @CodCliente, @ValorVarejo, @ValorAtacado)
END
GO

CREATE PROCEDURE SP_Delete_PrecosProdutosClientes
@CodProduto int
AS
BEGIN
	DELETE FROM PrecosProdutosClientes WHERE CodProduto = @CodProduto
END
GO

CREATE PROCEDURE SP_Delete_Produtos
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@CodProduto int
AS
BEGIN
	If(exists(select top 1 CodProduto from ItensNFes where CodProduto = @CodProduto))
	begin
		RAISERROR('ERRO001: Não foi possível excluir este produto, pois há NFes ativos relacionadas a ele', 16, 1)
		return
	end

	UPDATE Produtos SET Excluido = 1 WHERE CodProduto = @CodProduto AND CodEmpresa = @CodEmpresa

	IF @@ROWCOUNT = 0
	begin
		RAISERROR('ERRO001: Operacao executada com sucesso, mas nenhum registro foi excluído', 16, 1)
		return
	end

	DECLARE @Registro varchar(700) = 'excluiu o produto: ' + cast(@CodProduto as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 10
END
GO

CREATE PROCEDURE SP_Update_Produtos
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@CodProduto int,
@CodInterno varchar(20),
@CodBarras varchar(14) = null,
@CodBalanca varchar(7) = null,
@Descricao varchar(120),
@CodGrupo int,
@CodNCM varchar(8),
@UnidComercial varchar(6),
@CoefUnidade int,
@QtdPacote smallint,
@CustoInicial decimal(21, 10),
@DemaisCustos decimal(5, 2),
@CustoFinal decimal(21, 10),
@LucroAtacado decimal(5, 2),
@ValorAtacado decimal(21, 10),
@LucroVarejo decimal(5, 2),
@ValorVarejo decimal(21, 10),
@PesoLiquido decimal(15, 3),
@PesoBruto decimal(15, 3),
@Fabricante varchar(60) = null,
@CodMarca int = null,
@TipoProduto varchar (1),
@Origem tinyint,
@FCI varchar(36) = null,
@DescontoMaximo decimal(5, 2),
@CodANP varchar(9) = null,
@DemandaMinima int,
@DemandaMaxima int,
@SaldoInicial decimal (12, 4),
@SaldoFinal decimal (12, 4),
@Localizacao varchar (250) = null,
@CEST varchar(7) = null,
@Observacoes varchar(750) = null,
@InfosComplementares varchar(500)= null
AS
BEGIN
	IF((select Trial from Empresas where CodEmpresa = @CodEmpresa) = 1)
	begin
		set @CodGrupo = (select top 1 CodGrupo from GruposProdutos where CodEmpresa = @CodEmpresa)
	end

	if(@CodMarca = 0)
		SET @CodMarca = null

	SELECT * INTO #temp FROM Produtos WHERE CodProduto = @CodProduto

	UPDATE Produtos SET CodInterno = @CodInterno, CodBarras = @CodBarras, CodBalanca = @CodBalanca, Descricao = @Descricao, CodGrupo = @CodGrupo,
	CodNCM = @CodNCM, UnidComercial = @UnidComercial, CoefUnidade = @CoefUnidade, QtdPacote = @QtdPacote, CustoInicial = @CustoInicial,
	DemaisCustos = @DemaisCustos, CustoFinal = @CustoFinal, LucroAtacado = @LucroAtacado, ValorAtacado = @ValorAtacado, LucroVarejo = @LucroVarejo, 
	ValorVarejo = @ValorVarejo, PesoLiquido = @PesoLiquido, Fabricante = @Fabricante, CodMarca = @CodMarca, TipoProduto = @TipoProduto, Origem = @Origem, 
	FCI = @FCI, DescontoMaximo = @DescontoMaximo, CodANP = @CodANP, DemandaMinima = @DemandaMinima, DemandaMaxima = @DemandaMaxima,
	SaldoInicial = @SaldoInicial, SaldoFinal = @SaldoFinal, Localizacao = @Localizacao, CEST = @CEST, Observacoes = @Observacoes, InfosComplementares = @InfosComplementares
	WHERE CodProduto = @CodProduto AND CodEmpresa = @CodEmpresa

	IF (
		   (@LucroAtacado != (select LucroAtacado from #temp)) or (@ValorAtacado != (select ValorAtacado from #temp)) or (@LucroVarejo != (select LucroVarejo from #temp))
		   or (@ValorVarejo != (select ValorVarejo from #temp)) or (@CustoInicial != (select CustoInicial from #temp)) or (@DemaisCustos != (select DemaisCustos from #temp))
		)
	BEGIN
		EXEC SP_Insert_HistoricoReajustes @CodProduto, @CodUsuarioLogado, @LucroAtacado, @ValorAtacado, @LucroVarejo, @ValorVarejo, @CustoInicial, @DemaisCustos, @CustoFinal
	END

	DECLARE @Registro varchar(700) = 'alterou o produto: ' + cast(@CodProduto as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 10
END
GO

CREATE PROCEDURE SP_InativaProduto
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@CodProduto int
AS
BEGIN
	UPDATE Produtos SET Inativo = 1 WHERE CodProduto = @CodProduto AND CodEmpresa = @CodEmpresa

	IF @@ROWCOUNT = 0
	begin
		RAISERROR('ERRO001: Operacao executada com sucesso, mas nenhum registro foi alterado', 16, 1)
		return
	end

	DECLARE @Registro varchar(700) = 'inativou o produto: ' + cast(@CodProduto as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 10
END
GO

CREATE PROCEDURE SP_AtivaProduto
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@CodProduto int
AS
BEGIN
	UPDATE Produtos SET Inativo = 0 WHERE CodProduto = @CodProduto AND CodEmpresa = @CodEmpresa

	IF @@ROWCOUNT = 0
	begin
		RAISERROR('ERRO001: Operacao executada com sucesso, mas nenhum registro foi alterado', 16, 1)
		return
	end

	DECLARE @Registro varchar(700) = 'reativou o produto: ' + cast(@CodProduto as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 10
END
GO

CREATE PROCEDURE SP_AtualizaRegrasTributacoesParametros
@CodEmpresa int,
@TipoEmpresa tinyint
AS
BEGIN
    declare @CodProdutoICMS int
	set  @CodProdutoICMS = (select CodProduto from Produtos where CodEmpresa = @CodEmpresa and CodInterno = 'COMP.ICMS')

    declare @CodProdutoIPI int
	set  @CodProdutoIPI = (select CodProduto from Produtos where CodEmpresa = @CodEmpresa and CodInterno = 'COMP.IPI')

    declare @CodProdutoICMSST int
	set  @CodProdutoICMSST = (select CodProduto from Produtos where CodEmpresa = @CodEmpresa and CodInterno = 'COMP.ICMSST')

    declare @CodProdutoCREDITOICMS int
	set  @CodProdutoCREDITOICMS = (select CodProduto from Produtos where CodEmpresa = @CodEmpresa and CodInterno = 'COMP.CREDITOICMS')

    delete from RegrasTributacoes where CodEmpresa = @CodEmpresa AND CodProduto = @CodProdutoICMS
	delete from RegrasTributacoes where CodEmpresa = @CodEmpresa AND CodProduto = @CodProdutoIPI
	delete from RegrasTributacoes where CodEmpresa = @CodEmpresa AND CodProduto =  @CodProdutoICMSST
	delete from RegrasTributacoes where CodEmpresa = @CodEmpresa AND CodProduto = @CodProdutoCREDITOICMS

    IF (@TipoEmpresa != 3)
		 INSERT INTO RegrasTributacoes 
		 (CodEmpresa, CodProduto,         ForcaCFOPs, CalculaIPI, PorcentIPI, AgregaFreteIPI, CSTIPI,   CalculaICMS, CalculaReducICMS, PorcentReducICMS, ICMSDiferido, CalculaCredICMS, PorcentCredICMS, AgregaDespesas, CSOSN, CalculaPIS, PorcentPIS, CSTPIS, CalculaCOFINS, PorcentCOFINS, CSTCOFINS, SubstTributaria, SubstTributariaRetida)
		 VALUES 
		 (@CodEmpresa, @CodProdutoICMS,        0,         0,		  0,		     0,			52, 		  1,			  0,				0,			   0,			   0,			     0,			     0,			0,		  0,			0,		 7,			0,			0,			7,			  0,				  0),
		 (@CodEmpresa, @CodProdutoIPI,         0,         0,		  0,			 0,			50,			  0,			  0,				0,			   0,			   0,			     0,			     0,			0,		  0,			0,		 99,		0,			0,			99,			  0,				  0),
		 (@CodEmpresa, @CodProdutoICMSST,      0,		  0,		  0,			 0,			52,			  1,			  0,				0,			   0,			   0,			     0,			     0,			30,		  0,			0,		 7,			0,			0,			7,			  0,				  0),
		 (@CodEmpresa, @CodProdutoCREDITOICMS, 0,		  0,		  0,			 0,			53,			  1,			  0,				0,			   0,			   0,			     0,			     0,			0,		  0,			0,		 7,			0,			0,			7,			  0,				  0)
    ELSE
	     INSERT INTO RegrasTributacoes 
		 (CodEmpresa, CodProduto,         ForcaCFOPs, CalculaIPI, PorcentIPI, AgregaFreteIPI, CSTIPI, CalculaICMS, CalculaReducICMS, PorcentReducICMS, ICMSDiferido, CalculaCredICMS, PorcentCredICMS, AgregaDespesas, CSOSN, CalculaPIS, PorcentPIS, CSTPIS, CalculaCOFINS, PorcentCOFINS, CSTCOFINS, SubstTributaria, SubstTributariaRetida)
		 VALUES 
		 (@CodEmpresa, @CodProdutoICMS,        0,		  0,		  0,			 0,			55,			   1,			  0,				0,			   0,			   0,			     0,			     0,			900,	  0,			0,		 7,		    0,			0,			7,			  0,				  0),
		 (@CodEmpresa, @CodProdutoIPI,		   0,         0,		  0,			 0,			50,			   0,			  0,				0,			   0,			   0,			     0,			     0,			900,	  0,			0,		 99,		0,			0,			99,			  0,				  0),
		 (@CodEmpresa, @CodProdutoICMSST,	   0,         0,		  0,			 0,			55,			   1,			  0,				0,			   0,			   0,			     0,			     0,			900,	  0,			0,		 7,			0,			0,			7,			  0,				  0),
		 (@CodEmpresa, @CodProdutoCREDITOICMS, 0,         0,		  0,			 0,			53,			   1,			  0,				0,			   0,			   0,			     0,			     0,			900,	  0,			0,		 7,			0,			0,			7,			  0,				  0)
END
GO

CREATE PROCEDURE SP_AtualizaParametros
@CodEmpresa int,
@TipoEmpresa tinyint,
@AmbienteNFE tinyint,
@AmbienteNFSE tinyint,
@TipoEmissao tinyint,
@Atividade tinyint,
@QtdCasasDecimais int,
@ObrigaEnvioSequencia bit,
@LimiteNFePendentes tinyint,
@PendenciaCliente bit,
@LimiteItensNFE smallint,
@FretePadrao tinyint,
@IncluiTagDuplicata bit,
@MsgCorpoNFe varchar(2000) = null,
@MsgCorpoReducaoICMS varchar(2000) = null,
@MsgCorpoCreditoICMS varchar(2000) = null,
@Especie varchar (60),
@MarcaVolume varchar (60) = null,
@NumeroVolume varchar(60) = null,
@UnidPadrao varchar(6)  = null,
@CodCFOP varchar(4) = null,
@CalculaPartilha bit,
@PartilhaOrigem decimal (10, 2),
@PartilhaDestino decimal (10, 2),
@TipoTributacaoNFSe tinyint,
@ExigibilidadeISSNFSe tinyint,
@NaturezaTributacaoNFSe tinyint,
@RegimeEspecialTributacaoNFSe tinyint,
@IncentivoFiscal bit,
@IncentivadorCultural bit,
@INSSNFSe decimal (10, 2),
@CSLLNFSe decimal (10, 2),
@PISNFSe decimal (10, 2),
@COFINSNFSe decimal (10, 2),
@IRNFSe decimal (10, 2),
@OperacaoNFSe varchar(1) = null,
@CodCidadeNFSe int,
@ConstrucaoCivil bit,
@DescontoCondicionado bit
AS
BEGIN
	UPDATE ParametrosEmpresas SET TipoEmpresa = @TipoEmpresa, AmbienteNFE = @AmbienteNFE, AmbienteNFSE = @AmbienteNFSE,
	TipoEmissao = @TipoEmissao, Atividade = @Atividade, QtdCasasDecimais = @QtdCasasDecimais,
	ObrigaEnvioSequencia = @ObrigaEnvioSequencia, LimiteNFePendentes = @LimiteNFePendentes, PendenciaCliente = @PendenciaCliente, 
	LimiteItensNFE = @LimiteItensNFE, FretePadrao = @FretePadrao, IncluiTagDuplicata = @IncluiTagDuplicata, 
	MsgCorpoReducaoICMS = @MsgCorpoReducaoICMS,MsgCorpoCreditoICMS = @MsgCorpoCreditoICMS,MsgCorpoNFe = @MsgCorpoNFe, Especie = @Especie, MarcaVolume = @MarcaVolume, NumeroVolume = @NumeroVolume, UnidPadrao = @UnidPadrao, 
	CodCFOP = @CodCFOP, CalculaPartilha = @CalculaPartilha, PartilhaOrigem = @PartilhaOrigem, PartilhaDestino = @PartilhaDestino, IncentivadorCultural = @IncentivadorCultural, IncentivoFiscal = @IncentivoFiscal,
	RegimeEspecialTributacaoNFSe = @RegimeEspecialTributacaoNFSe, NaturezaTributacaoNFSe = @NaturezaTributacaoNFSe, ExigibilidadeISSNFSe = @ExigibilidadeISSNFSe, TipoTributacaoNFSe = @TipoTributacaoNFSe,
	INSSNFSe = @INSSNFSe, CSLLNFSe = @CSLLNFSe, PISNFSe = @PISNFSe, COFINSNFSe = @COFINSNFSe, IRNFSe = @IRNFSe, OperacaoNFSe = @OperacaoNFSe, CodCidadeNFSe = @CodCidadeNFSe,
	ConstrucaoCivil = @ConstrucaoCivil, DescontoCondicionado = @DescontoCondicionado
	WHERE CodEmpresa = @CodEmpresa
END
GO

CREATE PROCEDURE SP_AtualizaParametrosNFe
@CodEmpresa int,
@Ambiente tinyint,
@TipoEmissao tinyint,
@Atividade tinyint,
@LimiteNFePendentes tinyint,
@LimiteItensNFE smallint,
@PendenciaCliente bit,	
@ObrigaEnvioSequencia bit,
@FretePadrao tinyint,
@IncluiTagDuplicata bit,
@DesabilitaIPIZerado bit,
@MsgCorpoNFe varchar(2000) = null,
@MsgCorpoReducaoICMS varchar(2000) = null,
@MsgCorpoCreditoICMS varchar(2000) = null,
@Especie varchar (40),
@MarcaVolume varchar (60) = null,
@NumeroVolume varchar(60) = null,
@UnidPadrao varchar(6),
@CodCFOP varchar(4),
@CalculaPartilha bit,
@PartilhaOrigem decimal (10, 2),
@PartilhaDestino decimal (10, 2)
AS
BEGIN
	INSERT INTO ParametrosNFE (
		CodEmpresa, Ambiente, TipoEmissao, Atividade, LimiteNFePendentes, LimiteItensNFE, PendenciaCliente, ObrigaEnvioSequencia,
		FretePadrao, IncluiTagDuplicata, DesabilitaIPIZerado, MsgCorpoNFe, MsgCorpoReducaoICMS, MsgCorpoCreditoICMS, Especie,
		MarcaVolume, NumeroVolume, UnidPadrao, CodCFOP, CalculaPartilha, PartilhaOrigem, PartilhaDestino
	)
	VALUES (
		@CodEmpresa, @Ambiente, @TipoEmissao, @Atividade, @LimiteNFePendentes, @LimiteItensNFE, @PendenciaCliente, @ObrigaEnvioSequencia,
		@FretePadrao, @IncluiTagDuplicata, @DesabilitaIPIZerado, @MsgCorpoNFe, @MsgCorpoReducaoICMS, @MsgCorpoCreditoICMS, @Especie,
		@MarcaVolume, @NumeroVolume, @UnidPadrao, @CodCFOP, @CalculaPartilha, @PartilhaOrigem, @PartilhaDestino
	)
END
GO

CREATE PROCEDURE SP_CadastraSerieNFE
@CodEmpresa int,
@Serie varchar (3),
@CodProximaNFE int,
@CodProximaNFEHomologacao int
AS
BEGIN
	INSERT INTO SeriesNFE (CodEmpresa, Serie, CodProximaNFE, CodProximaNFEHomologacao)
	VALUES (@CodEmpresa, @Serie, @CodProximaNFE, @CodProximaNFEHomologacao)
END
GO

CREATE PROCEDURE SP_AtualizaSerieNFE
@CodEmpresa int,
@Serie varchar (3),
@CodProximaNFE int,
@CodProximaNFEHomologacao int
AS
BEGIN
	UPDATE SeriesNFE SET CodProximaNFE = @CodProximaNFE, CodProximaNFEHomologacao = @CodProximaNFEHomologacao
	WHERE CodEmpresa = @CodEmpresa and Serie = @Serie
END
GO

CREATE PROCEDURE SP_DeletaSerieNFE
@CodEmpresa int,
@Serie varchar (3)
AS
BEGIN
	IF (exists(select top 1 CodNFE from NFes where Serie = @Serie))
	begin
		RAISERROR('ERRO001: Não é possível excluir esta série, pois há notas criadas para ela', 16, 1)
		return
	end
	
	DELETE FROM SeriesNFE WHERE CodEmpresa = @CodEmpresa and Serie = @Serie
END
GO

CREATE PROCEDURE SP_CadastraRPS
@CodEmpresa int,
@Serie varchar (3),
@CodProximaRPS int,
@CodProximaRPSHomologacao int
AS
BEGIN
	INSERT INTO SeriesRPS (CodEmpresa, Serie, CodProximaRPS, CodProximaRPSHomologacao)
	VALUES (@CodEmpresa, @Serie, @CodProximaRPS, @CodProximaRPSHomologacao)
END
GO

CREATE PROCEDURE SP_AtualizaRPS
@CodEmpresa int,
@Serie varchar (3),
@CodProximaRPS int,
@CodProximaRPSHomologacao int
AS
BEGIN
	UPDATE SeriesRPS SET CodProximaRPS = @CodProximaRPS, CodProximaRPSHomologacao = @CodProximaRPSHomologacao
	WHERE CodEmpresa = @CodEmpresa and Serie = @Serie
END
GO

CREATE PROCEDURE SP_DeletaRPS
@CodEmpresa int,
@Serie varchar (3)
AS
BEGIN
	--IF (exists(select top 1 CodNFE from NFes where Serie = @Serie))
	--begin
	--	RAISERROR('ERRO001: Não é possível excluir esta série, pois há notas criadas para ela', 16, 1)
	--	return
	--end
	
	DELETE FROM SeriesRPS WHERE CodEmpresa = @CodEmpresa and Serie = @Serie
END
GO

CREATE PROCEDURE SP_Insert_RegrasTributacoes
@CodRegra int output,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@Descricao varchar(50) = null,
@CodCFOP varchar(4) = null,
@CodNCM varchar(8) = null,
@CodProduto int = null,
@ForcaCFOPs tinyint,
@CalculaIPI bit,
@PorcentIPI decimal (5, 2),
@CodEnquadramento varchar (3) = null,
@AgregaFreteIPI bit,
@CSTIPI smallint = null,
@CalculaICMS bit,
@CalculaReducICMS bit,
@PorcentReducICMS decimal (5, 2),
@ICMSDiferido bit,
@CalculaCredICMS bit,
@PorcentCredICMS decimal (5, 2),
@AgregaDespesas bit,
@CSTICMS smallint = null,
@CSOSN smallint,
@CalculaPIS bit,
@PorcentPIS decimal (5, 2),
@CSTPIS smallint = null,
@CalculaCOFINS bit,
@PorcentCOFINS decimal (5, 2),
@CSTCOFINS smallint = null,
@SubstTributaria bit,
@SubstTributariaRetida bit,
@InfosComplementares varchar (5000) = null
AS
BEGIN
	INSERT INTO RegrasTributacoes (CodEmpresa, CodCFOP, Descricao, CodNCM, CodProduto, ForcaCFOPs, CalculaIPI, PorcentIPI,
	CodEnquadramento, AgregaFreteIPI, CSTIPI, CalculaICMS, CalculaReducICMS, PorcentReducICMS, ICMSDiferido, CalculaCredICMS,
	PorcentCredICMS, AgregaDespesas, CSTICMS, CSOSN, CalculaPIS, PorcentPIS, CSTPIS, CalculaCOFINS, PorcentCOFINS, CSTCOFINS, SubstTributaria,
	SubstTributariaRetida, InfosComplementares) VALUES
	(@CodEmpresa, @CodCFOP, @Descricao, @CodNCM, @CodProduto, @ForcaCFOPs, @CalculaIPI, @PorcentIPI,
	@CodEnquadramento, @AgregaFreteIPI, @CSTIPI, @CalculaICMS, @CalculaReducICMS, @PorcentReducICMS, @ICMSDiferido, @CalculaCredICMS,
	@PorcentCredICMS, @AgregaDespesas, @CSTICMS, @CSOSN, @CalculaPIS, @PorcentPIS, @CSTPIS, @CalculaCOFINS, @PorcentCOFINS, @CSTCOFINS, @SubstTributaria,
	@SubstTributariaRetida, @InfosComplementares)
	
	SET @CodRegra = SCOPE_IDENTITY()
END
GO

CREATE PROCEDURE SP_Update_RegrasTributacoes
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@Descricao varchar(50) = null,
@CodRegra int,
@CodCFOP varchar(4) = null,
@CodNCM varchar(8) = null,
@CodProduto int = null,
@ForcaCFOPs tinyint,
@CalculaIPI bit,
@PorcentIPI decimal (5, 2),
@CodEnquadramento varchar (3) = null,
@AgregaFreteIPI bit,
@CSTIPI smallint = null,
@CalculaICMS bit,
@CalculaReducICMS bit,
@PorcentReducICMS decimal (5, 2),
@ICMSDiferido bit,
@CalculaCredICMS bit,
@PorcentCredICMS decimal (5, 2),
@AgregaDespesas bit,
@CSTICMS smallint = null,
@CSOSN smallint,
@CalculaPIS bit,
@PorcentPIS decimal (5, 2),
@CSTPIS smallint = null,
@CalculaCOFINS bit,
@PorcentCOFINS decimal (5, 2),
@CSTCOFINS smallint = null,
@SubstTributaria bit,
@SubstTributariaRetida bit,
@InfosComplementares varchar (5000) = null
AS
BEGIN
	UPDATE RegrasTributacoes SET Descricao = @Descricao, CodCFOP = @CodCFOP, CodNCM = @CodNCM, CodProduto = @CodProduto, ForcaCFOPs = @ForcaCFOPs, 
	CalculaIPI = @CalculaIPI, PorcentIPI = @PorcentIPI, CodEnquadramento = @CodEnquadramento, AgregaFreteIPI = @AgregaFreteIPI, CSTIPI = @CSTIPI, CalculaICMS = @CalculaICMS,
	CalculaReducICMS = @CalculaReducICMS, PorcentReducICMS = @PorcentReducICMS,
	ICMSDiferido = @ICMSDiferido, CalculaCredICMS = @CalculaCredICMS, PorcentCredICMS = @PorcentCredICMS, AgregaDespesas = @AgregaDespesas,
	CSTICMS = @CSTICMS, CSOSN = @CSOSN, CalculaPIS = @CalculaPIS, PorcentPIS = @PorcentPIS, CSTPIS = @CSTPIS, CalculaCOFINS = @CalculaCOFINS, PorcentCOFINS = @PorcentCOFINS,
	CSTCOFINS = @CSTCOFINS, SubstTributaria = @SubstTributaria, SubstTributariaRetida = @SubstTributariaRetida, InfosComplementares = @InfosComplementares
	WHERE CodRegra = @CodRegra AND CodEmpresa = @CodEmpresa
END
GO

CREATE PROCEDURE SP_Delete_RegrasTributacoes
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@CodRegra int
AS
BEGIN
	UPDATE RegrasTributacoes SET Excluido = 1 WHERE CodRegra = @CodRegra AND CodEmpresa = @CodEmpresa
	
	IF @@ROWCOUNT = 0
	begin
		RAISERROR('ERRO001: Operacao executada com sucesso, mas nenhum registro foi excluído', 16, 1)
		return
	end
END
GO

CREATE PROCEDURE SP_Insert_PorcentagemEstados
@CodRegra int,
@CodEstado int,
@IVA decimal (5,2),
@ICMSOP decimal (5,2)
AS
BEGIN
	INSERT INTO PorcentagemEstados (CodRegra, CodEstado, IVA, ICMSOP)
	VALUES (@CodRegra, @CodEstado, @IVA, @ICMSOP)
END
GO

CREATE PROCEDURE SP_Delete_PorcentagemEstados
@CodRegra int
AS
BEGIN
	DELETE FROM PorcentagemEstados WHERE CodRegra = @CodRegra
END
GO

CREATE PROCEDURE SP_Insert_NFes
@CodNFE int, @Serie varchar(3), @CodEmpresa int, @CodUsuarioLogado uniqueidentifier, @CodCFOP varchar(4),
@DtSaida datetime, @Transporte tinyint, @TipoNFE tinyint, @CodCliente int = null, @CodFornecedor int = null, 
@CodUFEmbarque int = null, @LocalEmbarque varchar (60) = null, @CodTransportadora int = null,
@CalculaICMS bit, @ICMS decimal (5,2) = null, @CalculaIPI bit, @IPI decimal (5,2) = null, @AproveitaCreditoICMS bit, @CreditoICMS decimal (5,2),
@TipoRef tinyint, @ChaveRef varchar (44) = null, @BCRef decimal (10,2) = null, @ValorRef decimal (10,2) = null, @ValorCredICMSRef decimal (10,2) = null,
@ECFRef varchar(3) = null, @COORef varchar(6) = null, @InfosComplementares varchar (5000) = null, @Especie varchar (60), 
@QtdVolume int, @MarcaVolume varchar (60) = null, @NumeroVolume varchar(60) = null, @Lacres varchar (60) = null, @TipoFrete int, @Placa varchar(8) = null, @InfosComplementaresFisco varchar(2000) = null
AS
BEGIN
	--Verificando se o destinatário é consumidor final--
	DECLARE @ConsumidorFinal bit

	IF(@CodCliente > 0)
	BEGIN
		IF ((select IE from Clientes where CodCliente = @CodCliente) is null)
			SET @ConsumidorFinal = 1
		ELSE
			SET @ConsumidorFinal = 0
	END
	ELSE
	BEGIN
		IF ((select IE from Fornecedores where CodFornecedor = @CodFornecedor) is null)
			SET @ConsumidorFinal = 1
		ELSE
			SET @ConsumidorFinal = 0
	END
	---------------------------------------------------

	DECLARE @Ambiente tinyint
	SET @Ambiente = (select Ambiente from ParametrosNFE where CodEmpresa = @CodEmpresa)

	INSERT INTO NFes (
		CodNFE, Serie, CodEmpresa, CodCFOP, Ambiente, DtSaida, Transporte, TipoNFE, CodCliente, 
		CodFornecedor, CodUFEmbarque, LocalEmbarque, CodTransportadora, CalculaICMS, ICMS, CalculaIPI, IPI, AproveitaCreditoICMS, 
		CreditoICMS, TipoRef, ChaveRef, BCRef, ValorRef, ValorCredICMSRef, ECFRef, COORef, InfosComplementares, Especie,
		QtdVolume, MarcaVolume, NumeroVolume, Lacres, TipoFrete, Placa, CodSituacao, ConsumidorFinal, ValorTotalProdutos, ValorFinal, InfosComplementaresFisco
	) VALUES (
		@CodNFE, @Serie, @CodEmpresa, @CodCFOP, @Ambiente, @DtSaida, @Transporte, @TipoNFE, @CodCliente,
		@CodFornecedor, @CodUFEmbarque, @LocalEmbarque, @CodTransportadora, @CalculaICMS, @ICMS, @CalculaIPI, @IPI, @AproveitaCreditoICMS,
		@CreditoICMS, @TipoRef, @ChaveRef, @BCRef, @ValorRef, @ValorCredICMSRef, @ECFRef, @COORef, @InfosComplementares, @Especie,
		@QtdVolume, @MarcaVolume, @NumeroVolume, @Lacres, @TipoFrete, @Placa, 1, @ConsumidorFinal, 0, 0, @InfosComplementaresFisco
	)

	INSERT INTO HistoricoNFE VALUES (@CodNFE, @Serie, @CodEmpresa, 1, @CodUsuarioLogado, GETDATE())
END
GO

CREATE PROCEDURE SP_Update_NFes
@CodNFE int, @Serie varchar(3), @CodEmpresa int, @CodUsuarioLogado uniqueidentifier, @CodCFOP varchar(4),
@DtSaida datetime, @Transporte tinyint, @TipoNFE tinyint, @CodCliente int = null, @CodFornecedor int = null,
@CodUFEmbarque int = null, @LocalEmbarque varchar (60) = null, @CodTransportadora int = null,
@CalculaICMS bit, @ICMS decimal (5,2) = null, @CalculaIPI bit, @IPI decimal (5,2) = null, @AproveitaCreditoICMS bit, @CreditoICMS decimal (5,2),
@TipoRef tinyint, @ChaveRef varchar (44) = null, @BCRef decimal (10,2) = null, @ValorRef decimal (10,2) = null, @ValorCredICMSRef decimal (10,2) = null, 
@ECFRef varchar(3) = null, @COORef varchar(6) = null, @InfosComplementares varchar (5000) = null, @Especie varchar (60), 
@QtdVolume int, @MarcaVolume varchar (60) = null, @NumeroVolume varchar(60) = null, @Lacres varchar (60) = null, @TipoFrete int, @Placa varchar(8) = null, 
@InfosComplementaresFisco varchar(2000) = null
AS
BEGIN
	--Verificando se o destinatário é consumidor final--
	DECLARE @ConsumidorFinal bit

	IF(@CodCliente > 0)
	BEGIN
		IF ((select IE from Clientes where CodCliente = @CodCliente) is null)
			SET @ConsumidorFinal = 1
		ELSE
			SET @ConsumidorFinal = 0
	END
	ELSE
	BEGIN
		IF ((select IE from Fornecedores where CodFornecedor = @CodFornecedor) is null)
			SET @ConsumidorFinal = 1
		ELSE
			SET @ConsumidorFinal = 0
	END
	---------------------------------------------------

	UPDATE NFes SET CodCFOP = @CodCFOP, DtSaida = @DtSaida, Transporte = @Transporte, TipoNFE = @TipoNFE, CodCliente = @CodCliente,
	CodFornecedor = @CodFornecedor, CodUFEmbarque = @CodUFEmbarque, LocalEmbarque = @LocalEmbarque, CodTransportadora = @CodTransportadora, 
	CalculaICMS = @CalculaICMS, ICMS = @ICMS, CalculaIPI = @CalculaIPI, IPI = @IPI, AproveitaCreditoICMS = @AproveitaCreditoICMS, 
	CreditoICMS = @CreditoICMS, TipoRef = @TipoRef, ChaveRef = @ChaveRef, BCRef = @BCRef, ValorRef = @ValorRef, ValorCredICMSRef = @ValorCredICMSRef, 
	ECFRef = @ECFRef, COORef = @COORef, InfosComplementares = @InfosComplementares, Especie = @Especie, QtdVolume = @QtdVolume, MarcaVolume = @MarcaVolume, 
	NumeroVolume = @NumeroVolume, Lacres = @Lacres, TipoFrete = @TipoFrete, Placa = @Placa, ConsumidorFinal = @ConsumidorFinal, InfosComplementaresFisco = @InfosComplementaresFisco
	WHERE CodNFE = @CodNFE and Serie = @Serie and CodEmpresa = @CodEmpresa
END
GO

CREATE PROCEDURE SP_Insert_ItensNFe
@CodNFE int, @Serie varchar(3), @CodEmpresa int, @CodProduto int, @Descricao varchar(120), @TipoPreco tinyint, @ValorUnit decimal (21, 10), @Qtd decimal (21, 10),
@ValorTotal decimal (21, 10), @ValorFrete decimal (21, 10), @ValorDesconto decimal (21, 10), @PorcentDesconto decimal (21, 10),
@ValorSeguro decimal (21, 10), @Despesas decimal (21, 10), @Unidade varchar(6), @CoefUnid int, @PesoBruto decimal (21, 10),
@PesoLiquido decimal (21, 10), @InfosAdicionais varchar (500) = null, @PorcentIPI decimal (7, 4), @PorcentICMS decimal (7, 4), @PorcentICMSInterno decimal (7, 4), 
@ReducICMS decimal (7, 4), @PorcentCredICMS decimal (7, 4), @IVA decimal (7, 4), @ICMSOP decimal (7, 4), @RedST decimal (7, 4),
@PorcentPIS decimal (7, 4), @PorcentCOFINS decimal (7, 4), @BaseCalcIPI decimal (10, 4), @ValorIPI decimal (10, 4), @BaseCalcICMS decimal (10, 4), 
@ValorICMS decimal (10, 4), @ValorCredICMS decimal (10, 4), @BaseCalcICMSST decimal (10, 4), @ValorST decimal (10, 4),
@ValorPIS decimal (10, 4), @ValorCOFINS decimal (10, 4), @Origem tinyint, @CodNCM varchar(8), @CodCFOP varchar (4), @SomaFatura bit,
@CompoeValorTotal bit, @ConsumoProprio bit, @CSTICMS int, @CSTIPI tinyint, @CSTPIS tinyint, @CSTCOFINS tinyint, @EnquadIPI varchar(3) = null,
@Pedido varchar (15) = null, @SeqItemPedido varchar (6) = null, @NrAdicao int, @SeqAdicao int, @ValorDescontoItem decimal(21, 10), 
@BaseCalcImport decimal(21, 10), @PorcentImport decimal(7, 4), @ValorImport decimal(21, 10), @VlrAdicional decimal (10,2), @Siscomex decimal (8,2),
@DrawBack varchar (11) = null, @RE varchar(12) = null, @ChaveExportacao varchar(44) = null, @QtdExportado decimal (11,4),
@CodANP varchar (9) = null, @CodIF varchar (21) = null, @QTemp decimal (10, 2), @CodEstado int = null, @QtdadeBCCombus decimal (10, 2),
@VlrAliquotaCombus decimal (10, 2), @ValorCombus decimal (10, 2), @VlrAliqNacional decimal (10, 2), @VlrAliqEstadual decimal (10, 2), @CEST varchar(7) = null,
@DescontoSuframa decimal (21, 10), @VlrICMSRemetente decimal (10, 2), @VlrICMSDestinatario decimal (10, 2)
AS
BEGIN
	INSERT INTO ItensNFes (
		CodNFE, Serie, CodEmpresa, CodProduto, Descricao, TipoPreco, ValorUnit, Qtd, ValorTotal, ValorFrete, ValorDesconto, PorcentDesconto,
		ValorSeguro, Despesas, Unidade, CoefUnid, PesoBruto, PesoLiquido, InfosAdicionais, PorcentIPI, PorcentICMS, PorcentICMSInterno, 
		ReducICMS, PorcentCredICMS, IVA, ICMSOP, RedST, PorcentPIS, PorcentCOFINS, BaseCalcIPI, ValorIPI, BaseCalcICMS, 
		ValorICMS, ValorCredICMS, BaseCalcICMSST, ValorST, ValorPIS, ValorCOFINS, Origem, CodNCM, CodCFOP, SomaFatura,
		CompoeValorTotal, ConsumoProprio, CSTICMS, CSTIPI, CSTPIS, CSTCOFINS, EnquadIPI, Pedido, SeqItemPedido,
		NrAdicao, SeqAdicao, ValorDescontoItem, BaseCalcImport, PorcentImport, ValorImport, VlrAdicional, Siscomex, DrawBack, RE,
		ChaveExportacao, QtdExportado, CodANP, CodIF, QTemp, CodEstado, QtdadeBCCombus, VlrAliquotaCombus, ValorCombus, VlrAliqNacional, VlrAliqEstadual,
		CEST,DescontoSuframa,VlrICMSRemetente,VlrICMSDestinatario
	) VALUES (
		@CodNFE, @Serie, @CodEmpresa, @CodProduto, @Descricao, @TipoPreco, @ValorUnit, @Qtd, @ValorTotal, @ValorFrete, @ValorDesconto, @PorcentDesconto,
		@ValorSeguro, @Despesas, @Unidade, @CoefUnid, @PesoBruto, @PesoLiquido, @InfosAdicionais, @PorcentIPI, @PorcentICMS, @PorcentICMSInterno, 
		@ReducICMS, @PorcentCredICMS, @IVA, @ICMSOP, @RedST, @PorcentPIS, @PorcentCOFINS, @BaseCalcIPI, @ValorIPI, @BaseCalcICMS, 
		@ValorICMS, @ValorCredICMS, @BaseCalcICMSST, @ValorST, @ValorPIS, @ValorCOFINS, @Origem, @CodNCM, @CodCFOP, @SomaFatura,
		@CompoeValorTotal, @ConsumoProprio, @CSTICMS, @CSTIPI, @CSTPIS, @CSTCOFINS, @EnquadIPI, @Pedido, @SeqItemPedido,
		@NrAdicao, @SeqAdicao, @ValorDescontoItem, @BaseCalcImport, @PorcentImport, @ValorImport, @VlrAdicional, @Siscomex, @DrawBack, @RE,
		@ChaveExportacao, @QtdExportado, @CodANP, @CodIF, @QTemp, @CodEstado, @QtdadeBCCombus, @VlrAliquotaCombus, @ValorCombus,
		@VlrAliqNacional, @VlrAliqEstadual, @CEST, @DescontoSuframa,@VlrICMSRemetente,@VlrICMSDestinatario
	)
END
GO

CREATE PROCEDURE SP_Update_ItensNFe
@CodNFE int, @Serie varchar(3), @CodEmpresa int, @CodProduto int, @Descricao varchar(120), @TipoPreco tinyint, @ValorUnit decimal (21, 10), @Qtd decimal (21, 10),
@ValorTotal decimal (21, 10), @ValorFrete decimal (21, 10), @ValorDesconto decimal (21, 10), @PorcentDesconto decimal (21, 10),
@ValorSeguro decimal (21, 10), @Despesas decimal (21, 10), @Unidade varchar(6), @CoefUnid int, @PesoBruto decimal (21, 10),
@PesoLiquido decimal (21, 10), @InfosAdicionais varchar (500) = null, @PorcentIPI decimal (7, 4), @PorcentICMS decimal (7, 4), @PorcentICMSInterno decimal (7, 4), 
@ReducICMS decimal (7, 4), @PorcentCredICMS decimal (7, 4), @IVA decimal (7, 4), @ICMSOP decimal (7, 4), @RedST decimal (7, 4),
@PorcentPIS decimal (7, 4), @PorcentCOFINS decimal (7, 4), @BaseCalcIPI decimal (10, 4), @ValorIPI decimal (10, 4), @BaseCalcICMS decimal (10, 4), 
@ValorICMS decimal (10, 4), @ValorCredICMS decimal (10, 4), @BaseCalcICMSST decimal (10, 4), @ValorST decimal (10, 4),
@ValorPIS decimal (10, 4), @ValorCOFINS decimal (10, 4), @Origem tinyint, @CodNCM varchar(8), @CodCFOP varchar (4), @SomaFatura bit,
@CompoeValorTotal bit, @ConsumoProprio bit, @CSTICMS int, @CSTIPI tinyint, @CSTPIS tinyint, @CSTCOFINS tinyint, @EnquadIPI varchar(3) = null,
@Pedido varchar (15) = null, @SeqItemPedido varchar (6) = null, @NrAdicao int, @SeqAdicao int, @ValorDescontoItem decimal(21, 10), 
@BaseCalcImport decimal(21, 10), @PorcentImport decimal(7, 4), @ValorImport decimal(21, 10), @VlrAdicional decimal (10,2), @Siscomex decimal (8,2), 
@DrawBack varchar (11) = null, @RE varchar(12) = null, @ChaveExportacao varchar(44) = null, @QtdExportado decimal (11,4),
@CodANP varchar (9) = null, @CodIF varchar (21) = null, @QTemp decimal (10, 2), @CodEstado int = null, @QtdadeBCCombus decimal (10, 2),
@VlrAliquotaCombus decimal (10, 2), @ValorCombus decimal (10, 2), @VlrAliqNacional decimal (10, 2), @VlrAliqEstadual decimal (10, 2), @CEST varchar(7) = null,
@DescontoSuframa decimal (21, 10), @VlrICMSRemetente decimal (10, 2), @VlrICMSDestinatario decimal (10, 2)
AS
BEGIN
	UPDATE ItensNFes SET Descricao = @Descricao, TipoPreco = @TipoPreco, ValorUnit = @ValorUnit, Qtd = @Qtd, ValorTotal = @ValorTotal, ValorFrete = @ValorFrete, 
	ValorDesconto = @ValorDesconto, PorcentDesconto = @PorcentDesconto, ValorSeguro = @ValorSeguro, Despesas = @Despesas, Unidade = @Unidade, 
	CoefUnid = @CoefUnid, PesoBruto = @PesoBruto, PesoLiquido = @PesoLiquido, InfosAdicionais = @InfosAdicionais, PorcentIPI = @PorcentIPI, PorcentICMS = @PorcentICMS, 
	PorcentICMSInterno = @PorcentICMSInterno, ReducICMS = @ReducICMS, PorcentCredICMS = @PorcentCredICMS, IVA = @IVA, ICMSOP = @ICMSOP, 
	RedST = @RedST, PorcentPIS = @PorcentPIS, PorcentCOFINS = @PorcentCOFINS, BaseCalcIPI = @BaseCalcIPI, ValorIPI = @ValorIPI, BaseCalcICMS = @BaseCalcICMS, 
	ValorICMS = @ValorICMS, ValorCredICMS = @ValorCredICMS, BaseCalcICMSST = @BaseCalcICMSST, ValorST = @ValorST, ValorPIS = @ValorPIS,
	ValorCOFINS = @ValorCOFINS, Origem = @Origem, CodNCM = @CodNCM, CodCFOP = @CodCFOP, SomaFatura = @SomaFatura, CompoeValorTotal = @CompoeValorTotal, 
	ConsumoProprio = @ConsumoProprio, CSTICMS = @CSTICMS, CSTIPI = @CSTIPI, CSTPIS = @CSTPIS, CSTCOFINS = @CSTCOFINS, EnquadIPI = @EnquadIPI,
	Pedido = @Pedido, SeqItemPedido = @SeqItemPedido, NrAdicao = @NrAdicao, SeqAdicao = @SeqAdicao, ValorDescontoItem = @ValorDescontoItem, 
	BaseCalcImport = @BaseCalcImport, PorcentImport = @PorcentImport, ValorImport = @ValorImport, VlrAdicional = @VlrAdicional, Siscomex = @Siscomex, 
	DrawBack = @DrawBack, RE = @RE, ChaveExportacao = @ChaveExportacao, QtdExportado = @QtdExportado, CodANP = @CodANP, CodIF = @CodIF, QTemp = @QTemp,
	CodEstado = @CodEstado, QtdadeBCCombus = @QtdadeBCCombus, VlrAliquotaCombus = @VlrAliquotaCombus, ValorCombus = @ValorCombus,
	VlrAliqNacional = @VlrAliqNacional, VlrAliqEstadual = @VlrAliqEstadual, CEST = @CEST,DescontoSuframa = @DescontoSuframa,
	VlrICMSRemetente = VlrICMSRemetente, VlrICMSDestinatario = @VlrICMSDestinatario
	WHERE CodNFE = @CodNFE and Serie = @Serie and CodEmpresa = @CodEmpresa and CodProduto = @CodProduto
END
GO

CREATE PROCEDURE SP_LimparItensNFE
@CodNFE int,
@Serie varchar(3),
@CodEmpresa int
AS
BEGIN
	DELETE FROM ItensNFes WHERE CodNFE = @CodNFE and Serie = @Serie and CodEmpresa = @CodEmpresa
END
GO

CREATE PROCEDURE SP_LimparItensNFSE
@RPS int,
@Serie varchar(3),
@CodEmpresa int
AS
BEGIN
	DELETE FROM ServicosNFSe WHERE RPS = @RPS and Serie = @Serie and CodEmpresa = @CodEmpresa
END
GO

CREATE PROCEDURE SP_Delete_ItemNFE
@CodProduto int,
@CodNFE int,
@Serie varchar(3),
@CodEmpresa int
AS
BEGIN
	DELETE FROM ItensNFes WHERE CodNFE = @CodNFE and Serie = @Serie and CodEmpresa = @CodEmpresa and CodProduto = @CodProduto
END
GO

CREATE PROCEDURE SP_Insert_CondicoesPagamentosNFes
@CodNFE int,
@Serie varchar(3),
@CodEmpresa int,
@Numero int,
@Data date,
@Valor decimal (15, 2)
AS
BEGIN
	INSERT INTO CondicoesPagamentosNFes (CodNFE, Serie, CodEmpresa, Numero, Data, Valor)
	VALUES (@CodNFE, @Serie, @CodEmpresa, @Numero, @Data, @Valor)
END
GO

CREATE PROCEDURE SP_Delete_CondicoesPagamentosNFes
@CodNFE int,
@Serie varchar(3),
@CodEmpresa int
AS
BEGIN
	DELETE FROM CondicoesPagamentosNFes WHERE CodNFE = @CodNFE AND Serie = @Serie AND CodEmpresa = @CodEmpresa
END
GO

CREATE PROCEDURE SP_AtualizaTotais
@CodNFE int,
@Serie varchar(3),
@CodEmpresa int,
@PesoLiquido decimal (12, 3),
@PesoBruto decimal (12, 3),
@BaseCalculo decimal (15, 2),
@ValorICMS decimal (15, 2),
@ValorPIS decimal (15, 2),
@ValorCOFINS decimal (15, 2),
@BaseCalculoST decimal (15, 2),
@ValorCalculoST decimal (15, 2),
@ValorTotalProdutos decimal (15, 2),
@ValorFrete decimal (15, 2),
@ValorSeguro decimal (15, 2),
@OutrasDespesas decimal (15, 2),
@TotalIPI decimal (15, 2),
@SubTotal decimal (15, 2),
@ValorCredICMS decimal (15, 2),
@ImpostoImportacao decimal (15, 2),
@TranspFiscal decimal (15, 2),
@TotalFaturar decimal (15, 2),
@ValorDesconto decimal (15, 2),
@ValorFinal decimal (15, 2)
AS
BEGIN
	UPDATE NFes SET PesoLiquido = @PesoLiquido, PesoBruto = @PesoBruto, BaseCalculo = @BaseCalculo, ValorICMS = @ValorICMS, ValorPIS = @ValorPIS,
	ValorCOFINS = @ValorCOFINS, BaseCalculoST = @BaseCalculoST,	ValorCalculoST = @ValorCalculoST, ValorTotalProdutos = @ValorTotalProdutos, 
	ValorFrete = @ValorFrete, ValorSeguro = @ValorSeguro, OutrasDespesas = @OutrasDespesas, TotalIPI = @TotalIPI, SubTotal = @SubTotal, 
	ValorCredICMS = @ValorCredICMS, ImpostoImportacao = @ImpostoImportacao, TranspFiscal = @TranspFiscal, TotalFaturar = @TotalFaturar,
	ValorDesconto = @ValorDesconto, ValorFinal = @ValorFinal
	WHERE CodNFE = @CodNFE AND Serie = @Serie AND CodEmpresa = @CodEmpresa
END
GO

CREATE PROCEDURE SP_AtualizaSituacaoNFE
@CodNFE int,
@Serie varchar(3),
@CodEmpresa int,
@CodUsuario uniqueidentifier,
@CodSituacao tinyint,
@ChaveNFE varchar (44) = null
AS
BEGIN
	IF(@CodSituacao = 3)
	BEGIN
		UPDATE NFes SET CodSituacao = @CodSituacao, ChaveNFE = @ChaveNFE, DtEmissao = GETDATE()
		WHERE CodNFE = @CodNFE AND Serie = @Serie AND CodEmpresa = @CodEmpresa

		IF ((select Ambiente from ParametrosNFE WHERE CodEmpresa = @CodEmpresa) = 1)
		BEGIN
			DECLARE @Restantes INT
			DECLARE @Avulsas INT
			SELECT @Restantes = Restantes, @Avulsas = Avulsas FROM CotasEmpresas WHERE CodEmpresa = @CodEmpresa

			IF (@Restantes > 1)
				UPDATE CotasEmpresas SET Restantes = Restantes - 1 WHERE CodEmpresa = @CodEmpresa
			ELSE
				UPDATE CotasEmpresas SET Avulsas = Avulsas - 1 WHERE CodEmpresa = @CodEmpresa
		END
	END
	ELSE 
		UPDATE NFes SET CodSituacao = @CodSituacao
		WHERE CodNFE = @CodNFE AND Serie = @Serie AND CodEmpresa = @CodEmpresa

	INSERT INTO HistoricoNFE VALUES (@CodNFE, @Serie, @CodEmpresa, @CodSituacao, @CodUsuario, GETDATE())
END
GO

CREATE PROCEDURE SP_Insert_DireitosNFe
@CodGrupo int,
@Consultar bit,
@Cadastrar bit,
@Editar bit,
@Gerar bit,
@Cancelar bit,
@Inutilizar bit,
@CartaCorrecao bit
AS
BEGIN
	INSERT INTO DireitosNFe (CodGrupo, Consultar, Cadastrar, Editar, Gerar, Cancelar, Inutilizar, CartaCorrecao)
	VALUES (@CodGrupo, @Consultar, @Cadastrar, @Editar, @Gerar, @Cancelar, @Inutilizar, @CartaCorrecao)
END
GO

CREATE PROCEDURE SP_Delete_DireitosNFe
@CodGrupo int
AS
BEGIN
	DELETE FROM DireitosNFe WHERE CodGrupo = @CodGrupo
END
GO

CREATE PROCEDURE SP_Insert_DireitosNFSe
@CodGrupo int,
@Consultar bit,
@Cadastrar bit,
@Editar bit,
@Gerar bit,
@Cancelar bit
AS
BEGIN
	INSERT INTO DireitosNFSe (CodGrupo, Consultar, Cadastrar, Editar, Gerar, Cancelar)
	VALUES (@CodGrupo, @Consultar, @Cadastrar, @Editar, @Gerar, @Cancelar)
END
GO

CREATE PROCEDURE SP_Delete_DireitosNFSe
@CodGrupo int
AS
BEGIN
	DELETE FROM DireitosNFSe WHERE CodGrupo = @CodGrupo
END
GO

CREATE PROCEDURE SP_Insert_DINFes
@CodNFE int, @Serie varchar(3), @CodEmpresa int, @NrDocumento varchar (12), @DtDocumento date, @LocalDesembaraco varchar (60),
@DtDesembaraco date, @TipoTransporte tinyint, @TipoFormaImportacao tinyint, @CodUFDesembaraco int, @UnidPadrao varchar(6),
@CoefUnidade int, @CNPJEncomendante varchar(18), @CodUFEncomendante int, @VlrFrete decimal (10, 2), @VlrAFRMM decimal (10, 2),
@VlrAduaneiro decimal (10, 2), @PorcentImpostoImportacao decimal (10, 2), @ImpostoImportacao decimal (10, 2),
@TaxaSiscomex decimal (10, 2), @BaseCalcICMS decimal (10, 2), @PIS decimal (10, 2), @COFINS decimal (10, 2), @VlrAdicional decimal (10, 2)
AS
BEGIN
	INSERT INTO DINFEs (CodNFE, Serie, CodEmpresa, NrDocumento, DtDocumento, LocalDesembaraco, DtDesembaraco, TipoTransporte,
	TipoFormaImportacao, CodUFDesembaraco, UnidPadrao, CoefUnidade, CNPJEncomendante, CodUFEncomendante, VlrFrete, VlrAFRMM, 
	VlrAduaneiro, PorcentImpostoImportacao, ImpostoImportacao, TaxaSiscomex, BaseCalcICMS, PIS, COFINS, VlrAdicional)
	VALUES (@CodNFE, @Serie, @CodEmpresa, @NrDocumento, @DtDocumento, @LocalDesembaraco, @DtDesembaraco, @TipoTransporte,
	@TipoFormaImportacao, @CodUFDesembaraco, @UnidPadrao, @CoefUnidade, @CNPJEncomendante, @CodUFEncomendante, @VlrFrete, @VlrAFRMM, 
	@VlrAduaneiro, @PorcentImpostoImportacao, @ImpostoImportacao, @TaxaSiscomex, @BaseCalcICMS, @PIS, @COFINS, @VlrAdicional)
END
GO

CREATE PROCEDURE SP_Delete_DINFes
@CodNFE int, @Serie varchar(3), @CodEmpresa int
AS
BEGIN
	DELETE FROM DINFEs WHERE CodNFE = @CodNFE AND Serie = @Serie AND CodEmpresa = @CodEmpresa
END
GO

CREATE PROCEDURE SP_Update_RateioItens
@CodNFE int,
@Serie int,
@CodEmpresa int,
@CodProduto int,
@BaseCalcICMS decimal (10, 4),
@ValorICMS decimal (10, 4),
@ValorFrete decimal (21, 10),
@ValorPIS decimal (10, 4),
@ValorCOFINS decimal (10, 4),
@Siscomex decimal (8,2),
@VlrAdicional decimal (10, 2),
@Despesas decimal (21, 10),
@BaseCalcImport decimal(21, 10),
@PorcentImport decimal(7, 4),
@ValorImport decimal(21, 10),
@NrAdicao int,
@SeqAdicao int
AS
BEGIN
	UPDATE ItensNFes SET BaseCalcICMS = @BaseCalcICMS, ValorICMS = @ValorICMS, ValorFrete = @ValorFrete, ValorPIS = @ValorPIS, ValorCOFINS = @ValorCOFINS,
			             Siscomex = @Siscomex, VlrAdicional = @VlrAdicional, Despesas = @Despesas, BaseCalcImport = @BaseCalcImport, PorcentImport = @PorcentImport, 
						 ValorImport = @ValorImport, NrAdicao = @NrAdicao, SeqAdicao = @SeqAdicao
						 WHERE CodProduto = @CodProduto and CodNFE = @CodNFE and Serie = @Serie and CodEmpresa = @CodEmpresa

END
GO

--Esta procedure é responsável por atualizar os campos ValorTotalProdutos e ValorFinal da NF-e após alteração ou exclusão de um item
CREATE PROCEDURE SP_AtualizaValoresConsultaNFEs
@CodNFE int,
@Serie varchar(3),
@CodEmpresa int
AS
BEGIN
	select ValorTotal, ValorDesconto into #tempItem from ItensNFes WHERE
					CodNFE = @CodNFE
					AND Serie = @Serie
					AND CodEmpresa = @CodEmpresa

	DECLARE @ValorTotalProdutos decimal (21, 10)
	SET @ValorTotalProdutos = (select ISNULL(SUM(ValorTotal), 0) from #tempItem)

	DECLARE @ValorFinal decimal (21, 10)
	SET @ValorFinal = (select ISNULL(SUM(ValorTotal - ValorDesconto), 0) from #tempItem)

	UPDATE NFes 
		SET ValorTotalProdutos = @ValorTotalProdutos, ValorFinal = @ValorFinal
	WHERE CodNFE = @CodNFE
		  AND Serie = @Serie
		  AND CodEmpresa = @CodEmpresa

	DROP TABLE #tempItem
END
GO

CREATE PROCEDURE SP_AprovaUsuarioEmpresa
@CodEmpresa int,
@CodUsuario uniqueidentifier,
@CodAprovacao uniqueidentifier
AS
BEGIN
	DECLARE @Aprovacao uniqueidentifier
	SET @Aprovacao = (select CodAprovacao from UsuariosEmpresas WHERE CodEmpresa = @CodEmpresa AND CodUsuario = @CodUsuario)

	IF (@Aprovacao != @CodAprovacao)
	BEGIN
		RAISERROR('ERRO001: Código de aprovacao inválido', 16, 1)
	END
	
	UPDATE UsuariosEmpresas SET Aprovado = 1 WHERE CodEmpresa = @CodEmpresa AND CodUsuario = @CodUsuario
END
GO

CREATE PROCEDURE SP_ContrataPlano
@CodRequisicao uniqueidentifier,
@CodEmpresa int,
@Valor decimal (10, 2),
@DtVencimento date,
@DtLimiteAcesso date,
@UsuariosAdicionais tinyint,
@CodBoleto int,
@NumeroBoleto varchar (60),
@TokenBoleto varchar(100),
@CodPlano int
AS
BEGIN
	INSERT INTO PagamentosPlanos 
		(CodRequisicao, CodEmpresa, Valor, DtRegistro, DtVencimento, DtLimiteAcesso, UsuariosAdicionais, CodPlano,
		 CodBoleto, NumeroBoleto, TokenBoleto, Situacao)
	VALUES 
		(@CodRequisicao, @CodEmpresa, @Valor, GETDATE(), @DtVencimento, @DtLimiteAcesso, @UsuariosAdicionais, @CodPlano,
		 @CodBoleto, @NumeroBoleto, @TokenBoleto, 0)
END
GO

CREATE PROCEDURE SP_LiberaEmpresaRenovacao
@CodEmpresa int,
@DtLiberar date
AS
BEGIN
	UPDATE Empresas SET DtLimiteAcesso = @DtLiberar WHERE CodEmpresa = @CodEmpresa
END
GO

CREATE PROCEDURE SP_PagaBoleto_Plano
@CodRequisicao uniqueidentifier
AS
BEGIN
	DECLARE @CodEmpresa int	
	DECLARE @DtRegistro DATE
	DECLARE @UsuariosAdicionais int
	DECLARE @CodPlano int
	DECLARE @DtLimiteAcesso DATE
	DECLARE @Renovacao BIT
	DECLARE @Situacao tinyint

	select @CodEmpresa = CodEmpresa, @DtRegistro = DtRegistro, @UsuariosAdicionais = UsuariosAdicionais,
	@CodPlano = CodPlano, @DtLimiteAcesso = DtLimiteAcesso, @Situacao = Situacao
	from PagamentosPlanos where CodRequisicao = @CodRequisicao

	IF (@Situacao > 0)
		return
	
	DELETE FROM ModulosEmpresas WHERE CodEmpresa = @CodEmpresa
	INSERT INTO ModulosEmpresas SELECT @CodEmpresa, CodModulo from ModulosPlanos WHERE CodPlano = @CodPlano
	
	DECLARE modulos CURSOR FOR 
		SELECT CodModulo from ModulosPlanos WHERE CodPlano = @CodPlano
	DECLARE @CodModulo INT

	OPEN modulos
	FETCH NEXT FROM modulos INTO @CodModulo
		
	WHILE @@FETCH_STATUS = 0
	BEGIN
		DELETE FROM ModulosEmpresas WHERE CodEmpresa = @CodEmpresa AND CodModulo = @CodModulo

		INSERT INTO ModulosEmpresas (CodEmpresa, CodModulo) VALUES (@CodEmpresa, @CodModulo)

		--Não pode deletar cotas pois pode haver documentos avulsos comprados
		IF (EXISTS(select top 1 CodEmpresa from CotasEmpresas where CodEmpresa = @CodEmpresa))
			UPDATE CotasEmpresas 
					SET Restantes = (SELECT NumDocumentos FROM Planos WHERE CodPlano = @CodPlano)
				WHERE CodEmpresa = @CodEmpresa
		ELSE
		INSERT INTO CotasEmpresas (CodEmpresa, Restantes) 
				VALUES (@CodEmpresa, (SELECT NumDocumentos FROM Planos WHERE CodPlano = @CodPlano))
				
		FETCH NEXT FROM modulos INTO @CodModulo
	END

	CLOSE modulos
	DEALLOCATE modulos

	UPDATE PagamentosPlanos SET Situacao = 1, DtPago = GETDATE() WHERE CodRequisicao = @CodRequisicao
		
	UPDATE Empresas 
		SET DtLimiteAcesso = @DtLimiteAcesso, 
		NumUsuarios = (SELECT NumUsuarios FROM Planos WHERE CodPlano = @CodPlano) + @UsuariosAdicionais,
		CodPlano = @CodPlano, Trial = 0
	WHERE CodEmpresa = @CodEmpresa
END
GO

CREATE PROCEDURE SP_PagaBoleto_Cotas
@CodRequisicao uniqueidentifier
AS
BEGIN
	DECLARE @CodEmpresa INT
	DECLARE @QtdDocumentos INT
	SELECT @CodEmpresa = CodEmpresa, @QtdDocumentos = QtdDocumentos FROM PagamentosCotasAvulsas
	WHERE CodRequisicao = @CodRequisicao
	
	UPDATE CotasEmpresas SET Avulsas = Avulsas + @QtdDocumentos WHERE CodEmpresa = @CodEmpresa
	UPDATE PagamentosCotasAvulsas SET Situacao = 1, DtPago = GETDATE() WHERE CodRequisicao = @CodRequisicao
END
GO

CREATE PROCEDURE SP_PagaBoleto_Usuarios
@CodRequisicao uniqueidentifier
AS
BEGIN
	DECLARE @CodEmpresa int
	DECLARE @QtdUsuarios tinyint
	SELECT @CodEmpresa = CodEmpresa, @QtdUsuarios = QtdUsuarios FROM PagamentosUsuariosAvulsos WHERE CodRequisicao = @CodRequisicao

	UPDATE Empresas SET NumUsuarios = NumUsuarios + @QtdUsuarios WHERE CodEmpresa = @CodEmpresa

	UPDATE PagamentosUsuariosAvulsos SET Situacao = 1, DtPago = GETDATE() WHERE CodRequisicao = @CodRequisicao
END
GO

CREATE PROCEDURE SP_AtualizaCotas
AS
BEGIN
	DECLARE empresas CURSOR FOR
	select CodEmpresa from Empresas 
	where datepart(month, DtLimiteAcesso) > datepart(month, getdate()) 
		  and datepart(day, DtLimiteAcesso) = datepart(day, getdate())

	DECLARE @CodEmpresa INT
	
	OPEN empresas
	FETCH NEXT FROM empresas INTO @CodEmpresa

	WHILE @@FETCH_STATUS = 0
	BEGIN
		DECLARE modulos CURSOR FOR
		select me.CodPlano, me.CodModulo from ModulosEmpresas me where me.CodEmpresa = @CodEmpresa
		
		DECLARE @CodModulo TINYINT
		DECLARE @CodPlano INT

		OPEN modulos
		
		FETCH NEXT FROM modulos INTO @CodPlano, @CodModulo

		WHILE @@FETCH_STATUS = 0
		BEGIN
			UPDATE CotasEmpresas 
				SET Restantes = (select NumDocumentos from Planos where CodPlano = @CodPlano)
			WHERE CodEmpresa = @CodEmpresa AND CodModulo = @CodModulo
			
			FETCH NEXT FROM modulos INTO @CodPlano, @CodModulo
		END

		CLOSE modulos
		DEALLOCATE modulos

		FETCH NEXT FROM empresas INTO @CodEmpresa	
	END

	CLOSE empresas
	DEALLOCATE empresas
END
GO

CREATE PROCEDURE SP_AtualizaBoleto
@CodRequisicao uniqueidentifier,
@DtVencimento date,
@CodBoleto int,
@NumeroBoleto varchar (60),
@TokenBoleto varchar(100)
AS
BEGIN
	update PagamentosPlanos set CodBoleto = @CodBoleto, NumeroBoleto = @NumeroBoleto, TokenBoleto = @TokenBoleto, DtVencimento = @DtVencimento
	where CodRequisicao = @CodRequisicao
END
GO

CREATE PROCEDURE SP_Insert_Planos
@CodPlano int output,
@Descricao varchar (35),
@NumDocumentos int,
@NumUsuarios int,
@Valor decimal (10, 2)
AS
BEGIN
	INSERT INTO Planos (Descricao, NumDocumentos, NumUsuarios, Valor, Excluido)
	VALUES (@Descricao, @NumDocumentos, @NumUsuarios, @Valor, 0)

	SET @CodPlano = SCOPE_IDENTITY()
END
GO

CREATE PROCEDURE SP_Insert_ModulosPlanos
@CodPlano int,
@CodModulo int
AS
BEGIN
	INSERT INTO ModulosPlanos (CodPlano, CodModulo)
	VALUES (@CodPlano, @CodModulo)
END
GO

CREATE PROCEDURE SP_Update_Planos
@CodPlano int,
@Descricao varchar (35),
@NumDocumentos int,
@NumUsuarios int,
@Valor decimal (10, 2)
AS
BEGIN
	UPDATE Planos SET Descricao = @Descricao, NumDocumentos = @NumDocumentos, NumUsuarios = @NumUsuarios,
	Valor = @Valor WHERE CodPlano = @CodPlano
END
GO

CREATE PROCEDURE SP_Delete_ModulosPlanos
@CodPlano int
AS
BEGIN
	DELETE FROM ModulosPlanos WHERE CodPlano = @CodPlano
END
GO

CREATE PROCEDURE SP_Delete_Planos
@CodPlano int
AS
BEGIN
	UPDATE Planos SET Excluido = 1 WHERE CodPlano = @CodPlano
END
GO

CREATE PROCEDURE SP_Insert_PagamentosCotasAvulsas
@CodRequisicao uniqueidentifier,
@CodEmpresa int,
@Valor decimal (10, 2),
@QtdDocumentos int,
@DtVencimento date,
@CodBoleto int,
@NumeroBoleto varchar (60),
@TokenBoleto varchar(100)
AS
BEGIN
	INSERT INTO PagamentosCotasAvulsas (CodRequisicao, CodEmpresa, Valor, QtdDocumentos, DtVencimento, CodBoleto, NumeroBoleto, TokenBoleto)
	VALUES (@CodRequisicao, @CodEmpresa, @Valor, @QtdDocumentos, @DtVencimento, @CodBoleto, @NumeroBoleto, @TokenBoleto)
END
GO

CREATE PROCEDURE SP_ContrataUsuarios
@CodRequisicao uniqueidentifier,
@CodEmpresa int,
@Valor decimal (10, 2),
@QtdUsuarios tinyint,
@DtVencimento date,
@CodBoleto int,
@NumeroBoleto varchar (60),
@TokenBoleto varchar(100)
AS
BEGIN
	INSERT INTO PagamentosUsuariosAvulsos (CodRequisicao, CodEmpresa, QtdUsuarios, Valor, DtVencimento, CodBoleto, NumeroBoleto, TokenBoleto)
	VALUES (@CodRequisicao, @CodEmpresa, @QtdUsuarios, @Valor, @DtVencimento, @CodBoleto, @NumeroBoleto, @TokenBoleto)
END
GO

CREATE PROCEDURE SP_Insert_CategoriasTutoriais
@Descricao varchar (30)
AS
BEGIN
	INSERT INTO CategoriasTutoriais (Descricao) VALUES (@Descricao)
END
GO

CREATE PROCEDURE SP_Update_CategoriasTutoriais
@CodCategoria int,
@Descricao varchar (30)
AS
BEGIN
	UPDATE CategoriasTutoriais SET Descricao = @Descricao WHERE CodCategoria = @CodCategoria
END
GO

CREATE PROCEDURE SP_Delete_CategoriasTutoriais
@CodCategoria int
AS
If(exists(select top 1 CodCategoria from Tutoriais where CodCategoria = @CodCategoria ))
	begin
		RAISERROR('ERRO001: Não foi possível excluir esta categoria, pois há tutoriais ativos relacionados a ele', 16, 1)
		return
	end

BEGIN
	DELETE FROM CategoriasTutoriais WHERE Codcategoria = @CodCategoria
END
GO

CREATE PROCEDURE SP_Insert_Tutorial
@Descricao varchar(30),
@CodCategoria int,
@EmbededURL varchar(100),
@Thumbnail varchar(max)
AS
BEGIN
	INSERT INTO Tutoriais (Descricao, CodCategoria, EmbededURL, Thumbnail) VALUES (@Descricao, @CodCategoria, @EmbededURL, @Thumbnail)
END
GO

CREATE PROCEDURE SP_Update_Tutorial
@CodTutorial int,
@Descricao varchar(30),
@CodCategoria int,
@EmbededURL varchar(100),
@Thumbnail varchar(max)
AS
BEGIN
	UPDATE Tutoriais SET Descricao = @Descricao, CodCategoria = @CodCategoria WHERE CodTutorial = @CodTutorial
END
GO

CREATE PROCEDURE SP_Delete_Tutorial
@CodTutorial int
AS
BEGIN
	DELETE FROM Tutoriais WHERE CodTutorial = @CodTutorial
END
GO

CREATE PROCEDURE SP_Insert_NFSes
@RPS int, @Serie varchar (3), @CodEmpresa int, @CodUsuarioLogado uniqueidentifier,
@CodCliente int, @DtCompetencia datetime, @CodCidade int,
@CodServico decimal (10, 2), @CodAtividade int, @Descricao varchar (2000), @Operacao varchar(1),
@NaturezaTributacaoNFSe tinyint, @TipoTributacaoNFSe tinyint,
@ExigibilidadeISSNFSe tinyint, @IncentivadorCultural bit, @IncentivoFiscal bit, 

@VlrServico decimal (10, 2), @VlrDeducoes decimal (10, 2), @Retencoes decimal (10, 2),
@DescontosIncondicionais decimal (10, 2), @DescontosCondicionais decimal (10, 2), 
@PorcentISS decimal (10, 2), @PorcentPIS decimal (10, 2), @PorcentCOFINS decimal (10, 2),
@PorcentINSS decimal (10, 2), @PorcentIR decimal (10, 2),
@PorcentCSLL decimal (10, 2), 
@ISS decimal (10,2),@ISSRetido decimal (10,2), @PIS decimal (10, 2), @COFINS decimal (10, 2), @INSS decimal (10, 2), 
@IR decimal (10, 2), @CSLL decimal (10, 2),

@BaseCalculo decimal (10, 2), @PorcentSimplesNacional decimal (10, 2),
@VlrLiquido decimal (10, 2), @VlrISS decimal (10, 2),
@ART varchar (15), @Obra varchar (15),
@RpsSubstituido int, @SerieRpsSubstituido varchar (3), @CodNFSESubstituido int
AS
BEGIN
	DECLARE @Ambiente tinyint
	SET @Ambiente = (select Ambiente from ParametrosNFSE where CodEmpresa = @CodEmpresa)

	INSERT INTO NFSes (
		RPS, Serie, CodEmpresa, Ambiente, CodCliente, CodSituacao, DtCompetencia, CodCidade ,
		CodServico, CodAtividade, Descricao, Operacao, NaturezaTributacaoNFSe, 
		TipoTributacaoNFSe, ExigibilidadeISSNFSe, IncentivadorCultural, IncentivoFiscal,		
		VlrServico, VlrDeducoes, Retencoes, DescontosIncondicionais, DescontosCondicionais, 
		PorcentISS, PorcentPIS, PorcentCOFINS, PorcentINSS, PorcentIR, PorcentCSLL,
		ISS, ISSRetido, PIS, COFINS, INSS, IR, CSLL,
		BaseCalculo, PorcentSimplesNacional, VlrLiquido, VlrISS, ART, Obra, RpsSubstituido, SerieRpsSubstituido, CodNFSESubstituido
	)
	VALUES (
		@RPS, @Serie, @CodEmpresa, @Ambiente, @CodCliente, 1, @DtCompetencia, @CodCidade,
		@CodServico, @CodAtividade, @Descricao, @Operacao, @NaturezaTributacaoNFSe,
		@TipoTributacaoNFSe, @ExigibilidadeISSNFSe, @IncentivadorCultural, @IncentivoFiscal,		
		@VlrServico, @VlrDeducoes, @Retencoes, @DescontosIncondicionais, @DescontosCondicionais,
		@PorcentISS, @PorcentPIS, @PorcentCOFINS, @PorcentINSS, @PorcentIR, @PorcentCSLL,
		@ISS, @ISSRetido, @PIS, @COFINS, @INSS, @IR, @CSLL,
		@BaseCalculo, @PorcentSimplesNacional, @VlrLiquido, @VlrISS, @ART, @Obra, @RpsSubstituido, @SerieRpsSubstituido, @CodNFSESubstituido
	)
END
GO

CREATE PROCEDURE SP_Update_NFSes
@RPS int, @Serie varchar (3), @CodEmpresa int, @CodUsuarioLogado uniqueidentifier,
@CodCliente int, @DtCompetencia datetime, @CodCidade int,
@CodServico decimal (10, 2), @CodAtividade int, @Descricao varchar (2000), @Operacao varchar(1),
@NaturezaTributacaoNFSe tinyint, @TipoTributacaoNFSe tinyint,
@ExigibilidadeISSNFSe tinyint, @IncentivadorCultural bit, @IncentivoFiscal bit, 

@VlrServico decimal (10, 2), @VlrDeducoes decimal (10, 2), @Retencoes decimal (10, 2),
@DescontosIncondicionais decimal (10, 2), @DescontosCondicionais decimal (10, 2), 
@PorcentISS decimal (10, 2), @PorcentPIS decimal (10, 2), @PorcentCOFINS decimal (10, 2),
@PorcentINSS decimal (10, 2), @PorcentIR decimal (10, 2),
@PorcentCSLL decimal (10, 2), 
@ISS decimal (10,2), @ISSRetido decimal (10,2), @PIS decimal (10, 2), @COFINS decimal (10, 2), @INSS decimal (10, 2), 
@IR decimal (10, 2), @CSLL decimal (10, 2),

@BaseCalculo decimal (10, 2), @PorcentSimplesNacional decimal (10, 2),
@VlrLiquido decimal (10, 2), @VlrISS decimal (10, 2),
@ART varchar (15), @Obra varchar (15),
@RpsSubstituido int, @SerieRpsSubstituido varchar (3), @CodNFSESubstituido int
AS
BEGIN
	UPDATE NFSes SET
		CodCliente = @CodCliente, DtCompetencia = @DtCompetencia, CodCidade = @CodCidade,
		CodServico = @CodServico, CodAtividade = @CodAtividade, Descricao = @Descricao, 
		Operacao = @Operacao, NaturezaTributacaoNFSe = @NaturezaTributacaoNFSe, 
		TipoTributacaoNFSe = @TipoTributacaoNFSe, ExigibilidadeISSNFSe = @ExigibilidadeISSNFSe,
		IncentivadorCultural = @IncentivadorCultural, IncentivoFiscal = @IncentivoFiscal,

		VlrServico = @VlrServico, VlrDeducoes = @VlrDeducoes, Retencoes = @Retencoes, 
		DescontosIncondicionais = @DescontosIncondicionais, DescontosCondicionais = @DescontosCondicionais, 
		PorcentISS = @PorcentISS, PorcentPIS = @PorcentPIS, PorcentCOFINS = @PorcentCOFINS,
		PorcentIR = @PorcentIR, PorcentINSS = @PorcentINSS, PorcentCSLL = @PorcentCSLL,
		ISS = @ISS, ISSRetido = @ISSRetido, PIS = @PIS, COFINS = @COFINS, INSS = @INSS, IR = @IR, CSLL = @CSLL,		
		BaseCalculo = @BaseCalculo, PorcentSimplesNacional = @PorcentSimplesNacional, 
		VlrLiquido = @VlrLiquido, VlrISS = @VlrISS, ART = @ART, Obra = @Obra,
		RpsSubstituido = @RpsSubstituido, SerieRpsSubstituido = @SerieRpsSubstituido, CodNFSESubstituido = @CodNFSESubstituido
	WHERE RPS = @RPS and Serie = @Serie and CodEmpresa = @CodEmpresa
END
GO

CREATE PROCEDURE SP_AtualizaSituacaoNFSE
@RPS int,
@Serie varchar(3),
@CodEmpresa int,
@CodUsuario uniqueidentifier,
@CodSituacao tinyint,
@CodNFSE int
AS
BEGIN
	IF(@CodSituacao = 2)
	BEGIN
		UPDATE NFSes SET CodSituacao = @CodSituacao, CodNFSE = @CodNFSE, dtEmissao = getdate()
		WHERE RPS = @RPS AND Serie = @Serie AND CodEmpresa = @CodEmpresa

		IF ((select Ambiente from ParametrosNFSE WHERE CodEmpresa = @CodEmpresa) = 1)
		BEGIN
			DECLARE @Restantes INT
			DECLARE @Avulsas INT
			SELECT @Restantes = Restantes, @Avulsas = Avulsas FROM CotasEmpresas WHERE CodEmpresa = @CodEmpresa

			IF (@Restantes > 0)
				UPDATE CotasEmpresas SET Restantes = Restantes - 1 WHERE CodEmpresa = @CodEmpresa
			ELSE
				UPDATE CotasEmpresas SET Avulsas = Avulsas - 1 WHERE CodEmpresa = @CodEmpresa
		END
	END
	ELSE IF(@CodSituacao = 3)
		UPDATE NFSes SET CodSituacao = @CodSituacao
		WHERE RPS = @RPS AND Serie = @Serie AND CodEmpresa = @CodEmpresa
	ELSE UPDATE NFSes SET CodSituacao = @CodSituacao, DtEmissao = GETDATE()
		WHERE RPS = @RPS AND Serie = @Serie AND CodEmpresa = @CodEmpresa

	--EXEC SP_RegistraAtividades @CodUsuario, @CodEmpresa, 'atualizou o status de uma NF-e', 13
END
GO