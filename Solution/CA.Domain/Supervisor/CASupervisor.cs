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
        private readonly IProffesionRepository _proffesionRepository;
        private readonly AppSettings _appSettings;

        public CASupervisor()
        {
        }

        public CASupervisor(
            IUserRepository userRepository,
            IAddressRepository addressRepository,
            IProffesionRepository proffesionRepository,
            IOptions<AppSettings> appSettings)
        {
            _userRepository = userRepository;
            _addressRepository = addressRepository;
            _proffesionRepository = proffesionRepository;
            _appSettings = appSettings.Value;
        }
    }
}
