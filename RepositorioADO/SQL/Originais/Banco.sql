CREATE DATABASE Sollo
ON 
( 
	NAME = 'Sollo',
    FILENAME = 'E:\Database\Sollo\Sollo_bd.mdf',
    SIZE = 20000MB,
    MAXSIZE = UNLIMITED,
    FILEGROWTH = 500MB
)
LOG ON
(
	NAME = 'Sollo_log',
    FILENAME = 'E:\Database\Sollo\Sollo_log.ldf',
    SIZE = 250MB,
    MAXSIZE = UNLIMITED,
    FILEGROWTH = 100MB
)
GO

ALTER DATABASE Sollo collate Latin1_General_CI_AI
GO

USE Sollo
GO

CREATE TABLE Logs (
	CodLog int identity (1,1) not null,
	Descricao varchar (max) not null,
	DtEvento datetime not null CONSTRAINT DF_DtEvento DEFAULT (GETDATE()),
	CONSTRAINT PK_Logs PRIMARY KEY (CodLog)
)
GO

CREATE TABLE Paises (
	CodPais int identity(1,1) NOT NULL,
	Descricao varchar(60) NOT NULL,
	Codigo int NOT NULL,
	Sigla varchar(2) NOT NULL,
	CONSTRAINT PK_Paises PRIMARY KEY (CodPais)
)
GO

CREATE TABLE Estados (
	CodEstado int identity(1,1) NOT NULL,
	Descricao varchar(30) NOT NULL,
	CodPais int NOT NULL,
	CodIBGE tinyint NOT NULL,
	PorcentFCP decimal (5, 2) NOT NULL default 0,
	CONSTRAINT PK_Estados PRIMARY KEY (CodEstado)
)
GO

CREATE INDEX IX_CodPais ON Estados (CodPais)
GO

CREATE TABLE Cidades (
	CodCidade int identity(1,1) NOT NULL,
	Descricao varchar(80) NOT NULL,
	CodEstado int NOT NULL,
	CodIBGE varchar(30) NOT NULL,
	CONSTRAINT PK_Cidades PRIMARY KEY (CodCidade)
)
GO

CREATE INDEX IX_CodEstado ON Cidades (CodEstado)
GO
CREATE INDEX IX_Descricao ON Cidades (Descricao)
GO

CREATE TABLE AliquotaEstado (
	CodEstadoOrigem int NOT NULL,
	CodEstadoDestino int NOT NULL,
	PorcentICMS decimal (5, 2) NOT NULL,
	CONSTRAINT PK_AliquotasEstados PRIMARY KEY (CodEstadoOrigem, CodEstadoDestino)
)
GO

CREATE TABLE Modulos (
	CodModulo tinyint identity (1,1),
	Descricao varchar (30) NOT NULL,
	Fiscal bit NOT NULL,
	Visivel bit NOT NULL,
	CONSTRAINT PK_Modulos PRIMARY KEY (CodModulo)
)
GO

CREATE TABLE Planos (
	CodPlano int identity (1,1),
	Descricao varchar (35) NOT NULL,
	NumDocumentos int NOT NULL,
	NumUsuarios tinyint NOT NULL,
	Valor decimal (10,2) NOT NULL,
	Excluido bit NOT NULL,
	CONSTRAINT PK_Planos PRIMARY KEY (CodPlano)
)
GO

CREATE INDEX IX_CodModulo ON Planos (CodModulo)
GO

CREATE TABLE ModulosPlanos (
	CodPlano int not null,
	CodModulo tinyint not null,
	CONSTRAINT PK_ModulosPlanos PRIMARY KEY (CodPlano, CodModulo)
)
GO

ALTER TABLE ModulosPlanos ADD CONSTRAINT FK_ModulosPlanos_CodPlano FOREIGN KEY (CodPlano) REFERENCES Planos (CodPlano)
GO
ALTER TABLE ModulosPlanos ADD CONSTRAINT FK_ModulosPlanos_CodModulo FOREIGN KEY (CodModulo) REFERENCES Modulos (CodModulo)
GO

CREATE TABLE Recursos (
	CodRecurso int identity(1,1) NOT NULL,
	Descricao varchar(40) NOT NULL,
	CONSTRAINT PK_Funcoes PRIMARY KEY(CodRecurso)
)
GO

CREATE TABLE Empresas (
	CodEmpresa int identity(1000, 1) NOT NULL,
	RazaoSocial varchar(150) NOT NULL,
	NomeFantasia varchar(60) NOT NULL,
	CNPJ varchar(18) NOT NULL,
	IM varchar(10),
	IE varchar(30),
	Responsavel varchar(80) NOT NULL,
	CPF varchar(14) NOT NULL,
	CEP varchar(9) NOT NULL,
	Endereco varchar(150) NOT NULL,
	Numero varchar(10) NOT NULL,
	CodCidade int NOT NULL,
	Bairro varchar(60),
	Telefone varchar(14) NOT NULL,
	Email varchar(60) NOT NULL,
	DtCadastro datetime NOT NULL CONSTRAINT DF_Empresas_DtCadastro  DEFAULT (GETDATE()),
	EmailContador varchar(60),
	TelefoneContador varchar(14),
	ContatoContador varchar(30),
	CNPJContador varchar(18),
	DtLimiteAcesso date NOT NULL,
	NumUsuarios tinyint NOT NULL  CONSTRAINT DF_Empresas_NumUsuarios DEFAULT ((1)),
	Trial bit NOT NULL CONSTRAINT DF_Empresas_Trial DEFAULT ((1)),
	CodPlano int NOT NULL,
	Excluido bit NOT NULL CONSTRAINT DF_Empresas_Excluido DEFAULT ((0)),
	CONSTRAINT PK_Empresas PRIMARY KEY (CodEmpresa)
)
GO

CREATE INDEX IX_CodCidade ON Empresas (CodCidade)
GO
CREATE INDEX IX_CodPlano ON Empresas (CodPlano)
GO
CREATE UNIQUE INDEX IX_CNPJ ON Empresas (CNPJ)
GO

