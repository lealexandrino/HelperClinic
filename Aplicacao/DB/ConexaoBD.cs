using System;
using System.Data.SqlClient;

namespace Aplicacao.Conexao
{
    internal static class ConexaoBD
    {
        public static SqlConnection GetConexao()
        {
            try
            {
                string connection = string.Empty;

#if DEBUG
                connection = "data source=localhost;initial catalog=ClinicPulse;user id=sa;password=#@bdInteGRA-sis!";
#else
                connection = "data source=localhost, 32568;initial catalog=ClinicPulse;user id=sa;password=#@bdInteGRA-sis!";
#endif

                SqlConnection _connection = new SqlConnection(connection);

                _connection.Open();

                return _connection;
            }
            catch (Exception ex)
            {
                throw new ArgumentException("Ocorreu um erro ao abrir conexão com o banco de dados");
            }
        }
    }
}