using System;

namespace API.Entities
{
    public class SaftyProgramSetting
    {
        public int Id { get; set; }
        public string ProgramName { get; set; }
        public string OriginalFileName { get; set; }
        public string InternalName { get; set; }
        public string ProductName { get; set; }
        public string CompanyName { get; set; }
        public string Description { get; set; }
        public string Signatory { get; set; }
        public string ProductVersion { get; set; }
        public string Parameter { get; set; }
        public DateTime UpdateTime { get; set; }
    }
}