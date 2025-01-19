function myfuncount()
{
    var numOfE=0;
    var message = String(prompt("Enter your word"));
    for(var i=0; i<message.length;i++)
    {
        if(message[i].toLowerCase()=='e')
        {
           numOfE++;
        }
    }
    document.writeln("<h3 style='text-align:center;'>The count number of character e = "+numOfE+"</h3>");
}
myfuncount();