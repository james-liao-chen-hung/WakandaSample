using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class SaftyProgramSettingController : BaseApiController
    {
        private readonly DataContext _context;
        public SaftyProgramSettingController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("safty-program-setting")]
        public async Task<ActionResult<IEnumerable<SaftyProgramSetting>>> GetSettings()
        {
            return await _context.Settings.ToListAsync();
        }

        [HttpPost("safty-program-setting")]
        public async Task<ActionResult<SaftyProgramSetting>> SetSettings(SaftyProgramSetting setting)
        {
            _context.Settings.Add(setting);
            await _context.SaveChangesAsync();
            return setting;
        }
    }
}