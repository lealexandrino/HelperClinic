USE ClinicPulse
GO

CREATE TABLE GruposContas (
	CodGrupo int identity(1,1) not null,
	Clinica varchar(200) not null,
	Descricao varchar (30) not null,
	Excluido bit not null CONSTRAINT DF_GruposContas_Excluido DEFAULT (0),
	CONSTRAINT PF_GruposContas PRIMARY KEY (CodGrupo)
)
GO

CREATE INDEX IX_CodEmpresa ON GruposContas (Clinica)
GO

CREATE PROCEDURE SP_Insert_GruposContas
@Clinica varchar(200),
@Descricao varchar (30)
AS
BEGIN
	INSERT INTO GruposContas (Clinica, Descricao) 
	VALUES (@Clinica, @Descricao)
END
GO

CREATE PROCEDURE SP_Update_GruposContas
@CodGrupo int,
@Clinica varchar(200),
@Descricao varchar (50)
AS
BEGIN
	UPDATE GruposContas SET Descricao = @Descricao
	WHERE CodGrupo = @CodGrupo AND Clinica = @Clinica
END
GO

CREATE PROCEDURE SP_Delete_GruposContas
@CodGrupo int,
@Clinica varchar(200)
AS
BEGIN
	UPDATE GruposContas SET Excluido = 1
	WHERE CodGrupo = @CodGrupo AND Clinica = @Clinica
END
GO