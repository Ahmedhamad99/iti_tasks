var userName = prompt("Enter your name please");
while(typeof userName != "string")
{
    var userName = prompt("Enter your name in character");
}

var userNUM = Number(prompt("Enter your number"));
var numberPattern = /[0-9]{9}/;
while(!numberPattern.test(userNUM))
{
    var userNUM = Number(prompt("Enter your number"));
}

var usermobile = prompt("Enter your  mobile number");
var mobilePattern = /^(010|011|012)\d{8}/;  
while(!mobilePattern.test(usermobile))
{
    var usermobile = prompt("Enter your  mobile number");

}

var userEmail = prompt("Enter your email");
var emailPattern = /[a-z_]{3}@[1-9]{3}.com/;
while(!emailPattern.test(userEmail))
{
    var userEmail = prompt("Enter your email");
}


document.writeln("<h2>"+"Welcome dear guest "+userName+"</h2>");
document.writeln("<h2>"+"Telephone number "+userNUM+"</h2>");
document.writeln("<h2>"+"Your mobile number "+usermobile+"</h2>");
document.writeln("<h2>"+"your email adress is "+userEmail+"</h2>");