CREATE TABLE CotasEmpresas (
	CodEmpresa int NOT NULL,
	Restantes int NOT NULL,
	Avulsas int NOT NULL CONSTRAINT DF_CotasEmpresas_Avulsas DEFAULT ((0)),
	CONSTRAINT PK_CotasEmpresas PRIMARY KEY (CodEmpresa)
)
GO

CREATE TABLE ModulosEmpresas (
	CodEmpresa int NOT NULL,
	CodModulo tinyint NOT NULL,
	CONSTRAINT PK_ModulosEmpresas PRIMARY KEY (CodEmpresa, CodModulo)
)
GO

CREATE INDEX IX_PlanosEmpresas ON ModulosEmpresas (CodEmpresa, CodPlano)
GO

--Tabela utilizada para exibição dos quadros tutoriais
CREATE TABLE RecursosEmpresas (
	CodEmpresa int NOT NULL,
	CodRecurso int NOT NULL,
	MostraTutorial bit NOT NULL CONSTRAINT DF_RecursosEmpresas_MostraTutorial DEFAULT ((1)),
	CONSTRAINT PK_RecursosEmpresas PRIMARY KEY (CodEmpresa, CodRecurso)
)
GO

CREATE TABLE QuadrosIniciais (
	CodEmpresa int NOT NULL,
	HabilitaQuadroBemVindo bit NOT NULL CONSTRAINT DF_QuadrosIniciais_HabilitaQuadroBemVindo DEFAULT ((1)),
	HabilitaQuadroClientes bit NOT NULL CONSTRAINT DF_QuadrosIniciais_HabilitaQuadroClientes DEFAULT ((1)),
	HabilitaQuadroProdutos bit NOT NULL CONSTRAINT DF_QuadrosIniciais_HabilitaQuadroProdutos DEFAULT ((1)),
	HabilitaQuadroCertificado bit NOT NULL CONSTRAINT DF_QuadrosIniciais_HabilitaQuadroCertificado DEFAULT ((1)),
	HabilitaQuadroConfiguracao bit NOT NULL CONSTRAINT DF_QuadrosIniciais_HabilitaQuadroConfiguracao DEFAULT ((1)),
	HabilitaQuadroTutoriais bit NOT NULL CONSTRAINT DF_QuadrosIniciais_HabilitaQuadroTutoriais DEFAULT ((1)),
	HabilitaQuadroTributacoes bit NOT NULL CONSTRAINT DF_QuadrosIniciais_HabilitaQuadroTributacoes DEFAULT ((1)),
	HabilitaQuadroParametros bit NOT NULL CONSTRAINT DF_QuadrosIniciais_HabilitaQuadroParametros DEFAULT ((1)),
	CONSTRAINT PK_QuadrosIniciais PRIMARY KEY (CodEmpresa)
)
GO

CREATE TABLE ParametrosEmpresas (
	CodEmpresa int NOT NULL,
	TipoEmpresa tinyint NOT NULL,
	QtdCasasDecimais int NOT NULL,
	TipoCertificado tinyint NOT NULL,
	CONSTRAINT PK_ParametrosEmpresas PRIMARY KEY (CodEmpresa)
)
GO

CREATE TABLE ParametrosNFE (
	CodEmpresa int not null,
	Ambiente tinyint not null,
	TipoEmissao tinyint not null,
	Atividade tinyint not null,
	LimiteNFePendentes tinyint not null,
	LimiteItensNFE smallint not null,
	PendenciaCliente bit not null,	
	ObrigaEnvioSequencia bit not null,
	FretePadrao tinyint not null,
	IncluiTagDuplicata bit not null,
	DesabilitaIPIZerado bit not null,
	MsgCorpoNFe varchar(2000),
	MsgCorpoReducaoICMS varchar(2000),
	MsgCorpoCreditoICMS varchar(2000),
	Especie varchar (40) not null,
	MarcaVolume varchar (60),
	NumeroVolume varchar(60),
	UnidPadrao varchar(6) not null,
	CodCFOP varchar(4) not null,
	CalculaPartilha bit not null,
	PartilhaOrigem decimal (10, 2) not null,
	PartilhaDestino decimal (10, 2) not null,
	CONSTRAINT PK_ParametrosNFE PRIMARY KEY (CodEmpresa)
)
GO

CREATE TABLE PagamentosPlanos (
	CodRequisicao uniqueidentifier NOT NULL,
	CodEmpresa int NOT NULL,
	Valor decimal(10, 2) NOT NULL,
	DtRegistro datetime NOT NULL,
	DtVencimento date NOT NULL,
	DtLimiteAcesso date NOT NULL,
	UsuariosAdicionais tinyint NOT NULL,
	CodPlano int NOT NULL,
	CodBoleto int NOT NULL,
	NumeroBoleto varchar(60) NOT NULL,
	TokenBoleto varchar(100) NOT NULL,
	Situacao tinyint NOT NULL,
	DtPago datetime,
	CONSTRAINT PK_Pagamentos PRIMARY KEY (CodRequisicao)
)
GO

CREATE INDEX IX_CodEmpresa ON PagamentosPlanos (CodEmpresa)
GO
CREATE INDEX IX_CodBoleto ON PagamentosPlanos (CodBoleto)
GO

CREATE TABLE PagamentosCotasAvulsas (
	CodRequisicao uniqueidentifier NOT NULL,
	CodEmpresa int NOT NULL,
	Valor decimal(10, 2) NOT NULL,
	QtdDocumentos int NOT NULL,
	DtRegistro datetime NOT NULL CONSTRAINT DF_PagamentosCotasAvulsas_DtRegistro DEFAULT (GETDATE()),
	DtVencimento date NOT NULL,
	CodBoleto int NOT NULL,
	NumeroBoleto varchar(60) NOT NULL,
	TokenBoleto varchar(100) NOT NULL,
	Situacao tinyint NOT NULL CONSTRAINT DF_PagamentosCotasAvulsas_Situacao DEFAULT ((0)),
	DtPago datetime,
	CONSTRAINT PK_PagamentosCotasAvulsas PRIMARY KEY (CodRequisicao)
)
GO

CREATE INDEX IX_CodEmpresa ON PagamentosCotasAvulsas (CodEmpresa)
GO
CREATE INDEX IX_CodBoleto ON PagamentosCotasAvulsas (CodBoleto)
GO

