using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string UserName { get; set; }

        //該拿到的類型 e.g.[Phone]
        [Required]
        [StringLength(8, MinimumLength = 4)]
        public string Password { get; set; }
    }
}