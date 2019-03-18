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
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Text;
    using Microsoft.IdentityModel.Tokens;

    #endregion

    public partial class CASupervisor
    {
        public async Task<UserViewModel> Authenticate(string username, string password, CancellationToken ct = default(CancellationToken))
        {
            var userViewModel = UserConverter.Convert(await _userRepository.Authenticate(username, password, ct));
            if (userViewModel == null)
                return null;

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, userViewModel.id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                //Expires = DateTime.UtcNow.AddMinutes(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);

            userViewModel.token = tokenHandler.WriteToken(token);

            return userViewModel;
        }

        public async Task<List<UserViewModel>> GetAllUserAsync(CancellationToken ct = default(CancellationToken))
        {
            return UserConverter.ConvertList(await _userRepository.GetAllAsync(ct));
        }

        public async Task<UserViewModel> GetUserByIdAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            var userViewModel = UserConverter.Convert(await _userRepository.GetByIdAsync(id, ct));
            return userViewModel;
        }

        public async Task<UserViewModel> AddUserAsync(UserViewModel newUserViewModel, CancellationToken ct = default(CancellationToken))
        {
            var user = new User
            {
                Id = newUserViewModel.id,
                AddedDate = DateTime.Now,
                ModifiedDate = null,
                IPAddress = newUserViewModel.iPAddress,

                Name = newUserViewModel.name,
                Surname = newUserViewModel.surname,
                Age = newUserViewModel.age,
                BirthDate = newUserViewModel.birthDate,
                Email = newUserViewModel.email,
                Password = newUserViewModel.password
            };

            await _userRepository.AddAsync(user, ct);

            return newUserViewModel;
        }

        public async Task<bool> UpdateUserAsync(UserViewModel userViewModel, CancellationToken ct = default(CancellationToken))
        {
            var user = await _userRepository.GetByIdAsync(userViewModel.id, ct);

            if (user == null) return false;

            user.ModifiedDate = DateTime.Now;
            user.IPAddress = userViewModel.iPAddress;

            user.Name = userViewModel.name;
            user.Surname = userViewModel.surname;
            user.Age = userViewModel.age;
            user.BirthDate = userViewModel.birthDate;
            user.Email = userViewModel.email;
            user.Password = userViewModel.password;

            return await _userRepository.UpdateAsync(user, ct);
        }

        public async Task<bool> DeleteUserAsync(int id, CancellationToken ct = default(CancellationToken))
        {
            return await _userRepository.DeleteAsync(id, ct);
        }
    }
}
