
var expireDate = new Date();

var nam = document.getElementById("name").value;
var age = document.getElementById("age").value;
var colo = document.getElementById("color").value;


var gender = document.querySelector("input[name='choose']:checked");

var im;

function creatNewPage()
{
    
    im = document.getElementById(gender.value); 
    
    
    var myNewwondo = window.open("","_blank","width=800,height=800");  
    myNewwondo.document.title = "about.html";
    var image = document.createElement("img");
    var div = document.createElement("div");
    
    var countNumberOfLoad = localStorage.getItem("pageLoadCount");
    if(countNumberOfLoad)
    {
        countNumberOfLoad = parseInt(countNumberOfLoad)+1;
    }
    else{
        countNumberOfLoad = 1;
    }
    localStorage.setItem("pageLoadCount",countNumberOfLoad);

    image.src =im.src;
    image.style.maxWidth = "50%";
    image.style.margin = "0px";
    image.style.position = "relative";
    
    div.style.display = "inline";
    div.style.alignItems = "center";
    div.style.marginLeft = "20px";
    div.style.marginTop = "150px";
    div.style.position = "fixed"
    div.innerHTML = `Welcome <p style='color:${colo};display:inline'>${nam} </p>you are visiting our page ${countNumberOfLoad} times`;

    myNewwondo.document.body.appendChild(image);

    myNewwondo.document.body.appendChild(div);
    
    
    
}

function getCookie(cookieName)
{
    var cook =document.cookie.split(";");
    for(var i=0;i<cook.length;i++)
        {
            if(cook[i].includes(cookieName))
            {
                return(cook[i].split("=")[1]);
            }
            
        }
    
}

function setCookie(cookieName,cookieValue,expiryDate)
{
    document.cookie = `${cookieName}=${cookieValue};expires=${expiryDate}`;

}

function deleteCookie(cookieName)
{
    var date = new Date();
    date.setDate(date.getDate() - 1)
    document.cookie = `${cookieName}=${getCookie(cookieName)};expires=${date}`;
    
}
function allCookieList()
{
    return document.cookie.split(";");
}

// expireDate.setDate(expireDate.getDate() + 3);
// setCookie("user","ahmed",expireDate);
// setCookie("usedd","adm",expireDate);
// setCookie("usd","ahd",expireDate);
// // deleteCookie("usd");
// setCookie("ur","adl",expireDate);
// // console.log(getCookie("usd"));
// // console.log(document.cookie);
// // console.log(allCookieList());

