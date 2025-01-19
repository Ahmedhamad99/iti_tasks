function addMultyNumber(...numbers)
{
    if(numbers.length === 0)
    {
        throw new Error("There is no number have been add sorry add one or more number");

    }
    for(let numbr in numbers)
    {
        if(typeof numbr !== "number")
        {
            throw new Error("This is not a numebr sorry you must to input numbers"); 
        }

    }
    var result = numbers.reduce((add,numb)=>add+numb,0);
    return result;

}


try{
    
    console.log(addMultyNumber(1,"adm"));
    console.log(addMultyNumber());
}
catch (error){
    console.error(error.message);
}
