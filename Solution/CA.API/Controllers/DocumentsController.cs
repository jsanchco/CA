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
    using System.Collections.Generic;
    using System.IO;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Http;
    using Domain.Helpers;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Options;

    #endregion

    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentsController : ControllerBase
    {
        private readonly ICASupervisor _caSupervisor;
        private readonly ILogger<AddressesController> _logger;
        private readonly IOptions<AppSettings> _config;
        private readonly IHostingEnvironment _env;

        public DocumentsController(
            ILogger<AddressesController> logger, 
            ICASupervisor caSupervisor, 
            IOptions<AppSettings> config,
            IHostingEnvironment env) 
        {
            _logger = logger;
            _caSupervisor = caSupervisor;
            _config = config;
            _env = env;
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

        [HttpPost("uploadfiles")]
        public async Task<IActionResult> Post(List<IFormFile> files)
        {
            try
            {
                var file = HttpContext.Request.Form.Files["uploadfiles"];
                var path = Path.Combine(_env.ContentRootPath, _config.Value.PathDocuments, "test.pdf");
                var size = file.Length;

                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                return Ok(new { size, path });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        [HttpGet("gettestfile")]
        public IActionResult GetTestFile(int documentId)
        {
            try
            {
                var localFilePath = Path.Combine(_env.ContentRootPath, _config.Value.PathDocuments, "test.pdf");
                if (!System.IO.File.Exists(localFilePath))
                {
                    _logger.LogError("File not found", "Error: ");
                    return StatusCode(500, "File not found");
                }

                var fStream = new FileStream(localFilePath, FileMode.Open, FileAccess.Read);
                return File(fStream, "application/octet-stream");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        [HttpGet("getimage")]
        public IActionResult GetImage(int documentId)
        {
            try
            {
                var localFilePath = Path.Combine(_env.ContentRootPath, _config.Value.PathImages, "test.jpg");
                if (!System.IO.File.Exists(localFilePath))
                {
                    _logger.LogError("File not found", "Error: ");
                    return StatusCode(500, "File not found");
                }

                var fStream = new FileStream(localFilePath, FileMode.Open, FileAccess.Read);
                return File(fStream, "image/jpeg");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception: ");
                return StatusCode(500, ex);
            }
        }

        //[HttpPost("uploadfiles")]
        ////public async Task<IActionResult> Post(List<IFormFile> files)
        //public async Task<IActionResult> Post(List<IFormFile> files)
        //{
        //    var httpPostedFile = HttpContext.Request.Form.Files["uploadfiles"];
        //    //var valueFromClient = HttpContext.Request.Form.Keys.FirstOrDefault(x => x == "car");
        //    var valueFromClient = HttpContext.Request.Form.Keys.FirstOrDefault(x => x == "document");
        //    var ObtainedValue = HttpContext.Request.Form[valueFromClient];
        //    var profession = JsonConvert.DeserializeObject<ProfessionViewModel>(ObtainedValue);

        //    var path = Path.Combine(_env.ContentRootPath, _config.Value.PathDocuments, "test.pdf");

        //    var size = files.Sum(f => f.Length);

        //    // full path to file in temp location
        //    var filePath = Path.GetTempFileName();

        //    foreach (var formFile in files)
        //    {
        //        if (formFile.Length > 0)
        //        {
        //            using (var stream = new FileStream(filePath, FileMode.Create))
        //            {
        //                await formFile.CopyToAsync(stream);
        //            }
        //        }
        //    }

        //    // process uploaded files
        //    // Don't rely on or trust the FileName property without validation.

        //    return Ok(new { count = files.Count, size, filePath });
        //}
    }
}