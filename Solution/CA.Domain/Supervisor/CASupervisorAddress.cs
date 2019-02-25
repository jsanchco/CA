// ReSharper disable InconsistentNaming
namespace CA.Domain.Supervisor
{
    #region Using

    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;
    using ViewModels;
    using Converters;
    using Entities;
    using System;

    #endregion

    public partial class CASupervisor
    {
        public async Task<List<AddressViewModel>> GetAllAddressAsync(CancellationToken ct = default(CancellationToken))
        {
            return AddressConverter.ConvertList(await _addressRepository.GetAllAsync(ct));
        }

        public async Task<AddressViewModel> GetAddressByIdAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            var addressViewModel = AddressConverter.Convert(await _addressRepository.GetByIdAsync(id, ct));
            addressViewModel.userName = 
                _userRepository.GetByIdAsync(addressViewModel.userId, ct).Result.Name +
                _userRepository.GetByIdAsync(addressViewModel.userId, ct).Result.Surname;

            return addressViewModel;
        }

        public async Task<List<AddressViewModel>> GetAddressesByUserIdAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            return AddressConverter.ConvertList(await _addressRepository.GetByUserIdAsync(id, ct));
        }

        public async Task<AddressViewModel> AddAddressAsync(AddressViewModel newAddressViewModel, CancellationToken ct = default(CancellationToken))
        {
            var address = new Address
            {
                Id = newAddressViewModel.id,
                AddedDate = DateTime.Now,
                ModifiedDate = null,
                IPAddress = newAddressViewModel.iPAddress,

                Street = newAddressViewModel.street,
                Number = newAddressViewModel.number,
                UserId = newAddressViewModel.userId
            };

            await _addressRepository.AddAsync(address, ct);
            return newAddressViewModel;
        }

        public async Task<bool> UpdateAddressAsync(AddressViewModel addressViewModel, CancellationToken ct = default(CancellationToken))
        {
            var address = await _addressRepository.GetByIdAsync(addressViewModel.id, ct);

            if (address == null) return false;
            
            address.ModifiedDate = DateTime.Now;
            address.IPAddress = addressViewModel.iPAddress;

            address.Street = addressViewModel.street;
            address.Number = addressViewModel.number;
            address.UserId = addressViewModel.userId;

            return await _addressRepository.UpdateAsync(address, ct);
        }

        public async Task<bool> DeleteAddressAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            return await _addressRepository.DeleteAsync(id, ct);
        }
    }
}
