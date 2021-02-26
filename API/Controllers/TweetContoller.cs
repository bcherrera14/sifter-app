using System;
using System.Collections.Generic;
using System.Collections.Specialized;
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
    [Route("tweets")]
    public class TweetContoller
    {
        
        static readonly HttpClient client = new HttpClient();

        

        public async Task<TwitterResponse> Tweet(string token, string type)
        {
            Console.WriteLine(type);
            Console.WriteLine(token);


            var ACCESS_TOKEN = "AAAAAAAAAAAAAAAAAAAAAGweNAEAAAAADtBzp%2BcRoO54u%2FZZ11bxSnZUfvE%3DrzxvHeZcoMMzPofaXKHQMueIH1S7AbPL3uTptflav1qqMV8V0X";
            var TOKEN_TYPE = "Bearer";
            
            //client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(TOKEN_TYPE, ACCESS_TOKEN);
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(type, token);



            HttpResponseMessage response = await client.GetAsync("https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular");

            string tweetString = await response.Content.ReadAsStringAsync();


            return JsonConvert.DeserializeObject<TwitterResponse>(tweetString); 

        }
    }
}