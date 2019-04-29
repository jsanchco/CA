namespace CA.API.Controllers
{
    #region Using

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Domain.Supervisor;
    using Microsoft.Extensions.Logging;
    using System;
    using System.Linq;
    using Domain.ViewModels;

    #endregion

    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentsController : ControllerBase
    {
        private readonly ICASupervisor _caSupervisor;
        private readonly ILogger<AddressesController> _logger;

        public DocumentsController(ILogger<AddressesController> logger, ICASupervisor caSupervisor)
        {
            _logger = logger;
            _caSupervisor = caSupervisor;
        }

        // GET api/documents/5
        [HttpGet("{id}")]
        public object Get(int id)
        {
            try
            {
                return _caSupervisor.GetDocumentById(id);
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
                var data = _caSupervisor.GetAllDocuments().ToList();
                return new { Items = data, data.Count };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        [HttpPost]
        public object Post([FromBody]DocumentViewModel documentViewModel)
        {
            try
            {
                var result = _caSupervisor.AddDocument(documentViewModel);
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        [HttpPut]
        public object Put([FromBody]DocumentViewModel documentViewModel)
        {
            try
            {
                if (_caSupervisor.UpdateDocument(documentViewModel) && documentViewModel.id != null)
                {
                    return _caSupervisor.GetDocumentById((int)documentViewModel.id);
                }

                return null;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        // DELETE: api/documents/5
        [HttpDelete("{id:int}")]
        public object Delete(int id)
        {
            try
            {
                return _caSupervisor.DeleteDocument(id);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

    }
}