/**Switch Case with Breaks:**
Write a script where:
- Declare `day = 'Monday'`.
- Use `switch-case` with `break` to print:
  - `"Start of the workweek"` for `"Monday"`.
  - `"Midweek"` for `"Wednesday"`.
  - `"Weekend"` for `"Saturday"` and `"Sunday"`.
  - `"Not a valid day"` otherwise.*/
  let day = "saturday"
  switch(day){
    case "monday":
      console.log("Start of the workweek");
      break;
      case "wednesday" :
        console.log("Midweek");
        break;
        case "saturday" :
         case "sunday" :
          console.log("Weekend");
          break;
          default :
          console.log("not a valid day");

  }
