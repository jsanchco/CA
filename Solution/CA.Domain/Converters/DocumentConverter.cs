namespace CA.Domain.Converters
{
    #region Using

    using System.Collections.Generic;
    using System.Linq;
    using Entities;
    using ViewModels;

    #endregion

    public class DocumentConverter
    {
        public static DocumentViewModel Convert(Document document)
        {
            if (document == null)
                return null;

            var documentViewModel = new DocumentViewModel
            {
                id = document.Id,
                addedDate = document.AddedDate,
                modifiedDate = document.ModifiedDate,
                iPAddress = document.IPAddress,

                name = document.Name,
                url = document.Url,
                documentTypeId = document.DocumentTypeId
            };

            return documentViewModel;
        }

        public static List<DocumentViewModel> ConvertList(IEnumerable<Document> documents)
        {
            return documents?.Select(document =>
                {
                    var model = new DocumentViewModel
                    {
                        id = document.Id,
                        addedDate = document.AddedDate,
                        modifiedDate = document.ModifiedDate,
                        iPAddress = document.IPAddress,

                        name = document.Name,
                        url = document.Url,
                        documentTypeId = document.DocumentTypeId
                    };
                    return model;
                })
                .ToList();
        }
    }
}
