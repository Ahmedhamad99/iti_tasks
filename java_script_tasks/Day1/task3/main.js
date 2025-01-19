var number = Number(prompt("Enter a number"));
var fiz="fizz";
var buz="buzz";
if (number%3==0)
{
    if(number%5==0)
    {
        document.writeln("OutPut = "+fiz+" "+buz);
    }
    else
    {
        document.writeln("OutPut = "+fiz);
    }
}
else if(number%5==0)
{
    if(number%3==0)
        {
            document.writeln("OutPut = "+fiz+" "+buz);
        }
        else
        {
            document.writeln("OutPut = "+buz);
        }
}
else
{
    document.writeln("none");
}