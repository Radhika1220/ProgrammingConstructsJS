//4.Unit conversion
var prompt = require("prompt-sync")();
let option=prompt("1.Feet to inch conversion\n2.Inch to Feet Conversion\n3.Feet to meter Conversion\n4.Meter to feet Conversion\n");

switch(option)
{
    case "1": 
    {
    let feetToInch=prompt("Enter the feet value ");
    console.log("Feet to inch " +feetToInch*12);
    break;
    }
    case "2":
    {
    let inchToFeet=prompt("Enter the inch value ");
    console.log("Inch to feet " +inchToFeet*0.0833333);
    break;
    }
     case "3":
    {
    let feetToMeter=prompt("Enter the feet value ");
    console.log("Feet to meters " +feetToMeter*0.3048);
    break;
    }
      case "4":
    {
    let meterToFeet=prompt("Enter the meter value ");
    console.log("meters to feet  " +meterToFeet*3.28084);
    break;
    }
    default:
    {
        console.log("Enter valid option!!!");
        break;
    }
}
