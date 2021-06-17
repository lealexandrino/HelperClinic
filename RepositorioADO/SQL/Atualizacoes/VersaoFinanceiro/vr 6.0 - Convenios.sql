USE Sollo
GO

insert into Recursos (Descricao) values ('CONVENIOS')
go

INSERT INTO RecursosEmpresas (CodEmpresa, CodRecurso) SELECT CodEmpresa, 32 from Empresas
go

CREATE TABLE Convenios (
	CodEmpresa int not null,
	CodConta int not null,
	ConvenioNumero varchar(70) not null,
	Descricao varchar (100) not null,
	Carteira varchar (20) not null,
	--Especie varchar (10) not null,
	SequenciaRemessa int not null,
	PadraoCNAB int not null,
	ReiniciarDiariamente bit not null,
	UtilizaVan bit not null,
	IdConvenio int,
	Excluido bit not null CONSTRAINT DF_Convenios_Excluido DEFAULT (0),
	CONSTRAINT PK_Convenios PRIMARY KEY (CodEmpresa, CodConta, ConvenioNumero)
)
GO

ALTER TABLE Convenios ADD CONSTRAINT FK_Convenios_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE Convenios ADD CONSTRAINT FK_Convenios_ContasBancarias FOREIGN KEY (CodConta) REFERENCES ContasBancarias (CodConta)
GO

CREATE PROCEDURE SP_Insert_Convenios 
@CodConta int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@ConvenioNumero varchar(70),
@Descricao varchar (100),
@Carteira varchar (20),
@SequenciaRemessa int,
--@Especie varchar (10),
@PadraoCNAB int,
@ReiniciarDiariamente bit,
@UtilizaVan bit
AS
BEGIN
	INSERT INTO Convenios (
		CodEmpresa, CodConta, ConvenioNumero, Descricao, Carteira, SequenciaRemessa, PadraoCNAB, ReiniciarDiariamente, UtilizaVan
	) VALUES (
		@CodEmpresa, @CodConta, @ConvenioNumero, @Descricao, @Carteira, @SequenciaRemessa, @PadraoCNAB, @ReiniciarDiariamente, @UtilizaVan
	)

	DECLARE @Registro varchar(700) = 'cadastrou o convênio da conta ' + cast(@CodConta as varchar) + ' com número ' + @ConvenioNumero
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 32
END
GO

CREATE PROCEDURE SP_Update_Convenios 
@CodConta int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@ConvenioNumero varchar(70),
@Descricao varchar (100),
@Carteira varchar (20),
@SequenciaRemessa int,
@PadraoCNAB int,
@ReiniciarDiariamente bit,
@UtilizaVan bit
AS
BEGIN
	UPDATE Convenios SET
		Descricao = @Descricao, Carteira = @Carteira, SequenciaRemessa = @SequenciaRemessa, PadraoCNAB = @PadraoCNAB, 
		ReiniciarDiariamente = @ReiniciarDiariamente, UtilizaVan = @UtilizaVan
	WHERE
		CodEmpresa = @CodEmpresa and CodConta = @CodConta AND ConvenioNumero = @ConvenioNumero

	DECLARE @Registro varchar(700) = 'alterou o convênio da conta ' + cast(@CodConta as varchar) + ' com número ' + @ConvenioNumero
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 32
END
GO

CREATE PROCEDURE SP_Delete_Convenios 
@CodConta int,
@CodEmpresa int,
@CodUsuarioLogado uniqueidentifier,
@ConvenioNumero varchar(70)
AS
BEGIN
	UPDATE Convenios SET Excluido = 1
	WHERE CodEmpresa = @CodEmpresa and CodConta = @CodConta and ConvenioNumero = @ConvenioNumero

	DECLARE @Registro varchar(700) = 'excluiu o convênio da conta ' + cast(@CodConta as varchar) + ' com número ' + @ConvenioNumero
	EXEC SP_RegistraAtividades @CodUsuarioLogado, @CodEmpresa, @Registro, 32
END
GO
