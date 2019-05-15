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
    using System.Linq;
    using System.IO;
    using Domain.Helpers;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Options;

    #endregion

    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly ICASupervisor _caSupervisor;
        private readonly ILogger<AddressesController> _logger;
        private readonly IOptions<AppSettings> _config;
        private readonly IHostingEnvironment _env;

        public UsersController(ILogger<AddressesController> logger, ICASupervisor caSupervisor, IOptions<AppSettings> config, IHostingEnvironment env)
        {
            _logger = logger;
            _caSupervisor = caSupervisor;
            _config = config;
            _env = env;
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
                        surname = userAuthenticate.surname,
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

        //[HttpGet]
        //public async Task<IActionResult> GetAsyn()
        //{
        //    try
        //    {
        //        return new ObjectResult(await _caSupervisor.GetAllUserAsync());
        //    }
        //    catch (Exception ex)
        //    {
        //        _logger.LogError(ex, "Exception: ");
        //        return StatusCode(500, ex);
        //    }
        //}

        [HttpGet]
        public object Get()
        {
            try
            {
                var data = _caSupervisor.GetAllUser().ToList();
                foreach (var user in data)
                {
                    var localFilePath = Path.Combine(_env.ContentRootPath, _config.Value.PathImages, "default.jpg");
                    if (!System.IO.File.Exists(localFilePath))
                    {
                        _logger.LogError("File not found", "Error: ");
                        return StatusCode(500, "File not found");
                    }

                    var image = System.IO.File.ReadAllBytes(localFilePath);
                    user.image = $"data:image/jpg;base64, {Convert.ToBase64String(image, 0, image.Length)}";
                }
                return new { Items = data, data.Count };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        // GET api/users/5
        [HttpGet("{id}")]
        public object Get(int id)
        {
            try
            {
                return _caSupervisor.GetUserById(id);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        // GET api/users/5/jesus
        [HttpGet("{id}/{name}")]
        public object Get(int id, string name)
        {
            try
            {
                return _caSupervisor.GetUserById(id);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        [HttpPost]
        public object Post([FromBody]UserViewModel userViewModel)
        {
            try
            {
                var result = _caSupervisor.AddUser(userViewModel);
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }            
        }

        [HttpPut]
        public object Put([FromBody]UserViewModel userViewModel)
        {
            try
            {
                if (_caSupervisor.UpdateUser(userViewModel) && userViewModel.id != null)
                {
                    return _caSupervisor.GetUserById((int) userViewModel.id);
                }

                return null;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        // DELETE: api/users/5
        [HttpDelete("{id:int}")]
        //[Route("users/{id:int}")]
        public object Delete(int id)
        {
            try
            {
                return _caSupervisor.DeleteUser(id);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }
    }
}