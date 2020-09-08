using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using bl;
namespace api_axios.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {[Route("register")]
       public IHttpActionResult Register([FromBody]dal.user user)
        {
           bool b= bl.Userbl.Regiater(user);
            if(b==true)
            return Ok();
            return BadRequest();
        }
    }
}
