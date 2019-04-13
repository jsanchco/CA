// ReSharper disable InconsistentNaming
namespace CA.API.Controllers
{
    #region Using

    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Authorization;
    using Domain.Supervisor;
    using Microsoft.Extensions.Logging;
    using System;
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

        // GET api/professions/5
        [HttpGet("{id}")]
        public object Get(int id)
        {
            try
            {
                return _caSupervisor.GetProfessionById(id);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        [HttpGet]
        public object Get()
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
    }
}