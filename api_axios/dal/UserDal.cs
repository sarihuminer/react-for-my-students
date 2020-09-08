using System;

namespace dal
{
    public class UserDal
    {
        public static bool Register(user u)
        {
            using (hildeshimerEntities db = new hildeshimerEntities())
            {
                db.users.Add(u);
                db.SaveChanges();
                return true;
            }
            return false;
        }
    }
}