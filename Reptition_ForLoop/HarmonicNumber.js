//2.Calculating harmonic number
var prompt = require("prompt-sync")();
    //Gets the data from user
    let num = prompt("Enter the number:");
    let sum=0;
    for(var i=1;i<=num;i++)
    {
        sum+=(1/i);
    }
    console.log(num+"th harmonic number is: "+sum.toFixed(3));

