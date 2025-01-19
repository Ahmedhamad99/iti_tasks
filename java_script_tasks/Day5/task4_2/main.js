function handelKeyPress(event)
{
    event.preventDefault();

    document.writeln("Right click is not able in this page");
    
    

}
document.addEventListener("contextmenu",handelKeyPress);