CREATE TABLE PagamentosUsuariosAvulsos (
	CodRequisicao uniqueidentifier NOT NULL,
	CodEmpresa int NOT NULL,
	Valor decimal(10, 2) NOT NULL,
	QtdUsuarios tinyint NOT NULL,
	DtRegistro datetime NOT NULL CONSTRAINT DF_PagamentosUsuariosAvulsos_DtRegistro DEFAULT (GETDATE()),
	DtVencimento date NOT NULL,
	CodBoleto int NOT NULL,
	NumeroBoleto varchar(60) NOT NULL,
	TokenBoleto varchar(100) NOT NULL,
	Situacao tinyint NOT NULL CONSTRAINT DF_PagamentosUsuariosAvulsos_Situacao DEFAULT ((0)),
	DtPago datetime,
	CONSTRAINT PK_PagamentosUsuariosAvulsos PRIMARY KEY (CodRequisicao)
)
GO

CREATE INDEX IX_CodEmpresa ON PagamentosUsuariosAvulsos (CodEmpresa)
GO
CREATE INDEX IX_CodBoleto ON PagamentosUsuariosAvulsos (CodBoleto)
GO

CREATE TABLE SeriesNFE (
	CodEmpresa int NOT NULL,
	Serie varchar (3) NOT NULL,
	CodProximaNFE int NOT NULL,
	CodProximaNFEHomologacao int NOT NULL,
	CONSTRAINT PK_SeriesNFE PRIMARY KEY (CodEmpresa, Serie)
)
GO

CREATE INDEX IX_CodEmpresa ON SeriesNFE (CodEmpresa)
GO

CREATE TABLE Usuarios (
	CodUsuario uniqueidentifier NOT NULL,
	Nome varchar(60) NOT NULL,
	Email varchar(60) NOT NULL,
	Senha varchar(max) NOT NULL,
	Telefone varchar(14),
	Celular varchar(16),
	DtCadastro datetime NOT NULL,
	UltimoLogin datetime CONSTRAINT DF_Usuarios_DtCadastro DEFAULT (getdate()),
	CONSTRAINT PK_Usuarios PRIMARY KEY (CodUsuario)
)
GO

CREATE UNIQUE INDEX IX_Email_Usuarios ON Usuarios (Email)
GO

CREATE TABLE GruposUsuarios (
	CodGrupo int identity(1,1) NOT NULL,
	CodEmpresa int NOT NULL,
	Descricao varchar(30) NOT NULL,
	TipoGrupo tinyint NOT NULL,
	Excluido bit NOT NULL CONSTRAINT DF_GruposUsuarios_Excluido DEFAULT ((0)),
	CONSTRAINT PK_GruposUsuarios PRIMARY KEY (CodGrupo)
)
GO

CREATE INDEX IX_CodEmpresa ON GruposUsuarios (CodEmpresa, Excluido)
GO

CREATE TABLE DireitosGruposUsuarios (
	CodGrupo int NOT NULL,
	CodRecurso int NOT NULL,
	Consultar bit NOT NULL default 0,
	Cadastrar bit NOT NULL default 0,
	Alterar bit NOT NULL default 0,
	Excluir bit NOT NULL default 0,
	CONSTRAINT PK_DireitosUsuarios PRIMARY KEY(CodGrupo, CodRecurso)
)
GO

CREATE INDEX IX_CodGrupo ON DireitosGruposUsuarios (CodGrupo)
GO
CREATE INDEX IX_CodRecurso ON DireitosGruposUsuarios (CodRecurso)
GO

CREATE TABLE DireitosNFe (
	CodGrupo int NOT NULL,
	Consultar bit NOT NULL,
	Cadastrar bit NOT NULL,
	Editar bit NOT NULL,
	Gerar bit NOT NULL,
	Cancelar bit NOT NULL,
	Inutilizar bit NOT NULL,
	CartaCorrecao bit NOT NULL,
	CONSTRAINT PK_DireitosNFe PRIMARY KEY(CodGrupo)
)
GO

CREATE TABLE UsuariosEmpresas (
	CodEmpresa int NOT NULL,
	CodUsuario uniqueidentifier NOT NULL,
	CodGrupo int NOT NULL,
	CodSessao uniqueidentifier,
	UltimaAtividade datetime,
	CodAprovacao uniqueidentifier NOT NULL CONSTRAINT DF_UsuariosEmpresas_CodAprovacao DEFAULT (newid()),
	[Root] bit NOT NULL CONSTRAINT DF_UsuariosEmpresas_Root DEFAULT ((0)),
	Enviado bit NOT NULL CONSTRAINT DF_UsuariosEmpresas_Enviado DEFAULT ((0)),
	Aprovado bit NOT NULL CONSTRAINT DF_UsuariosEmpresas_Aprovado DEFAULT ((0)),
	Bloqueado bit NOT NULL CONSTRAINT DF_UsuariosEmpresas_Bloqueado DEFAULT ((0)),
	Excluido bit NOT NULL CONSTRAINT DF_UsuariosEmpresas_Excluido DEFAULT ((0)),
	CONSTRAINT PK_UsuariosEmpresas PRIMARY KEY (CodUsuario, CodEmpresa)
)
GO

CREATE INDEX IX_CodEmpresa ON UsuariosEmpresas (CodEmpresa, Excluido)
GO
CREATE INDEX IX_CodUsuario ON UsuariosEmpresas (CodUsuario)
GO
CREATE INDEX IX_CodGrupo ON UsuariosEmpresas (CodGrupo)
GO
CREATE INDEX IX_CodSessao ON UsuariosEmpresas (CodSessao)
GO

CREATE TABLE LogsLogin (
	CodSessao uniqueidentifier NOT NULL CONSTRAINT DF_LogsLogin_CodSessao DEFAULT (NEWID()),
	CodUsuario uniqueidentifier NOT NULL,
	CodEmpresa int NOT NULL,
	[Data] datetime NOT NULL CONSTRAINT DF_LogsLogin_Data DEFAULT (GETDATE()),
	IP varchar (15),
	CONSTRAINT PK_LogsLogin PRIMARY KEY(CodSessao)
)
GO

