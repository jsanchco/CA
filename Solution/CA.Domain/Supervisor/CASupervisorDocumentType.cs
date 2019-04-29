// ReSharper disable InconsistentNaming
namespace CA.Domain.Supervisor
{
    #region Using

    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;
    using ViewModels;
    using Converters;

    #endregion

    public partial class CASupervisor
    {
        public async Task<List<DocumentTypeViewModel>> GetAllDocumentTypesAsync(CancellationToken ct = default(CancellationToken))
        {
            return DocumentTypeConverter.ConvertList(await _documentTypeRepository.GetAllDocumentTypesAsync(ct));
        }

        public async Task<DocumentTypeViewModel> GetDocumentTypeByIdAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            return DocumentTypeConverter.Convert(await _documentTypeRepository.GetDocumentTypeByIdAsync(id, ct));
        }

        public List<DocumentTypeViewModel> GetAllDocumentTypes()
        {
            return DocumentTypeConverter.ConvertList(_documentTypeRepository.GetAllDocumentTypes());
        }

        public DocumentTypeViewModel GetDocumentTypeById(int id)
        {
            return DocumentTypeConverter.Convert(_documentTypeRepository.GetDocumentTypeById(id));
        }
    }
}
