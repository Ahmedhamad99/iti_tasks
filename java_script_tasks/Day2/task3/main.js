function addfun(arryOfNum)
{
    var sum=0;
   for(var i=0;i<arryOfNum.length;i++)
   {
        sum+=arryOfNum[i];
   }
   return sum;
}
function multiplicationfun(arryOfNum)
{
    var mult=1;
    for(var i=0;i<arryOfNum.length;i++)
    {
         mult *=arryOfNum[i];
    }
    return mult;

}
function divionfun(arryOfNum)
{
    var divid=arryOfNum[0];
    for(var i=1;i<arryOfNum.length;i++)
    {

        if(arryOfNum[i]==0)
        {
            return "division error";
        }
         divid /=arryOfNum[i];
    }
    return divid;
    
}
function resultofc()
{
   var number = [];
   for(var i =0;i<3;i++)
   {
    number[i]=Number(prompt("Enter number"));
   }
   document.writeln("Sum of the 3 values "+number[0]+"+"+number[1]+"+"+number[2]+" = "+addfun(number) +"<br/>") ;
   document.writeln("multiplication of the 3 values "+number[0]+"*"+number[1]+"*"+number[2]+" = "+ multiplicationfun(number) +"<br/>") ;
   document.writeln("dividion of the 3 values "+number[0]+"/"+number[1]+"/"+number[2]+" = "+divionfun(number) +"<br/>") ;
   
}
resultofc();