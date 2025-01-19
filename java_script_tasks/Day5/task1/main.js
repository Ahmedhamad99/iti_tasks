

var content = document.getElementById("typein");
// document.getElementById("output").innerHTML = content;


function openNew(){
    // console.log(content.value);
    var mywindow = window.open("about.html","","width=300px, height=300px");
    var count = 0;
    mywindow.setInterval(function()
    {
       
                mywindow.document.writeln(content.value[count]);
                count++;
            
    },500

    );
    
}