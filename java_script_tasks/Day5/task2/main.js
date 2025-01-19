var nam = document.getElementById("idname");
var email = document.getElementById("idemail");
var passwod = document.getElementById("ipasssword");

var gender = document.querySelector("input[name='gender']:checked");
var sports = document.querySelector("input[name='sports']:checked");


var country = document.getElementById("country");
function validtion(event)
{   event.preventDefault();
    

    if(!nam.value){
        var nameerror = document.getElementById("name");
        nameerror.innerHTML = "- Name is reqired";
        nam.style = "border-color: red";
        nameerror.style = "color:red";
        
    }
    
    if(!email.value){
        var emailerror = document.getElementById("email");
        emailerror.innerHTML = "- Email is not found";
        email.style = "border-color: red";
        emailerror.style = "color:red";
    }
    
    if(!passwod.value || passwod.value.lenght<8){
        var passwoderror = document.getElementById("password");
        passwoderror.innerHTML = "- password at least 8 character";
        passwod.style = "border-color: red";
        passwoderror.style = "color:red";
    }
    if(!gender)
    {
        var gendererror = document.getElementById("gendererror");
        gendererror.innerHTML = "- Please select your gender";
        gendererror.style = "color:red";
    }
    if(!sports){
        var sportr = document.getElementById("sport");
        sportr.innerHTML = "- Please select at least two sports";
        sportr.style = "color:red";
    }
    
    if(!country.value)
    {
        var count = document.getElementById("countryerror");
        count.innerHTML = "- Please select your country";
        count.style = "color:red"; 
    }
}


function clearAll(event)
{
    event.preventDefault();
    nam.value = "";
    email.value = "";
    passwod.value = "";
    
    gender.checked=false;
    sports.checked=false;
    country.value =document.querySelectorAll("select")[0] ;


}