CREATE INDEX IX_CodEmpresa ON LogsLogin (CodEmpresa)
GO
CREATE INDEX IX_CodUsuario ON LogsLogin (CodUsuario)
GO
CREATE INDEX IX_CodUsuarioCodEmpresa ON LogsLogin (CodUsuario, CodEmpresa)
GO

CREATE TABLE LogsAtividadesUsuarios (
	CodAtividade int identity(1,1) NOT NULL,
	CodEmpresa int NOT NULL,
	CodUsuario uniqueidentifier NOT NULL,
	CodSessao uniqueidentifier NOT NULL,
	Descricao varchar(700) NOT NULL,
	[Data] datetime NOT NULL CONSTRAINT DF_LogsAtividadesUsuarios_Data DEFAULT (GETDATE()),
	CodRecurso int NOT NULL,
	CONSTRAINT PK_LogsAtividades PRIMARY KEY(CodAtividade)
)
GO

CREATE INDEX IX_CodEmpresa ON LogsAtividadesUsuarios (CodEmpresa)
GO
CREATE INDEX IX_CodUsuario ON LogsAtividadesUsuarios (CodUsuario)
GO
CREATE INDEX IX_CodSessao ON LogsAtividadesUsuarios (CodSessao)
GO
CREATE INDEX IX_CodEmpresaCodUsuario ON LogsAtividadesUsuarios (CodEmpresa, CodUsuario)
GO

CREATE TABLE HistoricoUsuarios (
	CodHistorico int identity (1,1) NOT NULL,
	CodEmpresa int NOT NULL,
	CodUsuario uniqueidentifier NOT NULL,
	[Data] datetime NOT NULL CONSTRAINT DF_HistoricoUsuarios_Data DEFAULT (GETDATE()),
	Operacao int NOT NULL,
	CONSTRAINT PK_HistoricoUsuarios PRIMARY KEY (CodHistorico)
)
GO

CREATE INDEX IX_CodEmpresa ON HistoricoUsuarios (CodEmpresa)
GO
CREATE INDEX IX_CodUsuario ON HistoricoUsuarios (CodUsuario)
GO
CREATE INDEX IX_CodEmpresaCodUsuario ON HistoricoUsuarios (CodEmpresa, CodUsuario)
GO

CREATE TABLE CFOPs (
	CodCFOP varchar(4) NOT NULL,
	Descricao varchar(310) NOT NULL,
	Tipo tinyint NOT NULL,
	CONSTRAINT PK_CFOPs PRIMARY KEY(CodCFOP)
)
GO

CREATE TABLE GruposProdutos (
	CodGrupo int identity (1,1) NOT NULL,
	CodEmpresa int NOT NULL,
	Descricao varchar(30) NOT NULL,
	Excluido bit NOT NULL CONSTRAINT DF_GruposProdutos_Excluido DEFAULT ((0)),
	CONSTRAINT PK_CodGrupo PRIMARY KEY (CodGrupo)
)
GO

CREATE INDEX IX_CodEmpresa ON GruposProdutos (CodEmpresa, Excluido)
GO

CREATE TABLE GruposClientes (
	CodGrupo int identity (1,1) NOT NULL,
	CodEmpresa int NOT NULL,
	Descricao varchar(30) NOT NULL,
	Excluido bit NOT NULL CONSTRAINT DF_GruposClientes_Excluido DEFAULT ((0)),
	CONSTRAINT PK_GruposClientes PRIMARY KEY (CodGrupo)
)
GO

CREATE INDEX IX_CodEmpresa ON GruposClientes (CodEmpresa, Excluido)
GO

CREATE TABLE Transportadoras (
	CodTransportadora int identity(1,1) NOT NULL,
	CodEmpresa int NOT NULL,
	Nome varchar(60) NOT NULL,
	Email varchar(60),
	TipoPessoa tinyint NOT NULL,
	CpfCnpj varchar (18) NOT NULL,
	Telefone varchar(16),
	IE varchar(20),
	CEP varchar(9) NOT NULL,
	Endereco varchar(60) NOT NULL,
	Numero varchar(10) NOT NULL,
	Complemento varchar(60),
	Bairro varchar(60) NOT NULL,
	CodCidade int NOT NULL,
	TipoFrete int NOT NULL,
	Observacoes varchar(500),
	Excluido bit NOT NULL CONSTRAINT DF_Transportadoras_Excluido DEFAULT ((0)),
	CONSTRAINT PK_Transportadoras PRIMARY KEY (CodTransportadora)
)
GO

CREATE INDEX IX_CodEmpresa ON Transportadoras (CodEmpresa, Excluido)
GO

CREATE TABLE Clientes (
	CodCliente int identity (1,1) NOT NULL,
	CodEmpresa int NOT NULL,
	CodGrupo int NOT NULL,
	CodTransportadora int,
	TipoPessoa tinyint NOT NULL,
	CpfCnpjPassaporte varchar (18) NOT NULL,
	Nome varchar(60) NOT NULL,
	Telefone varchar(14),
	Atividade int NOT NULL,
	IM varchar(10),
	IE varchar(30),
	Suframa varchar(9),
	LimiteItensNFE int NOT NULL,
	CodUltimaNFE int,
	Serie varchar (3),
	EnviaNFEEmail bit NOT NULL,
	IsentaIPI bit NOT NULL,
	CreditaICMS bit NOT NULL,
	AbatePISCOFINSSUF bit NOT NULL,
	CalculaDescontoSuf bit NOT NULL,
	LimiteCredito decimal(10,2) NOT NULL,
	EmailContador varchar(60),
	NomeContador varchar(60),
	TelefoneContador varchar(16),
	Observacoes varchar(500),
	DtCadastro date NOT NULL CONSTRAINT DF_Clientes_DtCadastro DEFAULT (getdate()),
	Bloqueado bit NOT NULL CONSTRAINT DF_Clientes_Bloqueado DEFAULT ((0)),
	Excluido bit NOT NULL CONSTRAINT DF_Clientes_Excluido DEFAULT ((0)),
	CONSTRAINT PK_Clientes PRIMARY KEY (CodCliente)
)
GO

