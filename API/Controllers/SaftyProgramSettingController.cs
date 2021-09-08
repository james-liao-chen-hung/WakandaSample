using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
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
        public async Task<ActionResult<IEnumerable<DownloadWithoutIdDto>>> GetSettings()
        {
            var settings = await _context.Settings.ToListAsync();
            var data = new List<DownloadWithoutIdDto>();
            foreach (var setting in settings)
            {
                data.Add(new DownloadWithoutIdDto {
                    ProgramName = setting.ProgramName,
                    OriginalFileName = setting.OriginalFileName,
                    InternalName = setting.InternalName,
                    ProductName = setting.ProductName,
                    CompanyName = setting.CompanyName,
                    Description = setting.Description,
                    Signatory = setting.Signatory,
                    ProductVersion = setting.ProductVersion,
                    Parameter = setting.Parameter,
                    UpdateTime = setting.UpdateTime
                });
            }
            return data;
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