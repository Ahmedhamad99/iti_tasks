function areaOfCircle()
{
   var raduis = Number(prompt("What is the value of circle area?"));
   const pi = Math.PI;

   var area = pi*raduis*raduis;
   alert("The area of thr circle is "+area);

}
areaOfCircle();

function squareRoot()
{
    var numbr = Number(prompt("What is the number you want to calculate the square root?"));
    var ssquare = numbr * numbr;
    alert('The square root for '+numbr+" is "+ssquare);
}
squareRoot();


function cosOfAngel()
{
    var angle = Number(prompt("What is the angle you want to claculate cos value?"));
    var anglCos = Math.abs(Math.cos(angle*(Math.PI/180)));
    document.writeln("cos " + angle+" is "+anglCos);
}
cosOfAngel();