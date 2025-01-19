
var numbers = [1,2,3,4,5];
function multi(number1)
{
    return number1 * number1;
}

function processArray(arrOfnumber,func)
{
    for(var i=0;i<arrOfnumber.length;i++)
    {
        document.writeln(func(arrOfnumber[i])+",");
    }

}
processArray(numbers,multi);