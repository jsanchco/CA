// ReSharper disable InconsistentNaming
namespace CA.API.Models
{
    #region Using

    using System;

    #endregion

    public class User
    {
        public int id { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public DateTime birthDate { get; set; }
    }
}
