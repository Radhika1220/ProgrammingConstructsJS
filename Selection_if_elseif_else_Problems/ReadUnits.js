var prompt = require("prompt-sync")();
var digit = prompt("Enter the units digits in the range <1,10,100,1000....> : ");
        if(digit == 1)
        {
            console.log("The units digits is :One");
        }
        else if(digit == 10)
        {
           console.log("The units digits is :Ten");
        }
        else if(digit == 100)
        {
             console.log("The units digits is :Hundred");
        }
        else if(digit == 1000)
        {
            console.log("The units digits is :Thousand");
        }
        else if(digit == 10000)
        {
           console.log("The units digits is :Ten Thousand");
        }else if(digit == 100000)
        {
            console.log("The units digits is :Lakh");
        }
        else if(digit == 1000000)
        {
            console.log("The units digits is :Ten Lakhs");
        }
        else
        {
           console.log("Invalid Digit");
        }


