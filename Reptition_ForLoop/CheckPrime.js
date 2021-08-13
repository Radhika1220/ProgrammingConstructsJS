//--3.Check whether the number is prime or not
var prompt = require("prompt-sync")();

// take input from the user
let number = prompt("Enter a positive number: ");
let isPrime = true;

if (number === 1)
 {
    console.log("1 is neither prime nor composite number.");
}
// check if number is greater than 1
else if (number > 1)
 {
    for (let i = 2; i < number; i++)
     {
        if (number % i == 0)
         {
            isPrime = false;
            break;
        }
    }
    if (isPrime)
     {
        console.log(`${number} is a prime number`);
    } 
    else 
    {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else
 {
    console.log("The number is not a prime number.");
}
