// ReSharper disable InconsistentNaming
namespace CA.Domain.ViewModels
{
    public class DocumentViewModel : BaseEntityViewModel
    {
        public string name { get; set; }
        public string url { get; set; }

        public int documentTypeId { get; set; }
        public string documentTypeName { get; set; }
    }
}