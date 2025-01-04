/**Find User Type:**
Write a script to check the type of user:
- Declare `userType = 'admin'`.
- Use a `switch-case` statement to print:
  - `"Admin privileges"` for `"admin"`.
  - `"Moderator privileges"` for `"moderator"`.
  - `"User privileges"` for `"user"`.
  - `"Invalid user type"` otherwise.*/
  let userType = "admin"
  switch(userType){
   case "Admin" :
   console.log("Admin privileges");
   break;
   case "moderator":
      console.log("moderator privileges")
      break;
      case "user" :
         console.log("user privileges")
         break;
         default:
            console.log("invalid user type")
   
  }
