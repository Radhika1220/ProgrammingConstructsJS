//4.Gambling game and prints the win,loss and whether gambler win the match or not
let lose=0;
let initialAmount=100;
let betCount=0,winCount=0,loseCount=0;

while(initialAmount<200 && lose<initialAmount)
{
    let bet=Math.floor(Math.random()* 10)%2;
    if(bet==1)
    {
        initialAmount++;
        winCount++;
    }
    else
    {
     initialAmount--;
    loseCount++;
    }
    betCount++;
}
console.log("Number of Wins "+winCount+"\nNumber of losses "+loseCount+"\nTotal Bets made "+betCount);
if(initialAmount==200)
{
    console.log("Gambler Won the Match!!!");
}
else
{
    console.log("Gambler lost the Match!!!");
}