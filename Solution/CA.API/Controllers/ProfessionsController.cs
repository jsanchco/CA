// ReSharper disable InconsistentNaming
namespace CA.API.Controllers
{
    #region Using

    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Authorization;
    using Domain.Supervisor;
    using Microsoft.Extensions.Logging;
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Domain.ViewModels;
    using System.Linq;

    #endregion

    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProfessionsController : ControllerBase
    {
        private readonly ICASupervisor _caSupervisor;
        private readonly ILogger<AddressesController> _logger;

        public ProfessionsController(ILogger<AddressesController> logger, ICASupervisor caSupervisor)
        {
            _logger = logger;
            _caSupervisor = caSupervisor;
        }

        //[HttpGet]
        //[Produces(typeof(List<ProfessionViewModel>))]
        //public async Task<IActionResult> Get()
        //{
        //    try
        //    {
        //        return new ObjectResult(await _caSupervisor.GetAllProfessionAsync());
        //    }
        //    catch (Exception ex)
        //    {
        //        _logger.LogError(ex, "Exception: ");
        //        return StatusCode(500, ex);
        //    }
        //}

        [HttpGet]
        public object Get(int id, string description)
        {
            try
            {
                var data = _caSupervisor.GetAllProfession().ToList();
                return new { Items = data, data.Count };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        //[HttpGet]
        //public object Get()
        //{
        //    try
        //    {
        //        var data = _caSupervisor.GetAllProfession().ToList();
        //        return new { Items = data, data.Count };
        //    }
        //    catch (Exception ex)
        //    {
        //        _logger.LogError(ex, "Exception: ");
        //        return StatusCode(500, ex);
        //    }
        //}

        [HttpPost]
        public object Post([FromBody]ProfessionViewModel professionViewModel)
        {
            try
            {
                var result = _caSupervisor.AddProfession(professionViewModel);
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        [HttpPut]
        public object Put([FromBody]ProfessionViewModel professionViewModel)
        {
            try
            {
                if (_caSupervisor.UpdateProfession(professionViewModel) && professionViewModel.id != null)
                {
                    return _caSupervisor.GetProfessionById((int)professionViewModel.id);
                }

                return null;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        // DELETE: api/profession/5
        [HttpDelete("{id:int}")]
        //[Route("profession/{id:int}")]
        public object Delete(int id)
        {
            try
            {
                return _caSupervisor.DeleteProfession(id);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        [HttpGet("getspecial")]
        //[Route("getspecial/{id}/{description}")]
        public object GetSpecial(int id, string description)
        {
            try
            {
                var data = _caSupervisor.GetAllProfession().ToList()
                    .Where(x => x.id == id && x.description.Contains(description))
                    .ToList();
                return new { Items = data, data.Count };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("getspecial1/{id}")]
        public object GetSpecial1(int id)
        {
            try
            {
                var data = _caSupervisor.GetAllProfession().ToList()
                    .Where(x => x.id == id)
                    .ToList();
                return new { Items = data, data.Count };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }
    }
}