USE Sollo
GO

CREATE TABLE CartoesPagamentos (
	CodEmpresa int not null,
	HashCartao varchar (50) not null,
	FinalCartao varchar (4) not null,
	CONSTRAINT PK_CartoesPagamentos PRIMARY KEY (CodEmpresa)
)
GO

ALTER TABLE CartoesPagamentos ADD CONSTRAINT FK_CartoesPagamentos_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO