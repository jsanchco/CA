namespace CA.DataEFCoreSQL.Repositories
{
    #region Using

    using CA.Domain.Repositories;
    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;
    using Domain.Entities;
    using Microsoft.EntityFrameworkCore;
    using System.Linq;

    #endregion

    public class ProfessionRepository : IProffesionRepository
    {
        private readonly EFContext _context;

        public ProfessionRepository(EFContext context)
        {
            _context = context;
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public async Task<List<Profession>> GetAllAsync(CancellationToken ct = default(CancellationToken))
        {
            return await _context.Profession.ToListAsync(ct);
        }

        public async Task<Profession> GetByIdAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            return await _context.Profession.FirstOrDefaultAsync(x => x.Id == id, ct);
        }

        public async Task<List<User>> GetByProffesionIdAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            return await _context.User
                .Where(x => x.ProffesionId == id)
                .ToListAsync(ct);
        }

        public async Task<Profession> AddAsync(Profession newProfession, CancellationToken ct = default(CancellationToken))
        {
            _context.Profession.Add(newProfession);
            await _context.SaveChangesAsync(ct);
            return newProfession;

        }

        public async Task<bool> UpdateAsync(Profession profession, CancellationToken ct = default(CancellationToken))
        {
            if (await GetByIdAsync(profession.Id, ct) == null)
                return false;

            _context.Profession.Update(profession);
            await _context.SaveChangesAsync(ct);
            return true;

        }

        public async Task<bool> DeleteAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            if (await GetByIdAsync(id, ct) == null)
                return false;

            var toRemove = _context.Profession.Find(id);
            _context.Profession.Remove(toRemove);
            await _context.SaveChangesAsync(ct);
            return true;
        }
    }
}
