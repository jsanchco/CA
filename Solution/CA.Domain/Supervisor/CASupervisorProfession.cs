﻿// ReSharper disable InconsistentNaming
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
        public async Task<List<ProfessionViewModel>> GetAllProfessionAsync(CancellationToken ct = default(CancellationToken))
        {
            return ProfessionConverter.ConvertList(await _professionRepository.GetAllAsync(ct));
        }

        public async Task<ProfessionViewModel> GetByIdAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            return ProfessionConverter.Convert(await _professionRepository.GetByIdAsync(id, ct));
        }

        public async Task<List<UserViewModel>> GetByProfessionIdAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            return UserConverter.ConvertList(await _professionRepository.GetByProfesionIdAsync(id, ct));
        }

        public async Task<ProfessionViewModel> AddAsync(ProfessionViewModel newProfessionViewModel, CancellationToken ct = default(CancellationToken))
        {
            var profession = new Profession
            {
                Id = newProfessionViewModel.id,
                AddedDate = DateTime.Now,
                ModifiedDate = null,
                IPAddress = newProfessionViewModel.iPAddress,

                Name = newProfessionViewModel.name,
                Description = newProfessionViewModel.description
            };

            await _professionRepository.AddAsync(profession, ct);
            return newProfessionViewModel;

        }

        public async Task<bool> UpdateAsync(ProfessionViewModel professionViewModel, CancellationToken ct = default(CancellationToken))
        {
            var profession = await _professionRepository.GetByIdAsync(professionViewModel.id, ct);

            if (profession == null) return false;

            profession.ModifiedDate = DateTime.Now;
            profession.IPAddress = professionViewModel.iPAddress;

            profession.Name = professionViewModel.name;
            profession.Description = professionViewModel.description;

            return await _professionRepository.UpdateAsync(profession, ct);
        }

        public async Task<bool> DeleteAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            return await _professionRepository.DeleteAsync(id, ct);
        }
    }
}