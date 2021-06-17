USE ClinicPulse
GO

CREATE TABLE ContasBancarias (
	CodConta int identity (1, 1) not null,
	Clinica varchar(200) not null,
	CodBanco varchar (3) not null,
	Agencia varchar (10) not null,
	AgenciaDV tinyint not null,
	Conta varchar (10) not null,
	ContaDV tinyint not null,
	Descricao varchar(50) not null,
	Gerente varchar(60),
	Email varchar(60),
	Telefone varchar(15),
	Endereco varchar(60),
	CEP varchar(9),
	GeraBoleto bit not null,
	TipoBoleto tinyint not null,
	IdContaBoleto int,
	TokenBoletoFacil varchar (70),
	Multa decimal (10, 2) not null CONSTRAINT DF_ContasBancarias_Multa DEFAULT (0),
	DiasPagamento tinyint not null CONSTRAINT DF_ContasBancarias_DiasPagamento DEFAULT (0),
	Juros decimal (10, 2) not null CONSTRAINT DF_ContasBancarias_Juros DEFAULT (0),
	Desconto decimal (10, 2) not null CONSTRAINT DF_ContasBancarias_Desconto DEFAULT (0),
	DiasDesconto tinyint not null CONSTRAINT DF_ContasBancarias_DiasDesconto DEFAULT (0),
	Limite decimal (10, 2) not null CONSTRAINT DF_ContasBancarias_Limite DEFAULT (0),
	Ativo bit not null CONSTRAINT DF_ContasBancarias_Ativo DEFAULT (1),
	Excluido bit not null CONSTRAINT DF_ContasBancarias_Excluido DEFAULT (0),
	CONSTRAINT PK_ContasBancarias PRIMARY KEY (CodConta)
)
GO

CREATE INDEX IX_CodEmpresa ON ContasBancarias (Clinica)
GO

ALTER TABLE ContasBancarias ADD CONSTRAINT FK_Contas_Bancos FOREIGN KEY (CodBanco) REFERENCES Bancos (CodBanco)
GO

CREATE PROCEDURE SP_Insert_ContasBancarias
@CodConta int output,
@Clinica varchar(200),
@CodBanco varchar (3),
@Agencia varchar (10),
@AgenciaDV tinyint,
@Conta varchar (10),
@ContaDV tinyint,
@Descricao varchar(50),
@Gerente varchar(60) = null,
@Email varchar(60) = null,
@Telefone varchar(15) = null,
@Endereco varchar(60) = null,
@CEP varchar(9) = null,
@GeraBoleto bit,
@TipoBoleto tinyint,
@TokenBoletoFacil varchar (70) = null,
@Multa decimal (10, 2),
@DiasPagamento tinyint,
@Juros decimal (10, 2),
@Desconto decimal (10, 2),
@DiasDesconto tinyint,
@Limite decimal (10, 2)
AS
BEGIN
	INSERT INTO ContasBancarias (
		Clinica, CodBanco, Agencia, AgenciaDV, Conta, ContaDV, Descricao, Gerente, Email, Telefone, Endereco, CEP, GeraBoleto, 
		TipoBoleto, TokenBoletoFacil, DiasPagamento, Multa, Juros, Desconto, DiasDesconto, Limite
	)
	VALUES (
		@Clinica, @CodBanco, @Agencia, @AgenciaDV, @Conta, @ContaDV, @Descricao, @Gerente, @Email, @Telefone, @Endereco, @CEP, @GeraBoleto, 
		@TipoBoleto, @TokenBoletoFacil, @DiasPagamento, @Multa, @Juros, @Desconto, @DiasDesconto, @Limite
	)

	SET @CodConta = SCOPE_IDENTITY()

END
GO

CREATE PROCEDURE SP_Update_ContasBancarias
@CodConta int,
@Clinica varchar(200),
@CodBanco varchar (3),
@Agencia varchar (10),
@AgenciaDV tinyint,
@Conta varchar (10),
@ContaDV tinyint,
@Descricao varchar(50),
@Gerente varchar(60) = null,
@Email varchar(60) = null,
@Telefone varchar(15) = null,
@Endereco varchar(60) = null,
@CEP varchar(9) = null,
@GeraBoleto bit,
@TipoBoleto tinyint,
@TokenBoletoFacil varchar (70) = null,
@Multa decimal (10, 2),
@DiasPagamento tinyint,
@Juros decimal (10, 2),
@Desconto decimal (10, 2),
@DiasDesconto tinyint,
@Limite decimal (10, 2)
AS
BEGIN
	UPDATE ContasBancarias SET CodBanco = @CodBanco, Agencia = @Agencia, AgenciaDV = @AgenciaDV, Conta = @Conta, 
	ContaDV = @ContaDV, Descricao = @Descricao, Gerente = @Gerente, Email = @Email, Telefone = @Telefone,
	Endereco = @Endereco, CEP = @CEP, GeraBoleto = @GeraBoleto, TipoBoleto = @TipoBoleto, TokenBoletoFacil = @TokenBoletoFacil,
	DiasPagamento = @DiasPagamento, Multa = @Multa, Juros = @Juros, Desconto = @Desconto, DiasDesconto = @DiasDesconto, Limite = @Limite
	WHERE CodConta = @CodConta AND Clinica = @Clinica

END
GO

CREATE PROCEDURE SP_Delete_ContasBancarias
@CodConta int,
@Clinica varchar(200)
AS
BEGIN
	IF (EXISTS(select top 1 * from Contas where CodContaBancaria = @CodConta AND Excluido = 0 AND Situacao = 0))
	BEGIN
		RAISERROR('ERRO001: Não é possível excluir esta conta bancária, pois há contas a pagar/receber pendentes atreladas a ela', 16, 1)
		return
	END
	
	UPDATE ContasBancarias SET Excluido = 1
	WHERE CodConta = @CodConta AND Clinica = @Clinica

END
GO
GO