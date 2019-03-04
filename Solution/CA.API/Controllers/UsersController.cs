namespace CA.API.Controllers
{
    #region Using

    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Threading.Tasks;
    using Domain.Supervisor;
    using Domain.ViewModels;
    using Microsoft.AspNetCore.Authorization;
    using Models;
    using Microsoft.Extensions.Logging;

    #endregion

    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly ICASupervisor _caSupervisor;
        private readonly ILogger<AddressesController> _logger;

        public UsersController(ILogger<AddressesController> logger, ICASupervisor caSupervisor)
        {
            _logger = logger;
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
                {
                    _logger.LogWarning("Error in Authenticate: username [{Username}] not registered or incorrect password", login.username);
                    return BadRequest(new { message = "Username or password is incorrect" });
                }
                    
                return new ObjectResult(new Session
                {
                    user = new UserViewModel
                    {
                        id = userAuthenticate.id,
                        name = userAuthenticate.name,
                        username = userAuthenticate.username,
                        email = userAuthenticate.email,
                        surname = userAuthenticate.username,
                        birthDate = userAuthenticate.birthDate
                    },
                    token = userAuthenticate.token
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return new ObjectResult(await _caSupervisor.GetAllUserAsync());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }
    }
}