using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentSystem.Models;

namespace StudentSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public StudentController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Student>>> GetSuperHeroes()
        {
            return Ok(await _context.Students.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetByIdSuperHeroes(int id)
        {
            return Ok(await _context.Students.FirstOrDefaultAsync(x => x.Id == id));
        }
        [HttpPost]
        public async Task<ActionResult<List<Student>>> CreateSuperHeroes(Student hero)
        {
            _context.Students.Add(hero);
            await _context.SaveChangesAsync();
            return Ok(await _context.Students.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<Student>>> UpdateSuperHeroes(Student hero)
        {
            var dbHero = await _context.Students.FindAsync(hero.Id);
            if (dbHero == null)
                return BadRequest("hero bulunamadı");
            dbHero.Name = hero.Name;
            dbHero.No = hero.No;
            dbHero.LastName = hero.LastName;
            dbHero.Place = hero.Place;
            dbHero.Class = hero.Class;
            await _context.SaveChangesAsync();
            return Ok(await _context.Students.ToListAsync());

        }
        [HttpDelete("{id}")]

        public async Task<ActionResult> DeleteSuperHeroes(int id)
        {
            var dbHero = await _context.Students.FindAsync(id);
            if (dbHero == null)
                return BadRequest("Hero bulunamadı");

            _context.Students.Remove(dbHero);
            await _context.SaveChangesAsync();
            return Ok(await _context.Students.ToListAsync());
        }
    }

}
