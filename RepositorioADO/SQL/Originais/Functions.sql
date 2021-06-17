USE Sollo
GO

CREATE FUNCTION fnc_ProximaNFE (@CodEmpresa int, @Serie varchar (3))
RETURNS int
AS
BEGIN
	declare @ambiente int
	declare @retorno int
	set @ambiente = (select Ambiente from ParametrosNFE where CodEmpresa = @CodEmpresa)

	IF (@ambiente = 1)
		set @retorno = (select CodProximaNFE from SeriesNFE where CodEmpresa = @CodEmpresa and Serie = @Serie)
	else
		set @retorno = (select CodProximaNFEHomologacao from SeriesNFE where CodEmpresa = @CodEmpresa and Serie = @Serie)

	return @retorno
END
GO

CREATE FUNCTION fnc_ValidaNFesPendentes (@CodEmpresa int)
RETURNS INT
AS
BEGIN
	declare @retorno int
	declare @Limite int
	set @Limite = (select LimiteNFEPendentes from ParametrosNFE where CodEmpresa = @CodEmpresa)

	if(@Limite = 0)
		return 1;

	if((select count(1) from NFes where CodEmpresa = @CodEmpresa and CodSituacao = 1)
			>=
		@Limite
	  )
		set @retorno = 0;
	else
		set @retorno = 1;

	return @retorno;
END
GO

CREATE FUNCTION fnc_getMonthName(@Month int) RETURNS VARCHAR (20)
AS
BEGIN
	DECLARE @mes varchar (20)

	IF (@Month = 1)
		SET @mes =  'Janeiro'
	ELSE IF (@Month = 2)
		SET @mes =  'Fevereiro'
	ELSE IF (@Month = 3)
		SET @mes =  'Março'
	ELSE IF (@Month = 4)
		SET @mes =  'Abril'
	ELSE IF (@Month = 5)
		SET @mes =  'Maio'
	ELSE IF (@Month = 6)
		SET @mes =  'Junho'
	ELSE IF (@Month = 7)
		SET @mes =  'Julho'
	ELSE IF (@Month = 8)
		SET @mes =  'Agosto'
	ELSE IF (@Month = 9)
		SET @mes =  'Setembro'
	ELSE IF (@Month = 10)
		SET @mes =  'Outubro'
	ELSE IF (@Month = 11)
		SET @mes =  'Novembro'
	ELSE IF (@Month = 12)
		SET @mes =  'Dezembro'
	ELSE
		SET @mes =  ''

	RETURN @mes
END
GO

CREATE FUNCTION fnc_TipoGrupoUsuario (@CodEmpresa int, @CodUsuario uniqueidentifier)
RETURNS INT
AS
BEGIN
	DECLARE @CodGrupo INT
	DECLARE @TipoGrupo INT

	select @CodGrupo = CodGrupo from UsuariosEmpresas where CodUsuario = @CodUsuario and CodEmpresa = @CodEmpresa

	select @TipoGrupo = TipoGrupo from GruposUsuarios where CodGrupo = @CodGrupo

	RETURN @TipoGrupo
END
GO