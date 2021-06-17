USE ClinicPulse
GO

CREATE TABLE CategoriasContas (
	CodCategoria int identity (1,1) not null,
	Clinica varchar(200) not null,
	Descricao varchar (60) not null,
	CodGrupo int not null,
	TipoConta tinyint not null,
	TipoValor tinyint not null,
	VlrLimite decimal (10, 2) not null,
	PorcentAviso decimal (10, 2) not null,	
	Excluido bit not null CONSTRAINT DF_CategoriasContas_Excluido DEFAULT (0),
	CONSTRAINT PK_CategoriaContas PRIMARY KEY (CodCategoria)
)
GO

CREATE INDEX IX_CodEmpresa ON CategoriasContas (Clinica)
GO

ALTER TABLE CategoriasContas ADD CONSTRAINT FK_CategoriasContas_GruposContas FOREIGN KEY (CodGrupo) REFERENCES GruposContas (CodGrupo)
GO

CREATE PROCEDURE SP_Insert_CategoriasContas
@Clinica varchar(200),
@Descricao varchar (60),
@CodGrupo int,
@TipoConta tinyint,
@TipoValor tinyint,
@VlrLimite decimal (10, 2),
@PorcentAviso decimal (10, 2)	
AS
BEGIN
	INSERT INTO CategoriasContas (
		Clinica, Descricao, CodGrupo, TipoConta, TipoValor, VlrLimite, PorcentAviso
	)
	VALUES (
		@Clinica, @Descricao, @CodGrupo, @TipoConta, @TipoValor, @VlrLimite, @PorcentAviso
	)

END
GO

CREATE PROCEDURE SP_Update_CategoriasContas
@CodCategoria int,
@Clinica varchar(200),
@Descricao varchar (60),
@CodGrupo int,
@TipoConta tinyint,
@TipoValor tinyint,
@VlrLimite decimal (10, 2),
@PorcentAviso decimal (10, 2)	
AS
BEGIN
	UPDATE CategoriasContas SET Descricao = @Descricao, CodGrupo = @CodGrupo, TipoConta = @TipoConta,
	TipoValor = @TipoValor, VlrLimite = @VlrLimite, PorcentAviso = @PorcentAviso
	WHERE CodCategoria = @CodCategoria AND Clinica = @Clinica

END
GO

CREATE PROCEDURE SP_Delete_CategoriasContas
@CodCategoria int,
@Clinica varchar(200)
AS
BEGIN
	IF (EXISTS(select top 1 * from Contas where CodCategoria = @CodCategoria AND Excluido = 0 AND Situacao = 0))
	BEGIN
		RAISERROR('ERRO001: Não é possível excluir esta conta bancária, pois há contas a pagar/receber pendentes atreladas a ela', 16, 1)
		return
	END

	UPDATE CategoriasContas SET Excluido = 1
	WHERE CodCategoria = @CodCategoria AND Clinica = @Clinica
END
GO