CREATE INDEX IX_CodEmpresa ON Clientes (CodEmpresa, Excluido)
GO
CREATE INDEX IX_CodGrupo ON Clientes (CodGrupo)
GO
CREATE INDEX IX_CodTransportadora ON Clientes (CodGrupo)
GO

CREATE TABLE EnderecosClientes (
	CodCliente int NOT NULL,
	TipoEndereco bit NOT NULL,
	CEP varchar(9) NOT NULL,
	Endereco varchar(60) NOT NULL,
	Numero varchar(10) NOT NULL,
	Complemento varchar(60),
	Bairro varchar(60) NOT NULL,
	CodCidade int NOT NULL,
	CONSTRAINT PK_EnderecosClientes PRIMARY KEY (CodCliente, TipoEndereco)
)
GO

CREATE TABLE ContatosClientes (
	CodCliente int NOT NULL,
	CodContato tinyint NOT NULL,
	Nome varchar(60) NOT NULL,
	Email varchar(60),
	Telefone varchar(16),
	CONSTRAINT PK_ContatosClientes PRIMARY KEY (CodCliente, CodContato)
)
GO

CREATE TABLE CondicoesPagamentosClientes (
	CodCliente int NOT NULL,
	Condicao1 int NOT NULL,
	Condicao2 int NOT NULL,
	Condicao3 int NOT NULL,
	Condicao4 int NOT NULL,
	Condicao5 int NOT NULL,
	Condicao6 int NOT NULL,
	Condicao7 int NOT NULL,
	Condicao8 int NOT NULL,
	Condicao9 int NOT NULL,
	Condicao10 int NOT NULL,
	Condicao11 int NOT NULL,
	Condicao12 int NOT NULL,
	CONSTRAINT PK_CondicoesPagamentosClientes PRIMARY KEY (CodCliente)
)
GO

CREATE TABLE Marcas (
	CodMarca int identity(1,1) NOT NULL,
	CodEmpresa int NOT NULL,
	Descricao varchar(30) NOT NULL,
	Excluido bit NOT NULL CONSTRAINT DF_Marcas_Excluido DEFAULT ((0)),
	CONSTRAINT PK_Marcas PRIMARY KEY (CodMarca)
)
GO

CREATE INDEX IX_CodEmpresa ON Marcas (CodEmpresa, Excluido)
GO

CREATE TABLE Fornecedores (
	CodFornecedor int identity(1,1) NOT NULL,
	CodEmpresa int NOT NULL,
	Nome varchar(60) NOT NULL,
	Telefone varchar(14),
	TipoPessoa tinyint NOT NULL,
	CpfCnpj varchar (18),
	IE varchar(20),
	EnviaNFEEmail bit NOT NULL,
	Observacoes varchar(500),
	Excluido bit NOT NULL CONSTRAINT DF_Fornecedores_Excluido DEFAULT ((0)),
	CONSTRAINT PK_Fornecedores PRIMARY KEY (CodFornecedor)
)
GO

CREATE INDEX IX_CodEmpresa ON Fornecedores (CodEmpresa, Excluido)
GO

CREATE TABLE EnderecosFornecedores (
	CodFornecedor int NOT NULL,
	TipoEndereco bit NOT NULL,
	CEP varchar(9) NOT NULL,
	Endereco varchar(60) NOT NULL,
	Numero varchar(10) NOT NULL,
	Complemento varchar(60),
	Bairro varchar(60) NOT NULL,
	CodCidade int NOT NULL,
	CONSTRAINT PK_EnderecosFornecedores PRIMARY KEY (CodFornecedor, TipoEndereco)
)
GO

CREATE TABLE ContatosFornecedores (
	CodFornecedor int NOT NULL,
	CodContato tinyint NOT NULL,
	Nome varchar(60) NOT NULL,
	Email varchar(60),
	Telefone varchar(16),
	CONSTRAINT PK_ContatosFornecedores PRIMARY KEY (CodFornecedor, CodContato)
)
GO

CREATE TABLE CondicoesPagamentosFornecedores (
	CodFornecedor int NOT NULL,
	Condicao1 int NOT NULL,
	Condicao2 int NOT NULL,
	Condicao3 int NOT NULL,
	Condicao4 int NOT NULL,
	Condicao5 int NOT NULL,
	Condicao6 int NOT NULL,
	Condicao7 int NOT NULL,
	Condicao8 int NOT NULL,
	Condicao9 int NOT NULL,
	Condicao10 int NOT NULL,
	Condicao11 int NOT NULL,
	Condicao12 int NOT NULL,
	CONSTRAINT PK_CondicoesPagamentosFornecedores PRIMARY KEY (CodFornecedor)
)
GO

CREATE TABLE NCMs (
	CodNCM varchar(8) NOT NULL,
	Descricao varchar(200) NOT NULL,
	AliqFederal decimal(5, 3) NOT NULL CONSTRAINT DF_NCMs_AliqFederal DEFAULT ((0)),
	AliqEstadual decimal(5, 3) NOT NULL CONSTRAINT DF_NCMs_AliqEstadual DEFAULT ((0)),
	AliqMunicipal decimal(5, 3) NOT NULL CONSTRAINT DF_NCMs_AliqMunicipal DEFAULT ((0)),
	CONSTRAINT PK_NCMs PRIMARY KEY (CodNCM)
)
GO

CREATE TABLE NCMsEmpresas (
	CodEmpresa int NOT NULL,
	CodNCM varchar(8) NOT NULL,
	InfosComplementares varchar(500),
	CEST varchar(7),
	ClassificacaoFiscal varchar(3),
	CONSTRAINT PK_NCMsEmpresas PRIMARY KEY (CodNCM, CodEmpresa)
)
GO

CREATE INDEX IX_CodEmpresa ON NCMsEmpresas (CodEmpresa)
GO
CREATE INDEX IX_ClassificacaoFiscal ON NCMsEmpresas (ClassificacaoFiscal)
GO

CREATE TABLE ANPs (
	CodANP varchar (9) NOT NULL,
	Descricao varchar(100) NOT NULL,
	CONSTRAINT PK_ANPs PRIMARY KEY (CodANP)
)
GO

