using EventHubWebApi.Interfaces;
using EventHubWebApi.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;


namespace EventHubWebApi.ViewModels
{
    public class JWTManagerRepository : IJWTManagerRepository
    {
        Dictionary<string, string> UserRecords;

        private readonly IConfiguration configuartion;
        EventDbContext _eventDbContext;

        public JWTManagerRepository(IConfiguration iconfiguration, EventDbContext eventDbContext)
        {
            configuartion = iconfiguration;
            _eventDbContext = eventDbContext;
        }

        
        public Tokens Authenticate(Users users,bool IsRegister)
        {
            if (IsRegister)
            {
                TblUser user = new TblUser();
                user.UserName = users.UserName;
                user.Password = users.Password;
                _eventDbContext.TblUsers.Add(user);
                _eventDbContext.SaveChanges();
            }
            UserRecords = _eventDbContext.TblUsers.ToList().ToDictionary(x => x.UserName, x => x.Password);
            if (!UserRecords.Any(x=>x.Key==users.UserName && x.Value == users.Password))
            {
                return null;
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.UTF8.GetBytes(configuartion["JWT:Key"]);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject=new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name,users.UserName)
                }),
                Expires=DateTime.UtcNow.AddMinutes(10),
                SigningCredentials=new SigningCredentials(new SymmetricSecurityKey(tokenKey),SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return new Tokens { Token = tokenHandler.WriteToken(token) };
        }
    }
}
