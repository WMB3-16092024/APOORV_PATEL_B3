/**Switch with Function:**
   Predict the output:
   ```javascript
   function checkAgeGroup(age) {
       switch (true) {
           case age >= 60:
               return "Senior";
           case age >= 18:
               return "Adult";
           default:
               return "Child";
       }
   }
   console.log(checkAgeGroup(25));
   ```*/
   function checkAgeGroup(age) {
    switch (true) {
        case age >= 60:
            return "Senior";
        case age >= 18:
            return "Adult";
        default:
            return "Child";
    }
}
console.log(checkAgeGroup(25))
//code will print Adult
   