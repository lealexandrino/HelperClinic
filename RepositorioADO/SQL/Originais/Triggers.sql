USE Sollo
GO

CREATE TRIGGER trg_onInsert_UsuariosEmpresas ON UsuariosEmpresas AFTER INSERT
AS
BEGIN
	INSERT INTO HistoricoUsuarios (CodEmpresa, CodUsuario, Operacao, [Data])
	VALUES ((select CodEmpresa from inserted), (select CodUsuario from inserted), 1, GETDATE())
END
GO

CREATE TRIGGER trg_onInsert_LogsLogin ON LogsLogin AFTER INSERT
AS
BEGIN
	UPDATE Usuarios SET UltimoLogin = GETDATE()
	WHERE CodUsuario = (select CodUsuario from inserted)
END
GO

CREATE TRIGGER trg_afterInsert_NFes ON NFes AFTER INSERT
AS
BEGIN
	--Atualizando código da última NF-e para o cliente
	UPDATE Clientes SET CodUltimaNFE = (select CodNFE from inserted), Serie = (select Serie from inserted)
	where CodCliente = (select CodCliente from inserted)

	--Atualizando a próxima NF-e
	declare @ambiente int
	declare @CodEmpresa int

	SET @CodEmpresa = (select CodEmpresa from inserted)

	set @ambiente = (select Ambiente from ParametrosNFE where CodEmpresa = @CodEmpresa)

	IF (@ambiente = 1)
		UPDATE SeriesNFE SET CodProximaNFE = CodProximaNFE + 1 WHERE CodEmpresa = @CodEmpresa and Serie = (select Serie from inserted)
	ELSE
		UPDATE SeriesNFE SET CodProximaNFEHomologacao = CodProximaNFEHomologacao + 1 WHERE CodEmpresa = @CodEmpresa and Serie = (select Serie from inserted)
END
GO

CREATE TRIGGER trg_afterInsert_ItensNFes ON ItensNFes AFTER INSERT
AS
BEGIN
	UPDATE NFes 
		SET ValorTotalProdutos = ValorTotalProdutos + (select ValorTotal from inserted),
		ValorFinal = ValorFinal + ((select ValorTotal from inserted) - (select ValorDesconto from inserted))
	WHERE CodNFE = (select CodNFE from inserted)
		  AND Serie = (select Serie from inserted) 
		  AND CodEmpresa = (select CodEmpresa from inserted)
END
GO

CREATE TRIGGER trg_afterUpdate_ItensNFes ON ItensNFes AFTER UPDATE
AS
BEGIN
	DECLARE @CodNFE int
	DECLARE @Serie varchar(3)
	DECLARE @CodEmpresa int 

	DECLARE cursorItens CURSOR FOR select CodNFE, Serie, CodEmpresa from inserted
	OPEN cursorItens

	FETCH NEXT FROM cursorItens INTO @CodNFE, @Serie, @CodEmpresa

	WHILE @@Fetch_Status = 0
	BEGIN
		EXEC SP_AtualizaValoresConsultaNFEs @CodNFE, @Serie, @CodEmpresa

		FETCH NEXT FROM cursorItens INTO @CodNFE, @Serie, @CodEmpresa
	END

	CLOSE cursorItens
	DEALLOCATE cursorItens
END
GO

CREATE TRIGGER trg_afterDelete_ItensNFes ON ItensNFes AFTER DELETE
AS
BEGIN
	DECLARE @CodNFE int
	DECLARE @Serie varchar(3)
	DECLARE @CodEmpresa int 

	DECLARE cursorItens CURSOR FOR select CodNFE, Serie, CodEmpresa from inserted
	OPEN cursorItens

	FETCH NEXT FROM cursorItens INTO @CodNFE, @Serie, @CodEmpresa

	WHILE @@Fetch_Status = 0
	BEGIN
		EXEC SP_AtualizaValoresConsultaNFEs @CodNFE, @Serie, @CodEmpresa

		FETCH NEXT FROM cursorItens INTO @CodNFE, @Serie, @CodEmpresa
	END

	CLOSE cursorItens
	DEALLOCATE cursorItens
END
GO