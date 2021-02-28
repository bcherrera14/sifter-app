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
    // [Route("tweets")]
    public class TweetContoller
    {
        
        static readonly HttpClient client = new HttpClient();
        [HttpGet("api/tweets/token")]
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
            // Console.WriteLine(result);
            return JsonConvert.DeserializeObject<BearerToken>(result);
        }

        
        [HttpGet("api/tweets/search")]
        public async Task<TwitterResponse> Tweet(string type, string token, string searchTerm, string searchUser, string result_type)
        {
            var newToken =  Uri.EscapeDataString(token);
            // Console.WriteLine(type);
            // Console.WriteLine(token);
            // Console.WriteLine(newToken);

            var ACCESS_TOKEN = "AAAAAAAAAAAAAAAAAAAAAGweNAEAAAAADtBzp%2BcRoO54u%2FZZ11bxSnZUfvE%3DrzxvHeZcoMMzPofaXKHQMueIH1S7AbPL3uTptflav1qqMV8V0X";
            var TOKEN_TYPE = "Bearer";
            // client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(TOKEN_TYPE, ACCESS_TOKEN);
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(type, token);
            // client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(TOKEN_TYPE, ACCESS_TOKEN);

            //Console.WriteLine(client.DefaultRequestHeaders);

            HttpResponseMessage response = await client.GetAsync($"https://api.twitter.com/1.1/search/tweets.json?q={searchTerm}{searchUser}&result_type={result_type}&lang=en");
            Console.WriteLine(response);

            string tweetString = await response.Content.ReadAsStringAsync();
            Console.WriteLine(tweetString);
            return JsonConvert.DeserializeObject<TwitterResponse>(tweetString); 

        }

        [HttpGet("api/tweets/users")]
        public async Task<UserResponse> Username()
        {
            var ACCESS_TOKEN = "AAAAAAAAAAAAAAAAAAAAAGweNAEAAAAADtBzp%2BcRoO54u%2FZZ11bxSnZUfvE%3DrzxvHeZcoMMzPofaXKHQMueIH1S7AbPL3uTptflav1qqMV8V0X";
            var TOKEN_TYPE = "Bearer";
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(TOKEN_TYPE, ACCESS_TOKEN);
            //client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(type, token);
            HttpResponseMessage response = await client.GetAsync("https://api.twitter.com/2/users/by?usernames=tesla");
            string usernameString = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<UserResponse>(usernameString); 

        }


    }
}