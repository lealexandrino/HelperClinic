USE Sollo
GO

insert into Recursos (Descricao, Visivel) values ('CONTAS', 0)
GO

insert into RecursosEmpresas select CodEmpresa, 30, 1 from Empresas
go

CREATE TABLE DireitosContas (
	CodGrupo int NOT NULL,
	Consultar bit NOT NULL,
	Cadastrar bit NOT NULL,
	Editar bit NOT NULL,
	Excluir bit NOT NULL,
	Baixa bit NOT NULL,
	GerarBoleto bit NOT NULL,
	GerarDuplicata bit NOT NULL,
	Cancelar bit NOT NULL,
	CONSTRAINT PK_DireitosContas PRIMARY KEY(CodGrupo)
)
GO

ALTER TABLE DireitosContas ADD CONSTRAINT FK_DireitosContas_GruposUsuarios FOREIGN KEY (CodGrupo) REFERENCES GruposUsuarios (CodGrupo)
GO

CREATE TABLE Contas (
	CodConta int identity (1,1) not null,
	CodEmpresa int not null,
	Descricao varchar (50) not null,
	TipoConta tinyint not null,
	Situacao tinyint not null CONSTRAINT DF_Contas_Situacao DEFAULT (0),
	CodResponsavel int,
	DtLancamento date not null,
	Vencimento date not null,
	Vlr decimal (10, 2) not null,
	NrDocumento varchar (50),
	CodContaBancaria int not null,
	ConvenioNumero varchar(70),
	CodCategoria int not null,
	Ocorrencia tinyint not null,
	DiaVencimento tinyint not null,
	Dia2Vencimento tinyint not null,
	DiaSemana tinyint not null,
	Parcelas tinyint not null,
	ContaPai int,
	TokenBoleto varchar (100),
	CodRequisicao uniqueidentifier,
	CodBoleto int,
	IdIntegracao varchar (40),
	SituacaoBoleto tinyint,
	CodVenda int,
	CodNFe int,
	Excluido bit not null CONSTRAINT DF_Contas_Excluido DEFAULT (0),
	CONSTRAINT PK_Contas PRIMARY KEY (CodConta)
)
GO

ALTER TABLE Contas ADD CONSTRAINT FK_Contas_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE Contas ADD CONSTRAINT FK_Contas_ContasBancarias FOREIGN KEY (CodContaBancaria) REFERENCES ContasBancarias (CodConta)
GO
ALTER TABLE Contas ADD CONSTRAINT FK_Contas_CategoriasContas FOREIGN KEY (CodCategoria) REFERENCES CategoriasContas (CodCategoria)
GO
ALTER TABLE Contas ADD CONSTRAINT FK_Contas_Contas FOREIGN KEY (ContaPai) REFERENCES Contas (CodConta)
GO

CREATE PROCEDURE SP_Insert_DireitosContas
@CodGrupo int,
@Consultar bit,
@Cadastrar bit,
@Editar bit,
@Excluir bit,
@Baixa bit,
@Cancelar bit,
@GerarBoleto bit,
@GerarDuplicata bit
AS
BEGIN
	INSERT INTO DireitosContas (CodGrupo, Consultar, Cadastrar, Editar, Excluir, Baixa, Cancelar, GerarBoleto, GerarDuplicata)
	VALUES (@CodGrupo, @Consultar, @Cadastrar, @Editar, @Excluir, @Baixa, @Cancelar, @GerarBoleto, @GerarDuplicata)
END
GO

CREATE PROCEDURE SP_Delete_DireitosContas
@CodGrupo int
AS
BEGIN
	DELETE FROM DireitosContas WHERE CodGrupo = @CodGrupo
END
GO

CREATE PROCEDURE SP_ValidaDireitosContas
@CodUsuario uniqueidentifier,
@CodEmpresa int,
@Acao int = 0,
@Resposta int output
AS
BEGIN	
	DECLARE @CodGrupo int
	SET @CodGrupo = (select CodGrupo from UsuariosEmpresas where CodUsuario = @CodUsuario and CodEmpresa = @CodEmpresa)
	
	DECLARE @TipoGrupo tinyint
	SET @TipoGrupo = (select TipoGrupo From GruposUsuarios WHERE CodGrupo = @CodGrupo)

	IF(@TipoGrupo = 1)
	begin
		SET @Resposta = 1
		return
	end

	IF(@Acao = 1)
		SET @Resposta =  (select Consultar from DireitosContas where CodGrupo = @CodGrupo)
	else if(@Acao = 2)
		SET @Resposta =  (select Cadastrar from DireitosContas where CodGrupo = @CodGrupo)
	else if (@Acao = 3)
		SET @Resposta =  (select Editar from DireitosContas where CodGrupo = @CodGrupo)
	else if (@Acao = 4)
		SET @Resposta =  (select Excluir from DireitosContas where CodGrupo = @CodGrupo)
	else if (@Acao = 5)
		SET @Resposta =  (select Baixa from DireitosContas where CodGrupo = @CodGrupo)
	else if (@Acao = 6)
		SET @Resposta =  (select GerarBoleto from DireitosContas where CodGrupo = @CodGrupo)
	else if (@Acao = 7)
		SET @Resposta =  (select GerarDuplicata from DireitosContas where CodGrupo = @CodGrupo)
	else if (@Acao = 8)
		SET @Resposta =  (select Cancelar from DireitosContas where CodGrupo = @CodGrupo)
