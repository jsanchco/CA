﻿namespace CA.Domain.Entities
{
    #region Using

    using System;
    using System.Collections.Generic;

    #endregion

    public class User : BaseEntity
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Username { get; set; }
        public int Age { get; set; }
        public DateTime? BirthDate { get; set; }
        public string Email { get; set; }       
        public string Password { get; set; }
        public string Token { get; set; }

        public int ProfessionId { get; set; }
        public virtual Profession Profession { get; set; }

        public virtual ICollection<Address> Addresses { get; set; } = new HashSet<Address>();
        public virtual ICollection<Document> Documents { get; set; } = new HashSet<Document>();
    }
}
