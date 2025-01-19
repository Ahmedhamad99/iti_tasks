const student = {

    name:"John Doe",
    age: 20,
    grades:{
        math:90,
        science: 85,
        literature:88
    },
    contactinfo:
    {
        email:"johndoe@example.com",
        phone:"123-456-7890"
    }
};

function displayObj(object)
{
    for(var obje in object )
    {
        if(typeof object[obje]=='string'|| typeof object[obje]=='number' )
        {
            document.writeln(obje+":"+object[obje]+"<br>");
        }
        else
        {
            displayObj(object[obje]);
        }
        
    }
}
displayObj(student);