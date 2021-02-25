using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace API.Controllers
{
    [ApiController]
    [Route("tweets")]
    public class TweetController
    {
        static readonly HttpClient client = new HttpClient();
        
        // public async Task<CharacterResponse> Tweet()
        // {
        //     // var client = new HttpClient();
        //     HttpResponseMessage response = await client.GetAsync("https://swapi.py4e.com/api/people");

        //     string characterString = await response.Content.ReadAsStringAsync();

        //     return JsonConvert.DeserializeObject<CharacterResponse>(characterString); 

        // }

        public async Task Tweet()
        {
            // var userName = "bgQLtlkwTCJRAJUcsXmCNmSTA";
            // var password = "2LpT3c5LWx7isQrlGYkytbzLdauupz0MdVdYkKNRAwpanzlPcS";
            var url = "https://api.twitter.com/oauth2/token";
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            var data = new StringContent("application/json");
            HttpResponseMessage response = await client.PostAsync(url, data);
            string result = await response.Content.ReadAsStringAsync();
            Console.WriteLine(result);
        }

    }
}