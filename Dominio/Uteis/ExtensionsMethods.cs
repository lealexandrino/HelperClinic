using System.Runtime.InteropServices;

namespace Dominio
{
    public static class ExtensionsMethods
    {
        /// <summary>
        /// Método para remover acentos e deixar todas as letras em maiúsculo
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        /// 

        //Publicando DLL de consistencia de IE, para utilizarmos....
        [DllImport("DllInscE32.dll")]
        public static extern int ConsisteInscricaoEstadual(string cInsc, string cUF);

        public static string Formatar(this string input)
        {
            if (string.IsNullOrEmpty(input))
                return "";
            else
            {
                byte[] bytes = System.Text.Encoding.GetEncoding("iso-8859-8").GetBytes(input);
                return System.Text.Encoding.UTF8.GetString(bytes).ToUpper().Trim();
            }
        }

        public static bool ValidateStr(this string input, int Length, bool Required = true)
        {
            if (Required)
                return !string.IsNullOrEmpty(input) && input.Length <= Length;
            else
            {
                if (string.IsNullOrEmpty(input))
                    return true;

                return input.Length <= Length;
            }
        }

        public static bool ValidateIE(this string input, string uf)
        {
            if (string.IsNullOrEmpty(input))
                return true;

            if (ConsisteInscricaoEstadual(input, uf) == 1)
                return false;

            return true;
        }

        public static bool Between(this int input, int? Min = null, int? Max = null)
        {
            return Between((double)input, Min, Max);
        }

        public static bool Between(this double input, double? Min = null, double? Max = null)
        {
            if (Min.HasValue && Max.HasValue)
                return input >= Min && input <= Max;

            if (Min.HasValue)
                return input >= Min;

            if (Max.HasValue)
                return input <= Max;

            throw new System.Exception("Informe pelo menos um valor mínimo ou máximo!");
        }

        public static bool ValidaCPF(string cpf)
        {
            int[] multiplicador1 = new int[9] { 10, 9, 8, 7, 6, 5, 4, 3, 2 };
            int[] multiplicador2 = new int[10] { 11, 10, 9, 8, 7, 6, 5, 4, 3, 2 };
            string tempCpf, digito;
            int soma, resto;

            cpf = cpf.Trim();
            cpf = cpf.Replace(".", "").Replace("-", "");

            if (cpf.Length != 11)
                return false;

            tempCpf = cpf.Substring(0, 9);
            soma = 0;

            for (int i = 0; i < 9; i++)
                soma += int.Parse(tempCpf[i].ToString()) * multiplicador1[i];

            resto = soma % 11;

            if (resto < 2)
                resto = 0;
            else
                resto = 11 - resto;

            digito = resto.ToString();

            tempCpf = tempCpf + digito;

            soma = 0;

            for (int i = 0; i < 10; i++)
                soma += int.Parse(tempCpf[i].ToString()) * multiplicador2[i];

            resto = soma % 11;

            if (resto < 2)
                resto = 0;
            else
                resto = 11 - resto;

            digito = digito + resto.ToString();

            return cpf.EndsWith(digito);
        }

        public static bool ValidaCNPJ(string cnpj)
        {
            int[] multiplicador1 = new int[12] { 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 };
            int[] multiplicador2 = new int[13] { 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 };
            int soma, resto;
            string digito, tempCnpj;

            cnpj = cnpj.Trim();
            cnpj = cnpj.Replace(".", "").Replace("-", "").Replace("/", "");

            if (cnpj.Length != 14)
                return false;

            tempCnpj = cnpj.Substring(0, 12);

            soma = 0;

            for (int i = 0; i < 12; i++)
                soma += int.Parse(tempCnpj[i].ToString()) * multiplicador1[i];

            resto = (soma % 11);

            if (resto < 2)
                resto = 0;
            else
                resto = 11 - resto;

            digito = resto.ToString();

            tempCnpj = tempCnpj + digito;

            soma = 0;

            for (int i = 0; i < 13; i++)
                soma += int.Parse(tempCnpj[i].ToString()) * multiplicador2[i];

            resto = (soma % 11);

            if (resto < 2)
                resto = 0;
            else
                resto = 11 - resto;

            digito = digito + resto.ToString();

            return cnpj.EndsWith(digito);
        }

        public static string FormataTelefone(this string Tel)
        {
            return Tel.Replace("-", "").Replace(")", "").Replace("(", "").Replace(" ", "").Trim();
        }

        public static string FormataCNPJ(string cnpj)
        {
            cnpj = cnpj.Replace(".", "").Replace("/", "").Replace("-", "").Trim();

            return cnpj.Substring(0, 2) + "." + cnpj.Substring(2, 3) + "." + cnpj.Substring(5, 3) + "/" + cnpj.Substring(8, 4) + "-" + cnpj.Substring(12, 2);
        }

        public static string FormataCPF(string cpf)
        {
            cpf = cpf.Replace(".", "").Replace("/", "").Replace("-", "").Trim();

            return cpf.Substring(0, 3) + "." + cpf.Substring(3, 3) + "." + cpf.Substring(6, 3) + "-" + cpf.Substring(9, 2);
        }

        public static string FormataPassaporte(string passaporte)
        {
            return passaporte.Replace(".", "").Replace("/", "").Replace(@"\", "").Replace("-", "").Trim();
        }
    }
}