CREATE TABLE Produtos (
	CodProduto int identity (1,1) NOT NULL,
	CodEmpresa int NOT NULL,
	CodInterno varchar(20) NOT NULL, -- Não pode existir dois para a mesma empresa
	CodBarras varchar(14), -- Não pode existir dois para a mesma empresa
	CodBalanca varchar(7), -- Não pode existir dois para a mesma empresa
	Descricao varchar(120) NOT NULL,
	CodGrupo int NOT NULL,
	CodNCM varchar(8) NOT NULL,
	UnidComercial varchar(6) NOT NULL,
	CoefUnidade int NOT NULL CONSTRAINT DF_Produtos_CoefUnidade DEFAULT 0,
	QtdPacote smallint NOT NULL CONSTRAINT DF_Produtos_QtdPacote DEFAULT 0,
	CustoInicial decimal(21, 10) NOT NULL CONSTRAINT DF_Produtos_CustoInicial DEFAULT 0,
	DemaisCustos decimal(5, 2) NOT NULL CONSTRAINT DF_Produtos_DemaisCustos DEFAULT 0,
	CustoFinal decimal(21, 10) NOT NULL CONSTRAINT DF_Produtos_CustoFinal DEFAULT 0,
	LucroAtacado decimal(5, 2) NOT NULL CONSTRAINT DF_Produtos_LucroAtacado DEFAULT 0,
	ValorAtacado decimal(21, 10) NOT NULL CONSTRAINT DF_Produtos_ValorAtacado DEFAULT 0,
	LucroVarejo decimal(5, 2) NOT NULL CONSTRAINT DF_Produtos_LucroVarejo DEFAULT 0,
	ValorVarejo decimal(21, 10) NOT NULL CONSTRAINT DF_Produtos_ValorVarejo DEFAULT 0,
	PesoLiquido decimal(15, 3) NOT NULL CONSTRAINT DF_Produtos_PesoLiquido DEFAULT 0,
	PesoBruto decimal(15, 3) NOT NULL CONSTRAINT DF_Produtos_PesoBruto DEFAULT 0,
	Fabricante varchar(60),
	CodMarca int,
	TipoProduto varchar (1) NOT NULL CONSTRAINT DF_Produtos_TipoProduto DEFAULT 'F', -- F = Fabricação própria, R = revenda
	Origem tinyint NOT NULL CONSTRAINT DF_Produtos_Origem DEFAULT 0,
	FCI varchar(36),
	DescontoMaximo decimal(5, 2) NOT NULL CONSTRAINT DF_Produtos_DescontoMaximo DEFAULT 0,
	CodANP varchar(9),
	DemandaMinima int NOT NULL CONSTRAINT DF_Produtos_DemandaMinima DEFAULT 0,
	DemandaMaxima int NOT NULL CONSTRAINT DF_Produtos_DemandaMaxima DEFAULT 0,
	SaldoInicial decimal (12, 4) NOT NULL CONSTRAINT DF_Produtos_SaldoInicial DEFAULT 0,
	SaldoFinal decimal (12, 4) NOT NULL CONSTRAINT DF_Produtos_SaldoFinal DEFAULT 0,
	Localizacao varchar (250),
	CEST varchar(7),
	Observacoes varchar(750),
	InfosComplementares varchar(500),
	DtCadastro datetime NOT NULL CONSTRAINT DF_Produtos_DtCadastro DEFAULT (GETDATE()),
	Inativo bit NOT NULL CONSTRAINT DF_Produtos_Inativo DEFAULT ((0)),
	Visivel bit NOT NULL CONSTRAINT DF_Produtos_Visivel DEFAULT ((1)),
	Excluido bit NOT NULL CONSTRAINT DF_Produtos_Excluido DEFAULT ((0)),
	CONSTRAINT PK_Produtos PRIMARY KEY (CodProduto)
)
GO

CREATE UNIQUE INDEX IX_CodInternoEmpresa ON Produtos (CodEmpresa, CodInterno)
GO
CREATE INDEX IX_CodEmpresa ON Produtos (CodEmpresa, Visivel, Excluido)
GO
CREATE INDEX IX_CodGrupo ON Produtos (CodGrupo)
GO
CREATE INDEX IX_CodMarca ON Produtos (CodMarca)
GO
CREATE INDEX IX_CodNCM ON Produtos (CodNCM)
GO
CREATE INDEX IX_CodANP ON Produtos (CodANP)
GO

CREATE TABLE FornecedoresProdutos (
	CodProduto int NOT NULL,
	CodFornecedor int NOT NULL,
	CONSTRAINT PK_FornecedoresProdutos PRIMARY KEY (CodProduto, CodFornecedor)
)
GO

CREATE TABLE PrecosProdutosClientes (
	CodProduto int NOT NULL,
	CodCliente int NOT NULL,
	ValorVarejo decimal(21, 10) NOT NULL,
	ValorAtacado decimal(21, 10) NOT NULL,
	CONSTRAINT PK_PrecosProdutosClientes PRIMARY KEY(CodProduto, CodCliente)
)
GO

CREATE INDEX IX_CodProduto ON PrecosProdutosClientes (CodProduto)
GO
CREATE INDEX IX_CodCliente ON PrecosProdutosClientes (CodCliente)
GO

CREATE TABLE HistoricoReajuste (
	CodReajuste int identity (1,1) NOT NULL,
	CodProduto int NOT NULL,
	CodUsuario uniqueidentifier NOT NULL,
	LucroAtacado decimal(5, 2) NOT NULL,
	ValorAtacado decimal(21, 10) NOT NULL,
	LucroVarejo decimal(5, 2) NOT NULL,
	ValorVarejo decimal(21, 10) NOT NULL,
	CustoInicial decimal(21, 10) NOT NULL, 
	DemaisCustos decimal(5, 2) NOT NULL,
	CustoFinal decimal(21, 10) NOT NULL,
	[Data] datetime NOT NULL CONSTRAINT DF_HistoricoReajuste_Data DEFAULT (GETDATE()),
	CONSTRAINT PK_HistoricoReajuste PRIMARY KEY (CodReajuste)
)
GO

CREATE INDEX IX_CodProduto ON HistoricoReajuste (CodProduto)
GO