END
GO

CREATE PROCEDURE SP_Insert_Contas
@CodConta int output,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@Descricao varchar (50),
@TipoConta tinyint,
@CodResponsavel int = null,
@Vencimento date,
@Vlr decimal (10, 2),
@NrDocumento varchar (50) = null,
@CodContaBancaria int,
@ConvenioNumero varchar(70) = null,
@CodCategoria int,
@Ocorrencia tinyint,
@DiaVencimento tinyint,
@Dia2Vencimento tinyint,
@DiaSemana tinyint,
@Parcelas tinyint
AS
BEGIN
	DECLARE @Documento varchar (50)

	IF (@Ocorrencia between 2 and 6)
		SET @Documento = @NrDocumento + '/' + CONVERT(VARCHAR, 1)
	ELSE
		SET @Documento = @NrDocumento

	INSERT INTO Contas (
		CodEmpresa, Descricao, TipoConta, CodResponsavel, DtLancamento, Vencimento, Vlr, NrDocumento, CodContaBancaria, 
		ConvenioNumero, CodCategoria, Ocorrencia, DiaVencimento, Dia2Vencimento, DiaSemana, Parcelas
	)
	VALUES (
		@CodEmpresa, @Descricao, @TipoConta, @CodResponsavel, GETDATE(), @Vencimento, @Vlr, @Documento, @CodContaBancaria, 
		@ConvenioNumero, @CodCategoria, @Ocorrencia, @DiaVencimento, @Dia2Vencimento, @DiaSemana, @Parcelas
	)

	SET @CodConta = SCOPE_IDENTITY()

	DECLARE @Registro varchar(700) = 'cadastrou a conta : ' + cast(@CodConta as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 30

	IF (@Ocorrencia > 1)
	BEGIN
		DECLARE @CodContaPai int
		SET @CodContaPai = @CodConta			

		DECLARE @Count tinyint
		SET @Count = 2

		IF (@Ocorrencia = 2 or @Ocorrencia = 3)
		BEGIN
			IF (@Ocorrencia = 3)
				SET @Parcelas = 12

			SELECT @Vencimento = DATEFROMPARTS (YEAR(@Vencimento), MONTH(@Vencimento), @DiaVencimento)

			WHILE @Count <= @Parcelas
			BEGIN
				SET @Vencimento = DATEADD(MONTH, 1, @Vencimento)

				SET @Documento = @NrDocumento + '/' + CONVERT(VARCHAR, @Count)

				INSERT INTO Contas (
					CodEmpresa, Descricao, TipoConta, CodResponsavel, DtLancamento, Vencimento, Vlr, NrDocumento, CodContaBancaria, 
					ConvenioNumero, CodCategoria, Ocorrencia, DiaVencimento, Dia2Vencimento, DiaSemana, Parcelas, ContaPai
				)
				VALUES (
					@CodEmpresa, @Descricao, @TipoConta, @CodResponsavel, GETDATE(), @Vencimento, @Vlr, @Documento, @CodContaBancaria, 
					@ConvenioNumero, @CodCategoria, @Ocorrencia, @DiaVencimento, @Dia2Vencimento, @DiaSemana, @Parcelas, @CodContaPai
				)

				SET @Count = @Count + 1
			END
		END
		ELSE IF (@Ocorrencia >= 4 and @Ocorrencia <= 6)
		BEGIN
			DECLARE @Increment tinyint

			IF (@Ocorrencia = 4)
			BEGIN
				SET @Parcelas = 3
				SET @Increment = 3
			END
			ELSE IF (@Ocorrencia = 5)
			BEGIN
				SET @Parcelas = 2
				SET @Increment = 6
			END
			ELSE IF (@Ocorrencia = 6)
			BEGIN
				SET @Parcelas = 1
				SET @Increment = 12
			END

			SELECT @Vencimento = DATEFROMPARTS (YEAR(@Vencimento), MONTH(@Vencimento), @DiaVencimento)

			WHILE @Count <= @Parcelas
			BEGIN
				SET @Vencimento = DATEADD(MONTH, @Increment, @Vencimento)
				
				SET @Documento = @NrDocumento + '/' + CONVERT(VARCHAR, @Count)

				INSERT INTO Contas (
					CodEmpresa, Descricao, TipoConta, CodResponsavel, DtLancamento, Vencimento, Vlr, NrDocumento, CodContaBancaria, 
					ConvenioNumero, CodCategoria, Ocorrencia, DiaVencimento, Dia2Vencimento, DiaSemana, Parcelas, ContaPai
				)
				VALUES (
					@CodEmpresa, @Descricao, @TipoConta, @CodResponsavel, GETDATE(), @Vencimento, @Vlr, @Documento, @CodContaBancaria, 
					@ConvenioNumero, @CodCategoria, @Ocorrencia, @DiaVencimento, @Dia2Vencimento, @DiaSemana, @Parcelas, @CodContaPai
				)

				SET @Count = @Count + 1
			END
		END		
		ELSE IF (@Ocorrencia = 7)
		BEGIN
			SELECT @Vencimento = DATEFROMPARTS (YEAR(@Vencimento), MONTH(@Vencimento), @DiaVencimento)

			DECLARE @Vencimento2 datetime
			SELECT @Vencimento2 = DATEFROMPARTS (YEAR(@Vencimento), MONTH(@Vencimento), @Dia2Vencimento)

			WHILE @Count <= 12
			BEGIN
				SET @Vencimento = DATEADD(MONTH, 1, @Vencimento)
				SET @Vencimento2 = DATEADD(MONTH, 1, @Vencimento2)
				
				INSERT INTO Contas (
					CodEmpresa, Descricao, TipoConta, CodResponsavel, DtLancamento, Vencimento, Vlr, NrDocumento, CodContaBancaria, 
					ConvenioNumero, CodCategoria, Ocorrencia, DiaVencimento, Dia2Vencimento, DiaSemana, Parcelas, ContaPai
				)
				VALUES (
					@CodEmpresa, @Descricao, @TipoConta, @CodResponsavel, GETDATE(), @Vencimento, @Vlr, @NrDocumento, @CodContaBancaria, 
					@ConvenioNumero, @CodCategoria, @Ocorrencia, @DiaVencimento, @Dia2Vencimento, @DiaSemana, @Parcelas, @CodContaPai
				)
				
				INSERT INTO Contas (
					CodEmpresa, Descricao, TipoConta, CodResponsavel, DtLancamento, Vencimento, Vlr, NrDocumento, CodContaBancaria, 
					ConvenioNumero, CodCategoria, Ocorrencia, DiaVencimento, Dia2Vencimento, DiaSemana, Parcelas, ContaPai
				)
				VALUES (
					@CodEmpresa, @Descricao, @TipoConta, @CodResponsavel, GETDATE(), @Vencimento2, @Vlr, @NrDocumento, @CodContaBancaria, 
					@ConvenioNumero, @CodCategoria, @Ocorrencia, @DiaVencimento, @Dia2Vencimento, @DiaSemana, @Parcelas, @CodContaPai
				)

				SET @Count = @Count + 1
			END
		END
		ELSE IF (@Ocorrencia = 8)
		BEGIN
			DECLARE @DiaAtual int
			SELECT @DiaAtual = DATEPART(WEEKDAY, @Vencimento)

			IF (@DiaAtual < @DiaSemana)
				select @Vencimento = DATEADD(WEEK, 1, DATEADD(DAY, @DiaSemana - @DiaAtual, @Vencimento))
			ELSE IF (@DiaAtual > @DiaSemana)
				select @Vencimento = DATEADD(week, 1, DATEADD(DAY, @DiaSemana - @DiaAtual, @Vencimento))
			ELSE
				SET @Vencimento = DATEADD(WEEK, 1, @Vencimento)

			WHILE @Count <= 52
			BEGIN
				INSERT INTO Contas (
					CodEmpresa, Descricao, TipoConta, CodResponsavel, DtLancamento, Vencimento, Vlr, NrDocumento, CodContaBancaria, 
					ConvenioNumero, CodCategoria, Ocorrencia, DiaVencimento, Dia2Vencimento, DiaSemana, Parcelas, ContaPai
				)
				VALUES (
					@CodEmpresa, @Descricao, @TipoConta, @CodResponsavel, GETDATE(), @Vencimento, @Vlr, @NrDocumento, @CodContaBancaria, 
					@ConvenioNumero, @CodCategoria, @Ocorrencia, @DiaVencimento, @Dia2Vencimento, @DiaSemana, @Parcelas, @CodContaPai
				)
				
				SET @Vencimento = DATEADD(WEEK, 1, @Vencimento)
				SET @Count = @Count + 1
			END
		END
	END
END
GO

CREATE PROCEDURE SP_Update_Contas
@CodConta int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@Descricao varchar (50),
@CodResponsavel int = null,
@Vencimento date,
@Vlr decimal (10, 2),
@NrDocumento varchar (50) = null,
@CodContaBancaria int,
@ConvenioNumero varchar(70) = null,
@CodCategoria int
AS
BEGIN
	UPDATE Contas SET Descricao = @Descricao, CodResponsavel = @CodResponsavel, Vencimento = @Vencimento, Vlr = @Vlr, 
	NrDocumento = @NrDocumento, CodContaBancaria = @CodContaBancaria, ConvenioNumero = @ConvenioNumero, CodCategoria = @CodCategoria
	WHERE CodConta = @CodConta AND CodEmpresa = @CodEmpresa

	DECLARE @Registro varchar(700) = 'atualizou a conta : ' + cast(@CodConta as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 30
END
GO

CREATE PROCEDURE SP_Delete_Contas
@CodConta int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@ExcluirTodos bit
AS
BEGIN
	UPDATE Contas SET Excluido = 1
	WHERE CodConta = @CodConta AND CodEmpresa = @CodEmpresa

	IF (@ExcluirTodos = 1)
	BEGIN
		DECLARE @CodContaPai int
		SET @CodContaPai = (select ContaPai from Contas WHERE CodConta = @CodConta AND CodEmpresa = @CodEmpresa)

		IF (@CodContaPai is null)
			SET @CodContaPai = @CodConta

		UPDATE Contas SET Excluido = 1
		WHERE ContaPai = @CodContaPai and Situacao = 0
	END

	DECLARE @Registro varchar(700) = 'excluiu a conta : ' + cast(@CodConta as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 30
END
GO

CREATE PROCEDURE SP_Baixa_Contas
@CodConta int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@BaixarTodas bit
AS
BEGIN
	UPDATE Contas SET Situacao = 1
	WHERE CodConta = @CodConta AND CodEmpresa = @CodEmpresa

	IF (@BaixarTodas = 1)
	BEGIN
		DECLARE @CodContaPai int
		SET @CodContaPai = (select ContaPai from Contas WHERE CodConta = @CodConta AND CodEmpresa = @CodEmpresa)

		IF (@CodContaPai is null)
			SET @CodContaPai = @CodConta

		UPDATE Contas SET Situacao = 1
		WHERE ContaPai = @CodContaPai and Situacao = 0
	END
	
	DECLARE @Registro varchar(700) = 'deu baixa na conta : ' + cast(@CodConta as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 30
END
GO

CREATE PROCEDURE SP_Cancela_Contas
@CodConta int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@CancelarTodas bit
AS
BEGIN
	UPDATE Contas SET Situacao = 0
	WHERE CodConta = @CodConta AND CodEmpresa = @CodEmpresa

	IF (@CancelarTodas = 1)
	BEGIN
		DECLARE @CodContaPai int
		SET @CodContaPai = (select ContaPai from Contas WHERE CodConta = @CodConta AND CodEmpresa = @CodEmpresa)

		IF (@CodContaPai is null)
			SET @CodContaPai = @CodConta

		UPDATE Contas SET Situacao = 0
		WHERE ContaPai = @CodContaPai and Situacao = 1
	END
	
	DECLARE @Registro varchar(700) = 'cancelou a conta : ' + cast(@CodConta as varchar)
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 30
END
GO

CREATE PROCEDURE SP_PagaBoleto_ContasReceber
@CodRequisicao uniqueidentifier
AS
BEGIN
	UPDATE Contas SET Situacao = 1 WHERE CodRequisicao = @CodRequisicao	
END
GO

CREATE PROCEDURE SP_SalvaBoletoRegistrado
@CodConta int,
@CodEmpresa int,
@Situacao tinyint,
@IdIntegracao varchar(40)
AS
BEGIN
	DECLARE @CodContaBancaria int
	DECLARE @ConvenioNumero varchar (70)
	(select @CodContaBancaria = CodContaBancaria, @ConvenioNumero = ConvenioNumero from Contas WHERE CodConta = @CodConta and CodEmpresa = @CodEmpresa)

	UPDATE Contas SET SituacaoBoleto = @Situacao, IdIntegracao = @IdIntegracao
	WHERE CodConta = @CodConta and CodEmpresa = @CodEmpresa

	UPDATE Convenios SET SequenciaRemessa = SequenciaRemessa + 1
	WHERE CodEmpresa = @CodEmpresa and CodConta = @CodContaBancaria and ConvenioNumero = @ConvenioNumero
END
GO