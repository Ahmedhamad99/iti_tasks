
var arr = [9,8,7,6,5,5,4,9,9,10,10,10];

function uniqueArray(arryofNum)
{
   return [...new Set(arryofNum)];
}

var result = uniqueArray(arr).sort((a,b)=>a-b);
document.writeln(result.sort((a,b)=>a-b));
document.writeln("the second lowest number = "+result[1]);
document.writeln("the second greatest number = "+result[result.length-2]);

