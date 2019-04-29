namespace CA.Domain.Entities
{
    public class Document : BaseEntity
    {
        public string Name { get; set; }
        public string Url { get; set; }

        public int DocumentTypeId { get; set; }
        public virtual DocumentType DocumentType { get; set; }
    }
}
