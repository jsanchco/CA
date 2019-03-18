namespace CA.Domain.Repositories
{
    #region Using

    using System;
    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;
    using Entities;

    #endregion

    public interface IProfessionRepository : IDisposable
    {
        Task<List<Profession>> GetAllAsync(CancellationToken ct = default(CancellationToken));
        Task<Profession> GetByIdAsync(int id, CancellationToken ct = default(CancellationToken));
        Task<List<User>> GetByProfesionIdAsync(int id, CancellationToken ct = default(CancellationToken));
        Task<Profession> AddAsync(Profession newProfession, CancellationToken ct = default(CancellationToken));
        Task<bool> UpdateAsync(Profession profession, CancellationToken ct = default(CancellationToken));
        Task<bool> DeleteAsync(int id, CancellationToken ct = default(CancellationToken));
    }
}
