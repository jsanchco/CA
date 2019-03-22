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

    }
}