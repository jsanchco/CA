namespace CA.Domain.Entities
{
    public class Document : BaseEntity
    {
        public string Name { get; set; }
        public string Data { get; set; }

        public int DocumentTypeId { get; set; }
        public virtual DocumentType DocumentType { get; set; }

        public int? UserId { get; set; }
        public virtual User User { get; set; }
    }
}
