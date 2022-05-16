using EventHubWebApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventHubWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        EventDbContext _eventDbContext;
        public EventsController(EventDbContext eventDbContext)
        {
            _eventDbContext = eventDbContext;
        }
        [Route("events")]
        [HttpGet]
        public List<TblEvent> GetAllPublicEvents()
        {
            return _eventDbContext.TblEvents.Where(x => x.IsSpecial == 0).ToList();
        }
        [Authorize]
        [HttpGet("specials")]
        public List<TblEvent> GetAllSpecialEvents()
        {
            return _eventDbContext.TblEvents.Where(x => x.IsSpecial == 1).ToList();
        }
    }
}
