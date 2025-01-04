/**Switch Case - Age Groups:**
   Write a script to check age groups:
   - Declare `age = 30`.
   - Use a `switch-case` statement to print:
     - `"Senior Citizen"` if age is greater than or equal to 60.
     - `"Adult"` if age is between 18 and 59.
     - `"Teenager"` if age is between 12 and 17.
     - `"Child"` otherwise.*/
     let age = 11
     switch(true){
      case age>=60 :
          console.log("Senior citizen");
         break;
         case age>=18 :
         console.log("Adult")
         break;

         case age>=12:
         console.log("Teenager")
         break;

         default :
         console.log("child")
         
     }
