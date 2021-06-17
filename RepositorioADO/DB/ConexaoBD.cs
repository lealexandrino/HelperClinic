using System;
using System.Data.SqlClient;

namespace Repositorio.Conexao
{
    internal static class ConexaoBD
    {
        public static SqlConnection GetConexao()
        {
            try
            {
                string connection = string.Empty;

#if DEBUG
                connection = "data source=LEANDRO-PC;initial catalog=ClinicPulse;Integrated Security=True;MultipleActiveResultSets=True";
#else
                connection = "data source=localhost, 32568;initial catalog=Sollo;user id=sa;password=#@bdInteGRA-sis!;";
#endif

                SqlConnection _connection = new SqlConnection(connection);

                _connection.Open();

                return _connection;
            }
            catch (Exception ex)
            {
                Logs.Envia(ex, "GetConexao", "ConexaoBD");
                throw new ArgumentException("Ocorreu um erro ao abrir conexão com o banco de dados");
            }
        }
    }
}