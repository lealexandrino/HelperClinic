USE Sollo
GO

ALTER TABLE Estados ADD CONSTRAINT FK_Estados_Paises FOREIGN KEY (CodPais) REFERENCES Paises (CodPais)
GO
ALTER TABLE AliquotaEstado ADD CONSTRAINT FK_CodEstadoOrigem FOREIGN KEY (CodEstadoOrigem) REFERENCES Estados (CodEstado)
GO
ALTER TABLE AliquotaEstado ADD CONSTRAINT FK_CodEstadoDestino FOREIGN KEY (CodEstadoDestino) REFERENCES Estados (CodEstado)
GO
ALTER TABLE Cidades ADD CONSTRAINT FK_Cidades_Estados FOREIGN KEY (CodEstado) REFERENCES Estados (CodEstado)
GO
ALTER TABLE Empresas ADD CONSTRAINT FK_Empresas_Cidades FOREIGN KEY (CodCidade) REFERENCES Cidades (CodCidade)
GO
ALTER TABLE Empresas ADD CONSTRAINT FK_Empresas_Planos FOREIGN KEY (CodPlano) REFERENCES Planos (CodPlano)
GO
ALTER TABLE CotasEmpresas ADD CONSTRAINT FK_CotasEmpresas_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE ModulosEmpresas ADD CONSTRAINT FK_ModulosEmpresas_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE ModulosEmpresas ADD CONSTRAINT FK_ModulosEmpresas_Modulos FOREIGN KEY (CodModulo) REFERENCES Modulos (CodModulo)
GO
ALTER TABLE ModulosPlanos ADD CONSTRAINT FK_ModulosPlanos_CodPlano FOREIGN KEY (CodPlano) REFERENCES Planos (CodPlano)
GO
ALTER TABLE ModulosPlanos ADD CONSTRAINT FK_ModulosPlanos_CodModulo FOREIGN KEY (CodModulo) REFERENCES Modulos (CodModulo)
GO
ALTER TABLE RecursosEmpresas ADD CONSTRAINT FK_RecursosEmpresas_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE QuadrosIniciais ADD CONSTRAINT FK_QuadrosIniciais_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE ParametrosEmpresas ADD CONSTRAINT FK_ParametrosEmpresas_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE ParametrosNFE ADD CONSTRAINT FK_ParametrosNFE_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE ParametrosNFE ADD CONSTRAINT FK_ParametroNFE_CFOPs FOREIGN KEY (CodCFOP) REFERENCES CFOPS (CodCFOP)
GO
ALTER TABLE PagamentosPlanos ADD CONSTRAINT FK_PagamentosPlanos_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE PagamentosPlanos ADD CONSTRAINT FK_PagamentosPlanos_Planos FOREIGN KEY (CodPlano) REFERENCES Planos (CodPlano)
GO
ALTER TABLE PagamentosCotasAvulsas ADD CONSTRAINT FK_PagamentosCotasAvulsas_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE PagamentosUsuariosAvulsos ADD CONSTRAINT FK_PagamentosUsuariosAvulsos_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE SeriesNFE ADD CONSTRAINT FK_SeriesNFE_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE GruposUsuarios ADD CONSTRAINT FK_GruposUsuarios_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE DireitosGruposUsuarios ADD CONSTRAINT FK_DireitosUsuarios_GruposUsuarios FOREIGN KEY (CodGrupo) REFERENCES GruposUsuarios (CodGrupo)
GO
ALTER TABLE DireitosGruposUsuarios ADD CONSTRAINT FK_DireitosUsuarios_Recursos FOREIGN KEY (CodRecurso) REFERENCES Recursos (CodRecurso)
GO
ALTER TABLE DireitosNFe ADD CONSTRAINT FK_DireitosNFe_GruposUsuarios FOREIGN KEY (CodGrupo) REFERENCES GruposUsuarios (CodGrupo)
GO
ALTER TABLE UsuariosEmpresas ADD CONSTRAINT FK_UsuariosEmpresas_LogsLogin FOREIGN KEY (CodSessao) REFERENCES LogsLogin (CodSessao)
GO
ALTER TABLE UsuariosEmpresas ADD CONSTRAINT FK_UsuariosEmpresas_Usuarios FOREIGN KEY (CodUsuario) REFERENCES Usuarios (CodUsuario)
GO
ALTER TABLE UsuariosEmpresas ADD CONSTRAINT FK_UsuariosEmpresas_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE UsuariosEmpresas ADD CONSTRAINT FK_UsuariosEmpresas_GruposUsuarios FOREIGN KEY (CodGrupo) REFERENCES GruposUsuarios (CodGrupo)
GO
ALTER TABLE LogsLogin ADD CONSTRAINT FK_LogsLogin_Usuarios FOREIGN KEY (CodUsuario) REFERENCES Usuarios (CodUsuario)
GO
ALTER TABLE LogsLogin ADD CONSTRAINT FK_LogsLogin_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE LogsAtividadesUsuarios ADD CONSTRAINT FK_LogsAtividadesUsuarios_GruposUsuarios FOREIGN KEY (CodUsuario) REFERENCES Usuarios (CodUsuario)
GO
ALTER TABLE LogsAtividadesUsuarios ADD CONSTRAINT FK_LogsAtividadesUsuarios_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE LogsAtividadesUsuarios ADD CONSTRAINT FK_LogsAtividadesUsuarios_LogsLogin FOREIGN KEY (CodSessao) REFERENCES LogsLogin (CodSessao)
GO
ALTER TABLE LogsAtividadesUsuarios ADD CONSTRAINT FK_LogsAtividadesUsuarios_Recursos FOREIGN KEY (CodRecurso) REFERENCES Recursos (CodRecurso)
GO
ALTER TABLE HistoricoUsuarios ADD CONSTRAINT FK_HistoricoUsuarios_Usuarios FOREIGN KEY (CodUsuario) REFERENCES Usuarios (CodUsuario)
GO
ALTER TABLE HistoricoUsuarios ADD CONSTRAINT FK_HistoricoUsuarios_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE GruposProdutos ADD CONSTRAINT FK_GruposProdutos_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE GruposClientes ADD CONSTRAINT FK_GruposClientes_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE Transportadoras ADD CONSTRAINT FK_Transportadoras_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE Transportadoras ADD CONSTRAINT FK_Transportadoras_Cidades FOREIGN KEY (CodCidade) REFERENCES Cidades (CodCidade)
GO
ALTER TABLE Clientes ADD CONSTRAINT FK_Clientes_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE Clientes ADD CONSTRAINT FK_Clientes_GruposClientes FOREIGN KEY (CodGrupo) REFERENCES GruposClientes (CodGrupo)
GO
ALTER TABLE EnderecosClientes ADD CONSTRAINT FK_EnderecosClientes_Clientes FOREIGN KEY (CodCliente) REFERENCES Clientes (CodCliente)
GO
ALTER TABLE EnderecosClientes ADD CONSTRAINT FK_EnderecosClientes_Cidades FOREIGN KEY (CodCidade) REFERENCES Cidades (CodCidade)
GO
ALTER TABLE ContatosClientes ADD CONSTRAINT FK_ContatosClientes_Clientes FOREIGN KEY (CodCliente) REFERENCES Clientes (CodCliente)
GO
ALTER TABLE CondicoesPagamentosClientes ADD CONSTRAINT FK_CondicoesPagamentosClientes_Clientes FOREIGN KEY (CodCliente) REFERENCES Clientes (CodCliente)
GO
ALTER TABLE Marcas ADD CONSTRAINT FK_Marcas_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE Fornecedores ADD CONSTRAINT FK_Fornecedores_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE EnderecosFornecedores ADD CONSTRAINT FK_EnderecosFornecedores_Fornecedores FOREIGN KEY (CodFornecedor) REFERENCES Fornecedores (CodFornecedor)
GO
ALTER TABLE EnderecosFornecedores ADD CONSTRAINT FK_EnderecosFornecedores_Cidades FOREIGN KEY (CodCidade) REFERENCES Cidades (CodCidade)
GO
ALTER TABLE ContatosFornecedores ADD CONSTRAINT FK_ContatosFornecedores_Fornecedores FOREIGN KEY (CodFornecedor) REFERENCES Fornecedores (CodFornecedor)
GO
ALTER TABLE CondicoesPagamentosFornecedores ADD CONSTRAINT FK_CondicoesPagamentosFornecedores_Fornecedores FOREIGN KEY (CodFornecedor) REFERENCES Fornecedores (CodFornecedor)
GO
ALTER TABLE NCMsEmpresas ADD CONSTRAINT FK_NCMsEmpresas_NCMs FOREIGN KEY (CodNCM) REFERENCES NCMs (CodNCM)
GO
ALTER TABLE NCMsEmpresas ADD CONSTRAINT FK_NCMsEmpresas_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE Produtos ADD CONSTRAINT FK_Produtos_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE Produtos ADD CONSTRAINT FK_Produtos_NCMs FOREIGN KEY (CodNCM) REFERENCES NCMs (CodNCM)
GO
ALTER TABLE Produtos ADD CONSTRAINT FK_Produtos_ANPs FOREIGN KEY (CodANP) REFERENCES ANPs (CodANP)
GO
ALTER TABLE Produtos ADD CONSTRAINT FK_Produtos_Marcas FOREIGN KEY (CodMarca) REFERENCES Marcas (CodMarca)
GO
ALTER TABLE Produtos ADD CONSTRAINT FK_Produtos_GrupoProdutos FOREIGN KEY (CodGrupo) REFERENCES GruposProdutos (CodGrupo)
GO
ALTER TABLE FornecedoresProdutos ADD CONSTRAINT FK_FornecedoresProdutos_Produtos FOREIGN KEY (CodProduto) REFERENCES Produtos (CodProduto)
GO
ALTER TABLE FornecedoresProdutos ADD CONSTRAINT FK_FornecedoresProdutos_Fornecedores FOREIGN KEY (CodFornecedor) REFERENCES Fornecedores (CodFornecedor)
GO
ALTER TABLE PrecosProdutosClientes ADD CONSTRAINT FK_PrecosProdutosClientes_Produtos FOREIGN KEY (CodProduto) REFERENCES Produtos (CodProduto)
GO
ALTER TABLE PrecosProdutosClientes ADD CONSTRAINT FK_PrecosProdutosClientes_Clientes FOREIGN KEY (CodCliente) REFERENCES Clientes (CodCliente)
GO
ALTER TABLE HistoricoReajuste ADD CONSTRAINT FK_HistoricoReajuste_Produtos FOREIGN KEY (CodProduto) REFERENCES Produtos (CodProduto)
GO
ALTER TABLE NFes ADD CONSTRAINT FK_NFes_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE NFes ADD CONSTRAINT FK_NFes_CFOPs FOREIGN KEY (CodCFOP) REFERENCES CFOPs (CodCFOP)
GO
ALTER TABLE NFes ADD CONSTRAINT FK_NFes_Clientes FOREIGN KEY (CodCliente) REFERENCES Clientes (CodCliente)
GO
ALTER TABLE NFes ADD CONSTRAINT FK_NFes_Fornecedores FOREIGN KEY (CodFornecedor) REFERENCES Fornecedores (CodFornecedor)
GO
ALTER TABLE NFes ADD CONSTRAINT FK_NFes_Transportadoras FOREIGN KEY (CodTransportadora) REFERENCES Transportadoras (CodTransportadora)
GO
ALTER TABLE ItensNFes ADD CONSTRAINT FK_ItensNFes_NFes FOREIGN KEY (CodNFE, Serie, CodEmpresa) REFERENCES NFes (CodNFE, Serie, CodEmpresa)
GO
ALTER TABLE ItensNFes ADD CONSTRAINT FK_ItensNFes_Produtos FOREIGN KEY (CodProduto) REFERENCES Produtos (CodProduto)
GO
ALTER TABLE ItensNFes ADD CONSTRAINT FK_ItensNFes_NCMs FOREIGN KEY (CodNCM) REFERENCES NCMs (CodNCM)
GO
ALTER TABLE ItensNFes ADD CONSTRAINT FK_ItensNFes_CFOPS FOREIGN KEY (CodCFOP) REFERENCES CFOPS (CodCFOP)
GO
ALTER TABLE ItensNFes ADD CONSTRAINT FK_ItensNFes_ANPs FOREIGN KEY (CodANP) REFERENCES ANPs (CodANP)
GO
ALTER TABLE ItensNFes ADD CONSTRAINT FK_ItensNFes_Estados FOREIGN KEY (CodEstado) REFERENCES Estados (CodEstado)
GO
ALTER TABLE CondicoesPagamentosNFes ADD CONSTRAINT FK_CondicoesPagamentosNFes_NFes FOREIGN KEY (CodNFE, Serie, CodEmpresa) REFERENCES NFes (CodNFE, Serie, CodEmpresa)
GO
ALTER TABLE DINFEs ADD CONSTRAINT FK_DINFEs_NFEs FOREIGN KEY (CodNFE, Serie, CodEmpresa) REFERENCES NFes (CodNFE, Serie, CodEmpresa)
GO
ALTER TABLE DINFEs ADD CONSTRAINT FK_DINFEs_Estados_Desembaraco FOREIGN KEY (CodUFDesembaraco) REFERENCES Estados (CodEstado)
GO
ALTER TABLE DINFEs ADD CONSTRAINT FK_DINFEs_Estados_Encomendante FOREIGN KEY (CodUFEncomendante) REFERENCES Estados (CodEstado)
GO
ALTER TABLE RegrasTributacoes ADD CONSTRAINT FK_RegrasTributacoes_Empresas FOREIGN KEY (CodEmpresa) REFERENCES Empresas (CodEmpresa)
GO
ALTER TABLE RegrasTributacoes ADD CONSTRAINT FK_RegrasTributacoes_CFOPs FOREIGN KEY (CodCFOP) REFERENCES CFOPs (CodCFOP)
GO
ALTER TABLE RegrasTributacoes ADD CONSTRAINT FK_RegrasTributacoes_NCMs FOREIGN KEY (CodNCM) REFERENCES NCMs (CodNCM)
GO
ALTER TABLE RegrasTributacoes ADD CONSTRAINT FK_RegrasTributacoes_Produtos FOREIGN KEY (CodProduto) REFERENCES Produtos (CodProduto)
GO
ALTER TABLE PorcentagemEstados ADD CONSTRAINT FK_PorcentagemEstados_RegrasTributacoes FOREIGN KEY (CodRegra) REFERENCES RegrasTributacoes (CodRegra)
GO
ALTER TABLE PorcentagemEstados ADD CONSTRAINT FK_PorcentagemEstados_Estados FOREIGN KEY (CodEstado) REFERENCES Estados (CodEstado)
GO
ALTER TABLE Tutoriais ADD CONSTRAINT FK_Tutoriais_CategoriasTutoriais FOREIGN KEY (CodCategoria) REFERENCES CategoriasTutoriais (CodCategoria)
GO