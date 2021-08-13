//2.Guess the number 
var prompt = require("prompt-sync")();
let found = 0;
let start=0,end=100;
     function findMin()
     {
         return ((end+start) / 2);
     }
     function userInput(midNumber)
     {
        let option = parseInt(prompt("Enter:\n1-Is your number?"+midNumber+"\n2-Is your number less than?"+midNumber+"\n3-Is your number Greater than?"+midNumber));
         switch(option)
         {
             case 1:
                console.log(" Guessed Number is found " + midNumber);
                 found = 1;
                 break;
             case 2:
                 end = midNumber - 1;
                 break;
             case 3:
                 start= midNumber + 1;
                 break;
             default:
                console.log("Enter the valid option!!");
                 break;
         }
     }
     function GuessNumber()
     {
        console.log("Think of a number in Range (1-100)\n");
         while (start != end && found != 1)
         {
             let midNumber = Math.round(findMin());
             userInput(midNumber);
         }if(start==end)
         {
             console.log("Guessing number is :"+end);
         }
     }
    GuessNumber();

