using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
namespace API.Controllers
{
    [ApiController]
    [Route("tweets")]
    public class TweetController: ControllerBase
    {
        public IEnumerable<string> Get()
        {
           return new string[] {"tweet1", "tweet2"};
           
        }
    }
        
        
}