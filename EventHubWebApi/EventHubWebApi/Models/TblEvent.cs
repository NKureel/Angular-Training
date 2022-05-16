using System;
using System.Collections.Generic;

#nullable disable

namespace EventHubWebApi.Models
{
    public partial class TblEvent
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Date { get; set; }
        public int? IsSpecial { get; set; }
    }
}
