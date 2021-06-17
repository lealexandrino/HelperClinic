using System;
using System.Text;
using System.Web.Security;

namespace Dominio
{
    public static class Cryptography
    {
        public static string Crypt(string Value)
        {
            return Convert.ToBase64String(MachineKey.Protect(Encoding.UTF8.GetBytes(Value)));
        }

        public static string Decrypt(string Hash)
        {
            return Encoding.UTF8.GetString(MachineKey.Unprotect(Convert.FromBase64String(Hash)));
        }
    }
}