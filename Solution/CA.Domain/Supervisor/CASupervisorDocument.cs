// ReSharper disable InconsistentNaming
namespace CA.Domain.Supervisor
{
    #region Using
    
    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;
    using ViewModels;
    using Converters;
    using System;
    using Entities;

    #endregion

    public partial class CASupervisor
    {
        public async Task<List<DocumentViewModel>> GetAllDocumentsAsync(CancellationToken ct = default(CancellationToken))
        {
            return DocumentConverter.ConvertList(await _documentRepository.GetAllDocumentsAsync(ct));
        }

        public async Task<DocumentViewModel> GetDocumentByIdAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            return DocumentConverter.Convert(await _documentRepository.GetDocumentByIdAsync(id, ct));
        }

        public async Task<DocumentViewModel> AddDocumentAsync(DocumentViewModel newDocumentViewModel, CancellationToken ct = default(CancellationToken))
        {
            var document = new Document
            {
                AddedDate = DateTime.Now,
                ModifiedDate = null,
                IPAddress = newDocumentViewModel.iPAddress,

                Name = newDocumentViewModel.name,
                Url = newDocumentViewModel.url,
                DocumentTypeId = newDocumentViewModel.documentTypeId
            };

            await _documentRepository.AddDocumentAsync(document, ct);
            return newDocumentViewModel;
        }

        public async Task<bool> UpdateDocumentAsync(DocumentViewModel documentViewModel, CancellationToken ct = default(CancellationToken))
        {
            if (documentViewModel.id == null)
                return false;

            var document = await _documentRepository.GetDocumentByIdAsync((int)documentViewModel.id, ct);

            if (document == null) return false;

            document.ModifiedDate = DateTime.Now;
            document.IPAddress = documentViewModel.iPAddress;

            document.Name = documentViewModel.name;
            document.Url = documentViewModel.url;
            document.DocumentTypeId = documentViewModel.documentTypeId;

            return await _documentRepository.UpdateDocumentAsync(document, ct);

        }

        public async Task<bool> DeleteDocumentAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            return await _documentRepository.DeleteDocumentAsync(id, ct);
        }

        public List<DocumentViewModel> GetAllDocuments()
        {
            return DocumentConverter.ConvertList(_documentRepository.GetAllDocuments());
        }

        public DocumentViewModel GetDocumentById(int id)
        {
            return DocumentConverter.Convert(_documentRepository.GetDocumentById(id));
        }

        public DocumentViewModel AddDocument(DocumentViewModel newDocumentViewModel)
        {
            var document = new Document
            {
                AddedDate = DateTime.Now,
                ModifiedDate = null,
                IPAddress = newDocumentViewModel.iPAddress,

                Name = newDocumentViewModel.name,
                Url = newDocumentViewModel.url,
                DocumentTypeId = newDocumentViewModel.documentTypeId
            };

            _documentRepository.AddDocumentAsync(document);
            return newDocumentViewModel;

        }

        public bool UpdateDocument(DocumentViewModel documentViewModel)
        {
            if (documentViewModel.id == null)
                return false;

            var document = _documentRepository.GetDocumentById((int)documentViewModel.id);

            if (document == null) return false;

            document.ModifiedDate = DateTime.Now;
            document.IPAddress = documentViewModel.iPAddress;

            document.Name = documentViewModel.name;
            document.Url = documentViewModel.url;
            document.DocumentTypeId = documentViewModel.documentTypeId;

            return _documentRepository.UpdateDocument(document);
        }

        public bool DeleteDocument(int id)
        {
            return _documentRepository.DeleteDocument(id);
        }
    }
}
