//6.Prime factorization 
var prompt = require("prompt-sync")();

// Find the factors 
let num = prompt("Enter the number:");
let factNum=num;
let res='';
//To check if there are prime factors of 2
while (num % 2 == 0)
{
    num /= 2;
    res +="2 ";
}
for (var i = 3; Math.sqrt(i) <= num; i++)
{
     while (i % 2 != 0 && num % i == 0)
    {   
    num /= i;
    res+=i+" ";
    }
}
console.log("Factors of number "+factNum+" = "+res);

  