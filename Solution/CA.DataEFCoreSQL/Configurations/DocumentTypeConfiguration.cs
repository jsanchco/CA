namespace CA.DataEFCoreSQL.Configurations
{
    #region Using

    using Domain.Entities;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using Microsoft.EntityFrameworkCore;

    #endregion

    public class DocumentTypeConfiguration
    {
        public DocumentTypeConfiguration(EntityTypeBuilder<DocumentType> entity)
        {
            entity.ToTable("Document");

            entity.HasKey(x => x.Id);
            entity.Property(x => x.Id).ValueGeneratedOnAdd();

            entity.Property(x => x.AddedDate).IsRequired();
            entity.Property(x => x.Name).IsRequired();
            entity.Property(x => x.Extension).IsRequired();
        }
    }
}
