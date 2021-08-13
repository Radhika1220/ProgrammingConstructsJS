//1.Power of 2 table and check the condtion not exceed to 256
var prompt = require("prompt-sync")();
let num=prompt("Enter a number: ");
let res='';
let i=1;
while(i<=num && Math.pow(2,i) <256)
{
    res=res+"2 ^ "+ i + " = "+ Math.pow(2,i) +"\n";
    i++;
}
console.log(res);