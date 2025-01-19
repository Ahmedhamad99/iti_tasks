function sortingNumber()
{
    var number= [];
    for(var i=0;i<5;i++)
    {
        number[i]=Number(prompt("Enter your number"));
    }
    
    document.writeln("<h3 style='color:red'>u/'ve enterd the values of</h3> ["+number+"]");
    var newDesn =  number.sort((a,b)=> b-a);
    document.writeln("<h3 style='color:red'>ur values after being sortd descinding </h3>["+newDesn+"]");
    document.writeln("------------------");
    number.sort((a,b)=>a-b);
   
    document.writeln("<h3 style='color:red'> ur values after sortd bing sorted asending </h3>["+number+"]");
   

}
sortingNumber();