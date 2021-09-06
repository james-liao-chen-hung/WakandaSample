using System.IO;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FileUploadController : BaseApiController
    {
        public static IWebHostEnvironment _environment;
        public FileUploadController(IWebHostEnvironment environment)
        {
            _environment = environment;
        }
        
        public class FileUploadAPI
        {
            public IFormFile files { get; set; }
        }

        [HttpPost]
        public async Task<UploadDto> UploadFile([FromForm] FileUploadAPI objFile) {
            string uploadPath = _environment.ContentRootPath.Replace("\\API","\\sample\\assets\\Upload\\"); 
            if(objFile.files.Length > 0)
            {
                if(!Directory.Exists(uploadPath))
                {
                    Directory.CreateDirectory(uploadPath);
                }
                if(objFile.files.FileName.Contains(".json"))
                {
                    using(FileStream fileStream = System.IO.File.Create(uploadPath + "data.json"))
                    {
                    
                        objFile.files.CopyTo(fileStream);
                        fileStream.Flush();
                        return new UploadDto { 
                            Message = uploadPath + objFile.files.FileName + " is uploaded",
                            IsUpload = true
                        }; 
                    }
                }
                else
                {
                    return new UploadDto {
                        Message = "Upload " + objFile.files.FileName + " failed." + objFile.files.FileName + " is not a json file",
                        IsUpload = false
                    };
                }
            }
            else
            {
                return new UploadDto {
                    Message = "Upload " + objFile.files.FileName + "failed",
                    IsUpload = false
                };
            }
        }
    }
}