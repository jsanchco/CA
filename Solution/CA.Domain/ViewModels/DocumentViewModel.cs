// ReSharper disable InconsistentNaming
namespace CA.Domain.ViewModels
{
    public class DocumentViewModel : BaseEntityViewModel
    {
        public string name { get; set; }
        public string data { get; set; }

        public int documentTypeId { get; set; }
        public string documentTypeName { get; set; }

        public int? userId { get; set; }
    }
}