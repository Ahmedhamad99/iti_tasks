
var arrayOfNams = ["ahmed","adm","adl","amir","anas"];
function getTwoNamesRandom(arrayOfNames)
{
    var firstName = arrayOfNames[Math.floor(Math.random()* arrayOfNames.length)];
    var secondName = arrayOfNames[Math.floor(Math.random()* arrayOfNames.length)];
    document.writeln("The first name is => " +firstName+"<br>");
    document.writeln("The second name is => " +secondName+"<br>");

}
getTwoNamesRandom(arrayOfNams);