CREATE TABLE NFes (
	CodNFE int NOT NULL,
	Serie varchar(3) NOT NULL,
	CodEmpresa int NOT NULL,
	CodCFOP varchar(4) NOT NULL,
	Ambiente tinyint NOT NULL,
	DtEmissao datetime NOT NULL,
	DtSaida datetime NOT NULL,
	Transporte tinyint NOT NULL,
	TipoNFE tinyint NOT NULL,
	CodCliente int,
	CodFornecedor int,
	CodUFEmbarque int,
	LocalEmbarque varchar (60),
	CodTransportadora int,
	CalculaICMS bit NOT NULL,
	ICMS decimal (5,2),
	CalculaIPI bit NOT NULL,
	IPI decimal (5,2),
	AproveitaCreditoICMS bit,
	CreditoICMS decimal (5,2),
	TipoRef tinyint NOT NULL,
	ChaveRef varchar (44),
	BCRef decimal (10,2),
	ValorRef decimal (10,2),
	ValorCredICMSRef decimal (10,2),
	ECFRef varchar(3),
	COORef varchar(6),
	InfosComplementares varchar (5000),
	InfosComplementaresFisco varchar (2000),
	Especie varchar (60) NOT NULL,
	QtdVolume int NOT NULL,
	MarcaVolume varchar (60),
	NumeroVolume varchar(60),
	Lacres varchar (60),
	TipoFrete int NOT NULL,
	Placa varchar (8),
	CodSituacao tinyint NOT NULL,
	------- Após geração-------
	ChaveNFE varchar (44),
	---------------------------
	------ Totais da nota (final)---------
	PesoLiquido decimal (12, 3),
	PesoBruto decimal (12, 3),
	BaseCalculo decimal (15, 2),
	ValorICMS decimal (15, 2),
	ValorPIS decimal (15, 2),
	ValorCOFINS decimal (15, 2),
	BaseCalculoST decimal (15, 2),
	ValorCalculoST decimal (15, 2),
	ValorTotalProdutos decimal (15, 2),
	ValorFrete decimal (15, 2),
	ValorSeguro decimal (15, 2),
	OutrasDespesas decimal (15, 2),
	TotalIPI decimal (15, 2),
	SubTotal decimal (15, 2),
	ValorCredICMS decimal (15, 2),
	ImpostoImportacao decimal (15, 2),
	TranspFiscal decimal (15, 2),
	TotalFaturar decimal (15, 2),
	ValorDesconto decimal (15, 2),
	ValorFinal decimal (15, 2),
	ConsumidorFinal bit NOT NULL,
	---------------------------------------
	SeqEvento int NOT NULL,
	CONSTRAINT PK_NFes PRIMARY KEY (CodNFE, Serie, CodEmpresa)
)
GO

CREATE INDEX IX_CodEmpresa ON NFes (CodEmpresa)
GO
CREATE INDEX IX_CodCliente ON NFes (CodCliente)
GO
CREATE INDEX IX_CodFornecedor ON NFes (CodFornecedor)
GO
CREATE INDEX IX_CodTransportadora ON NFes (CodTransportadora)
GO

CREATE TABLE ItensNFes (
	CodNFE int NOT NULL,
	Serie varchar(3) NOT NULL,
	CodEmpresa int NOT NULL,
	CodProduto int NOT NULL,
	Descricao varchar(120) NOT NULL,
	TipoPreco tinyint NOT NULL,
	ValorUnit decimal (21, 10) NOT NULL,
	Qtd decimal (21, 10) NOT NULL,
	ValorTotal decimal (21, 10) NOT NULL,
	ValorFrete decimal (21, 10) NOT NULL,
	DescontoSuframa decimal (21, 10) NOT NULL,
	ValorDesconto decimal (21, 10) NOT NULL,
	PorcentDesconto decimal (21, 10) NOT NULL,
	ValorSeguro decimal (21, 10) NOT NULL,
	Despesas decimal (21, 10) NOT NULL,
	Unidade varchar(6) NOT NULL,
	CoefUnid int NOT NULL,
	PesoBruto decimal (21, 10) NOT NULL,
	PesoLiquido decimal (21, 10) NOT NULL,
	InfosAdicionais varchar (500),
	PorcentIPI decimal (7, 4) NOT NULL,
	PorcentICMS decimal (7, 4) NOT NULL,
	PorcentICMSInterno decimal (7, 4) NOT NULL,
	ReducICMS decimal (7, 4) NOT NULL,
	PorcentCredICMS decimal (7, 4) NOT NULL,
	IVA decimal (7, 4) NOT NULL,
	ICMSOP decimal (7, 4) NOT NULL,
	RedST decimal (7, 4) NOT NULL,
	PorcentPIS decimal (7, 4) NOT NULL,
	PorcentCOFINS decimal (7, 4) NOT NULL,
	BaseCalcIPI decimal (10, 4) NOT NULL,
	ValorIPI decimal (10, 4) NOT NULL,
	BaseCalcICMS decimal (10, 4) NOT NULL,
	ValorICMS decimal (10, 4) NOT NULL,
	ValorCredICMS decimal (10, 4) NOT NULL,
	BaseCalcICMSST decimal (10, 4) NOT NULL,
	ValorST decimal (10, 4) NOT NULL,
	ValorPIS decimal (10, 4) NOT NULL,
	ValorCOFINS decimal (10, 4) NOT NULL,
	Origem tinyint NOT NULL,
	CodNCM varchar(8) NOT NULL,
	CodCFOP varchar (4) NOT NULL,
	SomaFatura bit NOT NULL,
	CompoeValorTotal bit NOT NULL,
	ConsumoProprio bit NOT NULL,
	CSTICMS int NOT NULL,
	CSTIPI tinyint NOT NULL,
	CSTPIS tinyint NOT NULL,
	CSTCOFINS tinyint NOT NULL,
	EnquadIPI varchar(3),
	Pedido varchar (15),
	SeqItemPedido varchar (6),
	NrAdicao int NOT NULL,
	SeqAdicao int NOT NULL,
	ValorDescontoItem decimal(21, 10) NOT NULL,
	BaseCalcImport decimal(21, 10) NOT NULL,
	PorcentImport decimal(7, 4) NOT NULL,
	ValorImport decimal(21, 10) NOT NULL,
	Siscomex decimal (8,2) NOT NULL,
	VlrAdicional decimal (10, 2) NOT NULL,
	DrawBack varchar (11),
	RE varchar (12),
	ChaveExportacao varchar(44),
	QtdExportado decimal (11,4) NOT NULL,
	CodANP varchar (9),
	CodIF varchar (21),
	QTemp decimal (10, 2),
	CodEstado int,
	CEST varchar(7),
	QtdadeBCCombus decimal (10, 2),
	VlrAliquotaCombus decimal (10, 2),
	ValorCombus decimal (10, 2),
	VlrAliqNacional decimal (10, 2),
	VlrAliqEstadual decimal (10, 2),
	VlrICMSRemetente decimal (10, 2),
	VlrICMSDestinatario decimal (10, 2),
	CONSTRAINT PK_ItensNFe PRIMARY KEY (CodNFE, Serie, CodEmpresa, CodProduto)
)
GO

