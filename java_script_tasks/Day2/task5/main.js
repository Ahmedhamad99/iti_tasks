function sortingNumber()
{
    var message = String(prompt("Enter your massege"));
    var charcter = prompt("Enter your Charcter");
    var newArrOfchar = message.split('');
    var indexOfcahr = [];
    for(var i = 0;i<newArrOfchar.length;i++)
    {
        if(charcter===newArrOfchar[i])
        {
               indexOfcahr.push(i);
        }
    }
    document.writeln("["+indexOfcahr+"]");


} 
sortingNumber();