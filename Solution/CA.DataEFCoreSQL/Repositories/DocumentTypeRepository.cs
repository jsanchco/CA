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

    public class DocumentTypeRepository : IDocumentTypeRepository
    {
        private readonly EFContext _context;

        public DocumentTypeRepository(EFContext context)
        {
            _context = context;
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public async Task<List<DocumentType>> GetAllDocumentTypesAsync(CancellationToken ct = default(CancellationToken))
        {
            return await _context.DocumentType
                .ToListAsync(ct);
        }

        public async Task<DocumentType> GetDocumentTypeByIdAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            return await _context.DocumentType
                .FirstOrDefaultAsync(x => x.Id == id, ct);
        }

        public List<DocumentType> GetAllDocumentTypes()
        {
            return _context.DocumentType
                .ToList();
        }

        public DocumentType GetDocumentTypeById(int id)
        {
            return _context.DocumentType
                .FirstOrDefault(x => x.Id == id);
        }
    }
}
