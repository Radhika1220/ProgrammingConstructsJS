let min_val=Math.min();
let max_val=Math.max();
for(var i=1;i<=5;i++)
{
var randomVal=Math.floor(Math.random()*1000);
console.log("random value " +randomVal);
if(randomVal<min_val)
{
    min_val=randomVal;
}
else if(randomVal>max_val)
{
   max_val=randomVal;
}
}
console.log("Minimum value " +min_val);
console.log("Maximum value " +max_val);