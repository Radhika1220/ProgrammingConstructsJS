//4.Print the prime number in range
var prompt = require("prompt-sync")();

// take input from  user
let lowerNum = parseInt(prompt('Enter lower bound: '));
let higherNum = parseInt(prompt('Enter upper bound: '));
let res="";

console.log(`The prime numbers between ${lowerNum} and ${higherNum} are:`);

for (let i = lowerNum; i <= higherNum; i++)
 {
    let flag = 0;
    for (let j = 2; j < i; j++)
     {
        if (i % j == 0) 
        {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) 
    {
        res += i + " ";
   
    }
}
console.log(res);







   
