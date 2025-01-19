function cpitalizeFun(capString)
{
    var lostring = capString.split(" ");
    for(var i=0; i<lostring.length;i++)
    {
        
        document.writeln(lostring[i][0].toUpperCase()+ String(lostring[i].slice(1)));
    }
}
cpitalizeFun("the quick brown fox")
