//--2.read the number and display the corresponding day
var prompt = require("prompt-sync")();
let day=prompt("Enter the day from 1 to 7 : ");
switch(day)
{
    case "1":
    {
         console.log("The day is :Sunday");
        break;
    }
    case "2":
    {
      console.log("The day is :Monday");
    break;
    }
    case "3":
    {
      console.log("The day is :Tuesday");
    break;
    }
    case "4":
    {
      console.log("The day is :Wednesday");
    break;
    }
    case "5":
    {
      console.log("The day is :Thursday");
    break;
    }
    case "6":
    {
      console.log("The day is :Friday");
    break;
    }
    case "6":
    {
      console.log("The day is :Saturday");
    break;
    }
    default:
    {

      console.log("Invalid day!!!");
        break;
     }
}
