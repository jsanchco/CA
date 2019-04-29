namespace CA.Domain.Repositories
{
    #region Using

    using System;
    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;
    using Entities;

    #endregion

    public interface IDocumentTypeRepository : IDisposable
    {
        Task<List<DocumentType>> GetAllDocumentTypesAsync(CancellationToken ct = default(CancellationToken));
        Task<DocumentType> GetDocumentTypeByIdAsync(int id, CancellationToken ct = default(CancellationToken));

        List<DocumentType> GetAllDocumentTypes();
        DocumentType GetDocumentTypeById(int id);
    }
}
