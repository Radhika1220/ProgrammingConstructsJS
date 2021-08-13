//1.Print the power of 2 table
var prompt = require("prompt-sync")();
    let num = prompt("Enter a number");
    let res='';
    for(let i =1;i<=num;i++)
    {
      res=res+"2 ^ "+ i + " = "+ Math.pow(2,i) +"\n";
    }     
   console.log(res);
