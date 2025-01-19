var flyOrNot = String(prompt("Do you fly?"));


if(flyOrNot.toLowerCase()==="yes")
{
   var wildOrNot= String(prompt("Are You Wild?"));
   if(wildOrNot.toLowerCase()==="yes")
   {
    document.writeln("<img src='./photo/egale.jpg'>")
   }
   else
   {
    document.writeln("<img src='./photo/sparrow.jpg'>")
   }
}
else
{
    var liveUnSea=String(prompt("Do you live under sea?"));
    if(liveUnSea.toLowerCase()==="yes")
    {
        var wildOrnot = String(prompt("Are You Wild?"));
        if(wildOrnot.toLowerCase()==="yes")
        {
            document.writeln("<img src='./photo/shark.jpg'");
        }
        else
        {
            document.writeln("<img src='./photo/dolphin.jpg'");
        }
    }
    else
    {
        var wilding= String(prompt("Are You Wild?"));
        if(wilding.toLowerCase()==="yes")
        {
            document.writeln("<img src='./photo/lion.jpg'>");
        }
        else
        {
            document.writeln("<img src='./photo/cat.jpg'>");
        }

    }
}