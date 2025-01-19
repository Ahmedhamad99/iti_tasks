function showResult()
{
    var tagName = document.getElementById("tagName").value;
    
    var className = document.getElementById("className").value;
    
    var elementId = document.getElementById("idofelement").value;
    
    var elementName  =document.getElementById("nameofelemnt").value;

    var tagCountNum = document.getElementsByTagName(tagName).length;
    
    var classCountNum = document.getElementsByClassName(className).length;
   
    var ifIdexist = document.getElementById(elementId) ? "True" : "Flase";
    var nameCount = document.getElementsByName(elementName).length;

    var outPutOfCount = document.getElementById("output");
    outPutOfCount.innerHTML = `
                <p>Number Of ${tagName}: ${tagCountNum}</p>
                <p>Class ${className}: ${classCountNum}</p>
                <p>Id: ${ifIdexist}</p>
                <p>Name ${elementName}: ${tagCountNum}</p>
            `;

}