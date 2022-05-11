using System.ComponentModel.DataAnnotations;

namespace CustomerAPIProject.Model
{
    public class Customer
    {
        [Key]
        public int ID { get; set; }
        public string CustomerCode { get; set; }

        public string CustomerName { get; set; }
        public int CustomerAmount { get; set; }
    }
}
