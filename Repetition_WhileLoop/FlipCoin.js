var headCount=0;
var tailCount=0;
while(headCount<=10 || tailCount<=10)
{
    let coinVal=Math.floor(Math.random()*10)%2;
    console.log(coinVal);
    if(coinVal==0)
    {
        console.log("Head")
        headCount++;
    }
    else
    {
        console.log("Tail")
        tailCount++;
    }
}
if(headCount==11)
{
    console.log("******Head is the Winner******"+headCount);
}
else
{
    console.log("***********Tail is the Winner*********"+ tailCount);
}

