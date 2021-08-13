//3.Check the given number is palindrome and also prime number using function
var prompt = require("prompt-sync")();
// take input from the user
function checkPrime()
{
var number = prompt("Enter a positive number: ");
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
        CheckPalindrome(number);
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
}


function CheckPalindrome(num)
	{
		var rem, temp, final = 0;
		temp = num;
		while(num>0)
		{
			rem = num%10;
			num = parseInt(num/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
		console.log("The number  "+ temp + " is Palindorme");
		}
		else
		{
			console.log("The number "+ temp + " is not a Palindorme");
		}
	}
  checkPrime();