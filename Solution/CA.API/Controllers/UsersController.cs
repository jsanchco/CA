namespace CA.API.Controllers
{
    #region Using

    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Domain.Supervisor;
    using Domain.ViewModels;
    using Microsoft.AspNetCore.Authorization;
    using Models;

    #endregion

    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly ICASupervisor _caSupervisor;

        public UsersController(ICASupervisor caSupervisor)
        {
            _caSupervisor = caSupervisor;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate(Login login)
        {
            try
            {
                var userAuthenticate = await _caSupervisor.Authenticate(login.username, login.password);

                if (userAuthenticate == null)
                    return BadRequest(new { message = "Username or password is incorrect" });

                return new ObjectResult(new Session
                {
                    user = new User
                    {
                        id = userAuthenticate.Id,
                        name = userAuthenticate.Name,
                        username = userAuthenticate.Username,
                        email = userAuthenticate.Email,
                        surname = userAuthenticate.Username,
                        birthDate = userAuthenticate.BirthDate
                    },
                    token = userAuthenticate.Token
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpGet]
        [Produces(typeof(List<UserViewModel>))]
        public async Task<IActionResult> Get()
        {
            try
            {
                return new ObjectResult(await _caSupervisor.GetAllUserAsync());
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }
    }
}