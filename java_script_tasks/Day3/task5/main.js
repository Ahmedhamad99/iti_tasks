
var add = (a,b) => a+b;
var subtraction= (a,b) => a-b;
var multyiply= (a,b) => a*b;
var division= (a,b) => a/b;




function applyOperation(numper1,numper2,operation)
{
  return operation(numper1,numper2);
}
document.write(applyOperation(5,3,add)+"<br>");
document.write(applyOperation(5,3,multyiply)+"<br>");
document.write(applyOperation(5,3,division)+"<br>");
document.write(applyOperation(5,3,subtraction)+"<br>");