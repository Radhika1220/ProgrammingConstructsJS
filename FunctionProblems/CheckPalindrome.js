//2.Check Palindrome or not using function
var prompt = require("prompt-sync")();
function Palindrome()
	{
		var rem, temp, final = 0;
		var number = prompt("enter a number ");

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
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
    Palindrome();