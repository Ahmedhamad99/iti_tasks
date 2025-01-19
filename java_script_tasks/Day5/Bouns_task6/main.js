
var box = document.getElementById("flyingBox");

var posOfX =0;
var posOfY =0;

var speedx =1;
var speedy =1;

function movingBox()
{
    var boxWidth = box.offsetWidth;
    var boxHieth = box.offsetHeight;

    var windowWidth =window.innerWidth ;
    var windowHeight =window.innerHeight ;

    posOfX+=speedx;
    posOfY+=speedy;

    if(posOfX <=0 || posOfX+boxWidth>=windowWidth || posOfY <=0 || posOfY+boxHieth>=windowHeight) {
        speedx = -1;
        speedy = -1;
    };

    box.style.left = posOfX + "px";

    box.style.top =  posOfY + "px";
    
    requestAnimationFrame(movingBox);
    
    

    
}
movingBox();