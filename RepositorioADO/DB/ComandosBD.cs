using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Reflection;
using static Repositorio.Conexao.ConexaoBD;

namespace Repositorio.BDOperations
{
    internal static class ComandosBD
    {
        /// <summary>
        /// Retorna um valor único de uma consulta SQL
        /// </summary>
        /// <param name="sql"></param>
        /// <returns></returns>
        public static object GetValue(string sql)
        {
            SqlConnection _connection = GetConexao();
            SqlCommand command = null;

            try
            {
                command = new SqlCommand(sql, _connection);

                return command.ExecuteScalar();
            }
            finally
            {
                _connection.Close();
                _connection.Dispose();
                command.Dispose();
                //GC.Collect();
            }
        }

        public static DataTable Select(string sql)
        {
            SqlConnection _connection = GetConexao();
            SqlDataAdapter adapt = null;

            try
            {
                adapt = new SqlDataAdapter(sql, _connection);
                DataTable _Tabela = new DataTable();
                adapt.Fill(_Tabela);

                return _Tabela;
            }
            finally
            {
                _connection.Close();
                _connection.Dispose();
                adapt.Dispose();
                GC.Collect();
            }
        }

        public static T GetObject<T>(this DataRow row) where T : new()
        {
            T item = new T();

            foreach (DataColumn c in row.Table.Columns)
            {
                PropertyInfo p = item.GetType().GetProperty(c.ColumnName);

                if (p != null && row[c] != DBNull.Value && p.CanWrite)
                {
                    if (p.PropertyType == typeof(double)) //Corrigindo problma com type double e decimal
                        p.SetValue(item, Convert.ToDouble(row[c]), null);
                    else if (p.PropertyType == typeof(bool))
                        p.SetValue(item, Convert.ToBoolean(Convert.ToInt16(row[c])), null);
                    else if (p.PropertyType == typeof(int)) //Corrigindo problma com type int
                        p.SetValue(item, Convert.ToInt32(row[c]), null);
                    else
                        p.SetValue(item, row[c], null);
                }
            }

            return item;
        }

        /// <summary>
        /// Método que executa um comando SQL no banco (PROCEDURE) e retorna os valores dos parâmetros
        /// </summary>
        /// <param name="sqlCommand">Nome da procedure</param>
        /// <param name="parameters">Parâmetros com valores</param>
        public static void Procedure(string sqlCommand, ref List<SqlParameter> parameters, bool Transaction = true)
        {
            SqlConnection _connection = GetConexao();
            SqlTransaction _tran = null;
            SqlCommand command = null;

            try
            {
                command = new SqlCommand(sqlCommand, _connection);
                command.CommandType = CommandType.StoredProcedure;

                if (Transaction)
                    _tran = _connection.BeginTransaction();

                foreach (var parameter in parameters)
                {
                    command.Parameters.Add(parameter);
                    command.Transaction = _tran;
                }

                command.ExecuteNonQuery();

                if (Transaction)
                    _tran.Commit();

                int i = 0;

                foreach (var item in parameters)
                {
                    if (command.Parameters[i].Direction == ParameterDirection.Output)
                        item.Value = command.Parameters[i].Value;

                    i++;
                }
            }
            catch (Exception)
            {
                if (Transaction)
                    _tran.Rollback();

                throw;
            }
            finally
            {
                _connection.Close();
                _connection.Dispose();

                if (Transaction)
                    _tran.Dispose();

                command.Dispose();
                //GC.Collect();
            }
        }

        /// <summary>
        /// Método que executa um comando SQL no banco (PROCEDURE)
        /// </summary>
        /// <param name="sqlCommand">Nome da procedure</param>
        /// <param name="parameters">Parâmetros com valores</param>
        public static void Procedure(string sqlCommand, List<SqlParameter> parameters, bool Transaction = true)
        {
            SqlConnection _connection = GetConexao();
            SqlTransaction _tran = null;
            SqlCommand command = null;

            try
            {
                command = new SqlCommand(sqlCommand, _connection);
                command.CommandType = CommandType.StoredProcedure;

                if (Transaction)
                {
                    _tran = _connection.BeginTransaction();
                    command.Transaction = _tran;
                }

                foreach (var parameter in parameters)
                    command.Parameters.Add(parameter);

                command.ExecuteNonQuery();

                if (Transaction)
                    _tran.Commit();
            }
            catch (Exception ex)
            {
                if (Transaction)
                    _tran.Rollback();

                throw;
            }
            finally
            {
                _connection.Close();
                _connection.Dispose();

                if (Transaction)
                    _tran.Dispose();

                command.Dispose();
                //GC.Collect();
            }
        }

        /// <summary>
        /// Método que executa um comando SQL no banco (PROCEDURE)
        /// </summary>
        /// <param name="sqlCommand">Nome da procedure</param>
        /// <param name="Parameter">Nome do parâmetro</param>
        /// <param name="Value">Valor do parâmetro</param>
        /// <param name="Direction">Direção do parâmetro</param>
        public static void Procedure(string sqlCommand, string Parameter, object Value, ParameterDirection Direction = ParameterDirection.Input, bool Transaction = true)
        {
            SqlConnection _connection = GetConexao();
            SqlTransaction _tran = null;
            SqlCommand command = null;

            try
            {
                command = new SqlCommand(sqlCommand, _connection);
                command.CommandType = CommandType.StoredProcedure;

                if (Transaction)
                {
                    _tran = _connection.BeginTransaction();
                    command.Transaction = _tran;
                }

                command.Parameters.Add(new SqlParameter { ParameterName = Parameter, Value = Value, Direction = Direction });

                command.ExecuteNonQuery();

                if (Transaction)
                    _tran.Commit();
            }
            catch (Exception)
            {
                if (Transaction)
                    _tran.Rollback();

                throw;
            }
            finally
            {
                _connection.Close();
                _connection.Dispose();

                if (Transaction)
                    _tran.Dispose();

                command.Dispose();
                //GC.Collect();
            }
        }

        /// <summary>
        /// Método que executa um comando SQL no banco (SqlCommand)
        /// </summary>
        /// <param name="sqlCommand">String do comando</param>
        /// <param name="Transaction">True = abre uma transação - False = executa comando sem transação</param>
        public static void Command(string sqlCommand, bool Transaction = true)
        {
            SqlConnection _connection = GetConexao();
            SqlTransaction _tran = null;
            SqlCommand command = null;

            try
            {
                command = new SqlCommand(sqlCommand, _connection);

                if (Transaction)
                {
                    _tran = _connection.BeginTransaction();
                    command.Transaction = _tran;
                }

                command.ExecuteNonQuery();

                if (Transaction)
                    _tran.Commit();
            }
            catch (Exception)
            {
                if (Transaction)
                    _tran.Rollback();

                throw;
            }
            finally
            {
                _connection.Close();
                _connection.Dispose();

                if (Transaction)
                    _tran.Dispose();

                command.Dispose();
                //GC.Collect();
            }
        }
    }
}