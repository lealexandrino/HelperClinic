using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using static Aplicacao.Conexao.ConexaoBD;

namespace Aplicacao.BDOperations
{
    internal class Transacao: IDisposable
    {
        private SqlConnection _connection;
        private SqlTransaction _transaction;
        public List<SqlParameter> Parameters { get; set; }

        public Transacao()
        {
            _connection = GetConexao();
            _transaction = _connection.BeginTransaction();
            Parameters = new List<SqlParameter>();
        }

        public void Procedure(string ProcedureName)
        {
            SqlCommand command = null;

            try
            {
                command = new SqlCommand(ProcedureName, _connection);
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Transaction = _transaction;

                for (int i = 0; i < Parameters.Count; i++)
                    command.Parameters.AddWithValue(Parameters[i].ParameterName, Parameters[i].Value).Direction = Parameters[i].Direction;

                command.ExecuteNonQuery();

                for (int i = 0; i < Parameters.Count; i++)
                {
                    if (Parameters[i].Direction == System.Data.ParameterDirection.Output)
                        Parameters[i].Value = command.Parameters[i].Value;
                }
            }
            finally
            {
                command.Dispose();
            }
        }

        public void Commit()
        {
            _transaction.Commit();
            _connection.Close();
            _connection.Dispose();
            _transaction.Dispose();
            GC.Collect();
        }

        public void Rollback()
        {
            _transaction.Rollback();
            _connection.Close();
            _connection.Dispose();
            _transaction.Dispose();
            GC.Collect();
        }

        public void Dispose()
        {
            _connection.Close();
            _connection.Dispose();
            _transaction.Dispose();

            _connection = null;
            _transaction = null;

            GC.Collect();
        }
    }
}