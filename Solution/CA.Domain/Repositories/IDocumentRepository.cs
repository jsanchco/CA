namespace CA.Domain.Repositories
{
    #region Using

    using System;
    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;
    using Entities;

    #endregion

    public interface IDocumentRepository : IDisposable
    {
        Task<List<Document>> GetAllDocumentsAsync(CancellationToken ct = default(CancellationToken));
        Task<Document> GetDocumentByIdAsync(int id, CancellationToken ct = default(CancellationToken));
        Task<Document> AddDocumentAsync(Document newDocument, CancellationToken ct = default(CancellationToken));
        Task<bool> UpdateDocumentAsync(Document document, CancellationToken ct = default(CancellationToken));
        Task<bool> DeleteDocumentAsync(int id, CancellationToken ct = default(CancellationToken));


        List<Document> GetAllDocuments();
        Document GetDocumentById(int id);
        Document AddDocument(Document newDocument);
        bool UpdateDocument(Document document);
        bool DeleteDocument(int id);
    }
}
