﻿namespace CA.DataEFCoreSQL.Configurations
{
    #region Using

    using Domain.Entities;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using Microsoft.EntityFrameworkCore;

    #endregion

    public class DocumentConfiguration
    {
        public DocumentConfiguration(EntityTypeBuilder<Document> entity)
        {
            entity.ToTable("Document");

            entity.HasKey(x => x.Id);
            entity.Property(x => x.Id).ValueGeneratedOnAdd();

            entity.Property(x => x.AddedDate).IsRequired();
            entity.Property(x => x.Name).IsRequired();
            entity.Property(x => x.Data).IsRequired();

            entity.HasIndex(x => x.DocumentTypeId).HasName("IFK_DocumentType_Document");
            entity.HasOne(u => u.DocumentType).WithMany(a => a.Documents).HasForeignKey(a => a.DocumentTypeId).HasConstraintName("FK__DocumentType__DocumentId");

            entity.HasIndex(x => x.UserId).HasName("IFK_User_Documents");
            entity.HasOne(u => u.User).WithMany(a => a.Documents).HasForeignKey(a => a.UserId).HasConstraintName("FK__Document__UserId");
        }
    }
}
