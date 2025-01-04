/**Conditional Logic Inside a Function:**
   Write a function `checkAge` that:
   - Takes an age as input.
   - Returns:
     - `"Teenager"` if age is between `13` and `19`.
     - `"Adult"` if age is `20` or older.
     - `"Child"` otherwise.
   Call the function with `15` and print the result.
*/
function checkAge (age){
   if(age>=20){
      return "Adult";
   }
   else if(age>=13){
      return "teenager"
   }
   else{
      return "child"
   }
}
console.log(checkAge(15));