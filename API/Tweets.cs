using System.Collections.Generic;

namespace API
{
    public class Tweets
    {
        public string created_at { get; set; }
        public string text { get; set; }
        public int retweet_count { get; set; }
        public int favorite_count { get; set; }
        public string id_str { get; set; }
        public UserData User { get; set; }
    }
}