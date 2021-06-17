USE Sollo
GO

INSERT INTO Modulos (Descricao, Fiscal, Visivel)
VALUES
('NF-e', 1, 1),
('NFS-e', 1, 1),
('CT-e', 1, 0),
('CT-e OS', 1, 0),
('MDF-e', 1, 0),
('NFC-e', 1, 0),
('ESTOQUE', 0, 0),
('FINANCEIRO', 0, 0),
('VENDAS', 0, 0),
('PDV', 0, 0),
('LOJA VIRTUAL', 0, 0),
('PDV MOBILE', 0, 0)
go

INSERT INTO Recursos(Descricao) VALUES ('GRUPOS DE USUÁRIOS')
GO

INSERT INTO Recursos(Descricao) VALUES ('USUÁRIOS')
GO

INSERT INTO Recursos(Descricao) VALUES ('GRUPOS DE PRODUTOS')
GO

INSERT INTO Recursos(Descricao) VALUES ('GRUPOS DE CLIENTES')
GO

INSERT INTO Recursos(Descricao) VALUES ('MARCAS')
GO

INSERT INTO Recursos(Descricao) VALUES ('CLIENTES')
GO

INSERT INTO Recursos(Descricao) VALUES ('TRANSPORTADORAS')
GO

INSERT INTO Recursos(Descricao) VALUES ('FORNECEDORES')
GO

INSERT INTO Recursos(Descricao) VALUES ('NCMs')
GO

INSERT INTO Recursos(Descricao) VALUES ('PRODUTOS')
GO

INSERT INTO Recursos(Descricao) VALUES ('SERVICOS')
GO

INSERT INTO Recursos(Descricao) VALUES ('VEICULOS')
GO

INSERT INTO Recursos(Descricao) VALUES ('CONDUTORES')
GO
