//5.Factorial of number
var prompt = require("prompt-sync")();
let num = prompt("Enter a number: ");
let fact = 1;
 if (num==0 || num ==1)
  {
    console.log("The factorial is "+num);
  }
   else
   {
       for(let i = 1;i<=num;i++)
       {
           fact=fact*i;
       }
       console.log("The factorial is "+fact);
   }
