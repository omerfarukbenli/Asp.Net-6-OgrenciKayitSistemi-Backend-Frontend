using Microsoft.EntityFrameworkCore;
using StudentSystem.Models;

namespace StudentSystem
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
        //      base.OnConfiguring(optionsBuilder);
        //     optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=studentSystems;Trusted_Connection=True;");
        //}
        public DbSet<Student> Students { get; set; }
    }
}
