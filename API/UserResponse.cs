using System.Collections.Generic;

namespace API
{
    public class UserResponse
    {
        // public List<Usernames> Statuses { get; set; }
        public string id_str { get; set; }
        public string name { get; set; }
        public string screen_name { get; set; }
        public string profile_image_url { get; set; }
    }
}