CREATE TABLE CondicoesPagamentosNFes (
	CodNFE int NOT NULL,
	Serie varchar(3) NOT NULL,
	CodEmpresa int NOT NULL,
	Numero int NOT NULL,
	[Data] date NOT NULL,
	Valor decimal (21, 10) NOT NULL
	CONSTRAINT PK_CondicoesPagamentosNFe PRIMARY KEY (CodNFE, Serie, CodEmpresa, Numero)
)
GO

CREATE TABLE DINFEs (
	CodNFE int NOT NULL,
	Serie varchar(3) NOT NULL,
	CodEmpresa int NOT NULL,
	NrDocumento varchar (12) NOT NULL,
	DtDocumento date NOT NULL,
	LocalDesembaraco varchar (60) NOT NULL,
	DtDesembaraco date NOT NULL,
	TipoTransporte tinyint NOT NULL,
	TipoFormaImportacao tinyint NOT NULL,
	CodUFDesembaraco int NOT NULL,
	UnidPadrao varchar(6) NOT NULL,
	CoefUnidade int NOT NULL,
	CNPJEncomendante varchar(18) NOT NULL,
	CodUFEncomendante int NOT NULL,
	VlrFrete decimal (10, 2) NOT NULL,
	VlrAFRMM decimal (10, 2) NOT NULL,
	VlrAduaneiro decimal (10, 2) NOT NULL,
	PorcentImpostoImportacao decimal (10, 2) NOT NULL,
	ImpostoImportacao decimal (10, 2) NOT NULL,
	TaxaSiscomex decimal (10, 2) NOT NULL,
	BaseCalcICMS decimal (10, 2) NOT NULL,
	PIS decimal (10, 2) NOT NULL,
	COFINS decimal (10, 2) NOT NULL,
	VlrAdicional decimal (10, 2) NOT NULL,
	CONSTRAINT PK_DINFE PRIMARY KEY (CodNFE, Serie, CodEmpresa)
)
GO

CREATE TABLE RegrasTributacoes (
	CodRegra int identity (1,1) NOT NULL,
	CodEmpresa int NOT NULL,
	Descricao varchar (50),
	CodCFOP varchar(4),
	CodNCM varchar(8),
	CodProduto int,
	ForcaCFOPs tinyint NOT NULL,
	CalculaIPI bit NOT NULL,
	PorcentIPI decimal (5, 2) NOT NULL,
	CodEnquadramento varchar (3),
	AgregaFreteIPI bit NOT NULL,
	CSTIPI smallint,
	CalculaICMS bit NOT NULL,
	CalculaReducICMS bit NOT NULL,
	PorcentReducICMS decimal (5, 2) NOT NULL,
	ICMSDiferido bit NOT NULL,
	CalculaCredICMS bit NOT NULL,
	PorcentCredICMS decimal (5, 2) NOT NULL,
	AgregaDespesas bit NOT NULL,
	CSTICMS smallint,
	CSOSN smallint NOT NULL,
	CalculaPIS bit NOT NULL,
	PorcentPIS decimal (5, 2) NOT NULL,
	CSTPIS smallint,
	CalculaCOFINS bit NOT NULL,
	PorcentCOFINS decimal (5, 2) NOT NULL,
	CSTCOFINS smallint,
	SubstTributaria bit NOT NULL,
	SubstTributariaRetida bit NOT NULL,
	InfosComplementares varchar (5000),
	Excluido bit NOT NULL CONSTRAINT DF_RegrasTributacoes_Excluido DEFAULT ((0)),
	CONSTRAINT PK_RegrasTributacoes PRIMARY KEY (CodRegra)
)
GO

CREATE INDEX IX_CodEmpresa ON RegrasTributacoes (CodEmpresa, Excluido)
GO
CREATE INDEX IX_CodCFOP ON RegrasTributacoes (CodCFOP)
GO
CREATE INDEX IX_CodNCM ON RegrasTributacoes (CodNCM)
GO
CREATE INDEX IX_CodProduto ON RegrasTributacoes (CodProduto)
GO

CREATE TABLE PorcentagemEstados (
	CodRegra int NOT NULL,
	CodEstado int NOT NULL,
	IVA decimal (5, 2) NOT NULL,
	ICMSOP decimal (5, 2) NOT NULL,
	CONSTRAINT PK_PorcentagemEstados PRIMARY KEY (CodRegra, CodEstado)
)
GO

CREATE TABLE CategoriasTutoriais (
	CodCategoria int identity(1,1) NOT NULL,
	Descricao varchar(30) NOT NULL,
	CONSTRAINT PK_CategoriasTutoriais PRIMARY KEY (CodCategoria)
)
GO

CREATE TABLE Tutoriais (
	CodTutorial int identity(1,1) NOT NULL,
	Descricao varchar(60) NOT NULL,
	CodCategoria int NOT NULL,
	EmbededURL varchar(100) NOT NULL,
	Thumbnail varchar (max),
	CONSTRAINT PK_Tutoriais PRIMARY KEY (CodTutorial)
)
GO

CREATE INDEX IX_CodCategoria ON Tutoriais (CodCategoria)
GO