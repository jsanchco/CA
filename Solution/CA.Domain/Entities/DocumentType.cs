namespace CA.Domain.Entities
{
    #region Using

    using System.Collections.Generic;

    #endregion

    public class DocumentType : BaseEntity
    {
        public string Name { get; set; }
        public string Extension { get; set; }

        public virtual ICollection<Document> Documents { get; set; } = new HashSet<Document>();
    }
}
