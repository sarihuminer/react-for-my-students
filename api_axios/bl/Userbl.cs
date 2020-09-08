using System;
using dal;
using Dto;

namespace bl
{
    public class Userbl
    {
        public static bool Regiater(UsrDto user)
        {
          user u=  UsrDto.Todal(user);
          return  UserDal.Register(u);
        }
    }
}