var prompt = require("prompt-sync")();
    let num1 =prompt("Enter number 1:");
    let num2 = prompt("Enter number 2:");
    let num3 = prompt("Enter number 3:");

    let res1 = (num1+num2)*num3;
    let res2 = (num1%num2)+num3;
    let res3 = (num3+num1)/num2;
    let res4 = (num1*num2)+num3;
    let largest=0;
let smallest=0;
if(res1<res2 && res1<res3 && res1<res4)
{
   smallest=res1;
}
else if(res2<res1 && res2<res3 && res2<res4)
{
    smallest=res2;
}
else if(res3<res1 && res3<res2 && res3<res4)
{
    smallest=res3;
}
else
{
    smallest=res4;
}

if(res1>res2 && res1>res3 && res1>res4)
{
   largest=res1;
}
else if(res2>res3 && res2>res4 && res2>res1)
{
    largest=res2;
}
else if(res3>res1 && res3>res2 && res3>res4)
{
    largest=res3;
}
else
{
    largest=res4;
}
 console.log("Result of Expression 1: "+res1+"\nResult of Expression 2: "+res2+"\nResult  of Expression 3: "+res3+"\nResult  of Expression 4:"+res4+"\n\nMaximum value is: "+largest+"\nSmallest value is: "+smallest);
