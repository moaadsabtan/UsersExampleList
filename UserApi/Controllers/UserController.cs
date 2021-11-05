using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserApi.Models;

namespace UserApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private static List<User> _items = new List<User>();

        public UserController()
        {
            for (int i = 0; i < 1000; i++)
            {
                string Id = i+1+"";
                _items.Add(new User() { Id = Id, Value = GetRandomString(Id) });
            }
        }
        [HttpGet]
        public IActionResult GetValues([FromQuery] Filter filter)
        {
            return Ok(_items.Skip(filter.Skip).Take(filter.Take));
        }

        private string GetRandomString(string Id)
        {
            // returns a random string
            return "User " + Id;
        }
    }
}
