function palindrome()
{
    var message = String(prompt("Enter your word"));
    var arryOfMessage = message.split('').reverse();
    var newMessage = arryOfMessage.join('');
    
    var caseInsens = prompt("You Want consider case sensitivity[y/n]?");
    if(caseInsens.toLowerCase()==='y')
    {
        if(newMessage===message)
        {
            document.writeln("Word is palindrome");
        }
        else
        {
            document.writeln("Word is not palindrome");
        }

    }
    else
    {
        if(newMessage.toLowerCase()===message)
        {
            document.writeln("word is palindrone");
        }
        else
        {
            document.writeln("word is not palindrone");
        }
    }

}
palindrome();