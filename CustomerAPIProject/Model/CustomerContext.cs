using Microsoft.EntityFrameworkCore;

namespace CustomerAPIProject.Model
{
    public class CustomerContext:DbContext
    {
        public CustomerContext()
        {

        }
        public CustomerContext(DbContextOptions<CustomerContext> options) : base(options)
        {

        }
        public DbSet<Customer> Customers { get; set; }
    }
}
