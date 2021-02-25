using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace API.Controllers
{
    [ApiController]
    [Route("token")]
    public class TokenController
    {
        static readonly HttpClient client = new HttpClient();
        
        // public async Task<CharacterResponse> Tweet()
        // {
        //     // var client = new HttpClient();
        //     HttpResponseMessage response = await client.GetAsync("https://swapi.py4e.com/api/people");

        //     string characterString = await response.Content.ReadAsStringAsync();

        //     return JsonConvert.DeserializeObject<CharacterResponse>(characterString); 

        // }

        public async Task<BearerToken> Token()
        {
            var userName = "bgQLtlkwTCJRAJUcsXmCNmSTA";
            var password = "2LpT3c5LWx7isQrlGYkytbzLdauupz0MdVdYkKNRAwpanzlPcS";
            var byteArray = Encoding.ASCII.GetBytes($"{userName}:{password}");
            client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));
            var url = "https://api.twitter.com/oauth2/token";
            var postData = "grant_type=client_credentials";
            var content = new StringContent(postData, Encoding.UTF8, "application/x-www-form-urlencoded");
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            HttpResponseMessage response = await client.PostAsync(url, content);

            string result = await response.Content.ReadAsStringAsync();
            Console.WriteLine(result);
            return JsonConvert.DeserializeObject<BearerToken>(result);
        }

        // public async Task<TwitterResponse> Tweet()
        // {
        //     // var client = new HttpClient();
        //     HttpResponseMessage response = await client.GetAsync("https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular");

        //     string tweetString = await response.Content.ReadAsStringAsync();

        //     return JsonConvert.DeserializeObject<TwitterResponse>(tweetString); 

        // }

    }
}