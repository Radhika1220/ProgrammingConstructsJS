            //UC1-->Get a random value of single digit using random function()
var randomVal=Math.floor(Math.random()*10);
console.log("Random value of single digit : "+randomVal);

               //UC2-->Generate a dice number between 1 to 6 
//Getting first value of dice number 
var diceNum1=Math.floor(Math.random()*6)+1;
console.log("First Dice Number : " + diceNum1);

//Getting second value of dice number 
var diceNum2=Math.floor(Math.random()*6)+1;
console.log("Second Dice Number : " + diceNum2);
             //UC3--->Adding two numbers

console.log("Addition of two dice numbers "+(diceNum1+diceNum2));
              //UC4-->Finding the sum and avergae value of five random numbers 
let sum=0;
let randomNum=0;
for(let i=1;i<=5;i++)
{
randomNum=Math.floor(Math.random()*100);
console.log("Random Number is " +randomNum);
sum+=randomNum;
}
console.log("Sum is : "+sum);
console.log("Average value of 5 random numbers :"+Math.round(sum/5));

           //UC5--->Unit Conversion
//Converting inch value to feet
let inchVal=42;
let feetVal=inchVal/12;
console.log("feet value of 42 : "+feetVal);
//Converting area of rectangle(in metre)
let length=60;
let breadth=40;
let metreConversion=0.3048;
console.log("Area of Rectangular plot in metres " +(length*breadth*metreConversion));
//Converting into acre 
let acreVal=0.000247105;
console.log("Area of 25 rectangular plot in acre "+Math.round((25*length*breadth*acreVal),2));