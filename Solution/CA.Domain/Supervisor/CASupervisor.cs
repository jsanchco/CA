// ReSharper disable InconsistentNaming
namespace CA.Domain.Supervisor
{
    #region Using

    using Repositories;
    using Helpers;
    using Microsoft.Extensions.Options;

    #endregion

    public partial class CASupervisor : ICASupervisor
    {
        private readonly IUserRepository _userRepository;
        private readonly IAddressRepository _addressRepository;
        private readonly IProfessionRepository _professionRepository;
        private readonly IDocumentRepository _documentRepository;
        private readonly IDocumentTypeRepository _documentTypeRepository;
        private readonly AppSettings _appSettings;

        public CASupervisor()
        {
        }

        public CASupervisor(
            IUserRepository userRepository,
            IAddressRepository addressRepository,
            IProfessionRepository professionRepository,
            IDocumentRepository documentRepository,
            IDocumentTypeRepository documentTypeRepository,
            IOptions<AppSettings> appSettings)
        {
            _userRepository = userRepository;
            _addressRepository = addressRepository;
            _professionRepository = professionRepository;
            _documentRepository = documentRepository;
            _documentTypeRepository = documentTypeRepository;
            _appSettings = appSettings.Value;
        }
    }
}
