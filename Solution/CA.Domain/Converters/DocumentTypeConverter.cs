namespace CA.Domain.Converters
{
    #region Using

    using System.Collections.Generic;
    using System.Linq;
    using Entities;
    using ViewModels;

    #endregion

    public static class DocumentTypeConverter
    {
        public static DocumentTypeViewModel Convert(DocumentType documentType)
        {
            if (documentType == null)
                return null;

            var documentViewModel = new DocumentTypeViewModel
            {
                id = documentType.Id,
                addedDate = documentType.AddedDate,
                modifiedDate = documentType.ModifiedDate,
                iPAddress = documentType.IPAddress,

                name = documentType.Name,
                extension = documentType.Extension                
            };

            return documentViewModel;
        }

        public static List<DocumentTypeViewModel> ConvertList(IEnumerable<DocumentType> documentTypes)
        {
            return documentTypes?.Select(documentType =>
                {
                    var model = new DocumentTypeViewModel
                    {
                        id = documentType.Id,
                        addedDate = documentType.AddedDate,
                        modifiedDate = documentType.ModifiedDate,
                        iPAddress = documentType.IPAddress,

                        name = documentType.Name,
                        extension = documentType.Extension
                    };
                    return model;
                })
                .ToList();
        }
    }
}
