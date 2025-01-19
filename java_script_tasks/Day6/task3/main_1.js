function funcOftwoParam(par1,par2)
{
    if(arguments.length !== 2)
    {
        throw new Error("Function require only two paramters");
    }
    return `The first Parameter is ${par1} and the second one is ${par2}`;

}

try{
    console.log(funcOftwoParam(5,15));

    console.log(funcOftwoParam(15));


}
catch (error){
    console.error(error.message);

}