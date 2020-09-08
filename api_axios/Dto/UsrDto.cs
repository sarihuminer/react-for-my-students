using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using dal;
namespace Dto
{
   public class UsrDto
    {

        public string first_name { get; set; }
        public string last_name { get; set; }
        public string userName { get; set; }
        public string user_password { get; set; }
        public string email { get; set; }

        public UsrDto(user u)
        {
            first_name = u.first_name;
            last_name = u.last_name;
            userName = u.userName;
            user_password = u.user_password;
            email = u.email;
        }
        public UsrDto()
        {
                
        }
        public static user Todal(UsrDto u)
        {
            return new user
            {
                email = u.email,
                first_name = u.first_name,
                last_name = u.last_name,
                userName = u.userName,
                user_password = u.user_password,
                id = 1
            };
        }

    }
}
