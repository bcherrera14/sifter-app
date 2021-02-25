using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace API.Controllers
{
    
    [ApiController]
    [Route("swapi")]
    public class SwapiController: ControllerBase
    {
        public async Task<CharacterResponse> Tweet()
        {
            var client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync("https://swapi.py4e.com/api/people");

            string characterString = await response.Content.ReadAsStringAsync();

            return JsonConvert.DeserializeObject<CharacterResponse>(characterString); 

            // Console.WriteLine(characterResponse);
        }
        
        // public IEnumerable<string> Get()
        // {
        //    return new string[] {"tweet1", "tweet2"};
           
        // }
    }
        
        
}