﻿namespace CA.TestAPI.Models
{
    #region Using

    using Domain.ViewModels;

    #endregion

    public class Session
    {
        public UserViewModel user { get; set; }
        public string token { get; set; }
    }
}
