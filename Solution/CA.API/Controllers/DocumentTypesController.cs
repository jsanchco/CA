namespace CA.API.Controllers
{
    #region Using

    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Authorization;
    using Domain.Supervisor;
    using Microsoft.Extensions.Logging;
    using System;
    using System.Linq;

    #endregion

    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentTypesController : ControllerBase
    {
        private readonly ICASupervisor _caSupervisor;
        private readonly ILogger<AddressesController> _logger;

        public DocumentTypesController(ILogger<AddressesController> logger, ICASupervisor caSupervisor)
        {
            _logger = logger;
            _caSupervisor = caSupervisor;
        }

        // GET api/documenttypes/5
        [HttpGet("{id}")]
        public object Get(int id)
        {
            try
            {
                return _caSupervisor.GetDocumentTypeById(id);
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
                var data = _caSupervisor.GetAllDocumentTypes().ToList();
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