
function handelKeyPress(event)
{
    

    var ifAltPressed = event.altKey ? "Alt key is pressed" : "Alt Key isn't pressed";

    var ifCtrlPressd = event.ctrlKey ? "Ctrl key is presseed" : "Ctrl key isn't pressed";

    var ifShiftPressed = event.shiftKey ? "Shift key is pressed" : "Shift key isn't pressed";
    
    var assciiCode = event.keyCode || event.which;

    document.writeln(`Key Name: ${event.key}`);
    document.writeln(`Ascii code for key: ${assciiCode}`);
    
    document.writeln("<br>"+ifAltPressed);
    document.writeln("<br>"+ifCtrlPressd);
    
    document.writeln("<br>"+ifShiftPressed);

}
document.addEventListener("keydown",handelKeyPress);