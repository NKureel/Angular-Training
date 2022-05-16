using EventHubWebApi.Interfaces;
using EventHubWebApi.Models;
using EventHubWebApi.ViewModels;
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
    public class UsersController : ControllerBase
    {
        private readonly IJWTManagerRepository iJWTManager;
        EventDbContext _eventDbContext;
        public UsersController(IJWTManagerRepository jWTManager, EventDbContext eventDbContext)
        {
            iJWTManager = jWTManager;
            _eventDbContext = eventDbContext;
        }

        [HttpGet]
        public List<TblUser> Get()
        {
            return _eventDbContext.TblUsers.ToList();
        }
        [AllowAnonymous]
        [HttpPost]
        [Route("register")]
        public IActionResult Authenticate(Users userdata)
        {
            var token = iJWTManager.Authenticate(userdata,true);
            if (token == null)
            {
                return Unauthorized();
            }
            return Ok(token);
        }
        [HttpPost]
        [Route("login")]
        public IActionResult LoginUser(Users userdata)
        {
            var token = iJWTManager.Authenticate(userdata, false);
            if (token == null)
            {
                return Unauthorized();
            }
            return Ok(token);
        }
    }
}
