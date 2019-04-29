namespace CA.DataEFCoreSQL.Repositories
{
    #region Using

    using System.Collections.Generic;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;
    using Domain.Entities;
    using Domain.Repositories;
    using Microsoft.EntityFrameworkCore;


    #endregion

    public class DocumentRepository : IDocumentRepository
    {
        private readonly EFContext _context;

        public DocumentRepository(EFContext context)
        {
            _context = context;
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        private async Task<bool> DocumentExistsAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            return await GetDocumentByIdAsync(id, ct) != null;
        }

        private bool DocumentExists(int id)
        {
            return GetDocumentById(id) != null;
        }

        public async Task<List<Document>> GetAllDocumentsAsync(CancellationToken ct = default(CancellationToken))
        {
            return await _context.Document
                .Include(x => x.DocumentType)
                .ToListAsync(ct);
        }

        public async Task<Document> GetDocumentByIdAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            return await _context.Document
                .Include(x => x.DocumentType)
                .FirstOrDefaultAsync(x => x.Id == id, ct);
        }

        public async Task<Document> AddDocumentAsync(Document newDocument, CancellationToken ct = default(CancellationToken))
        {
            _context.Document.Add(newDocument);
            await _context.SaveChangesAsync(ct);
            return newDocument;

        }

        public async Task<bool> UpdateDocumentAsync(Document document, CancellationToken ct = default(CancellationToken))
        {
            if (!await DocumentExistsAsync(document.Id, ct))
                return false;

            _context.Document.Update(document);
            await _context.SaveChangesAsync(ct);
            return true;

        }

        public async Task<bool> DeleteDocumentAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            if (!await DocumentExistsAsync(id, ct))
                return false;

            var toRemove = _context.Document.Find(id);
            _context.Document.Remove(toRemove);
            await _context.SaveChangesAsync(ct);
            return true;
        }

        public List<Document> GetAllDocuments()
        {
            return _context.Document
                .Include(x => x.DocumentType)
                .ToList();
        }

        public Document GetDocumentById(int id)
        {
            return _context.Document
                .Include(x => x.DocumentType)
                .FirstOrDefault(x => x.Id == id);
        }

        public Document AddDocument(Document newDocument)
        {
            _context.Document.Add(newDocument);
            _context.SaveChanges();
            return newDocument;
        }

        public bool UpdateDocument(Document document)
        {
            if (!DocumentExists(document.Id))
                return false;

            _context.Document.Update(document);
            _context.SaveChanges();
            return true;
        }

        public bool DeleteDocument(int id)
        {
            if (!DocumentExists(id))
                return false;

            var toRemove = _context.Document.Find(id);
            _context.Document.Remove(toRemove);
            _context.SaveChanges();
            return true;
        }
    }
}
