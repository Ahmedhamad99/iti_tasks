var bulbOn = 0;
var inBulb;

function changeBulb()
{
    var ptraffic = document.getElementById("traffic");
    var changes = ["Stop","Ready","Go"];

    var bulb = ["redLight", "yellowLight", "greenLight"];
    
    bulb.forEach((light,number)=>
    {

        document.getElementById(light).style.background = number === bulbOn ? light.replace("Light",""):"gray";
    });
    ptraffic.innerHTML = changes[bulbOn];
    
    bulbOn = (bulbOn+1)%bulb.length;
}
function startLight()
{
    setInterval(changeBulb,5000);
    
}

startLight();