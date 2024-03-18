myitem = document.getElementById("firsttest");
    myitem.addEventListener("click", onClick);
    function onClick() {  
        myitem.style.color = "red";  
        myitem.style.fontSize = "36px";
}
    myitem.addEventListener("click", onMouseOut);
    function onMouseOut() {
        myitem.style.color = "rgb(11, 11, 112)";
        myitem.style.fontSize = "small";
}
//first line is grabbing the text from the html file
//second line is what I will do to the line
//third line is what will happen to the line when I commit the action
thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onButtonClick);
function onButtonClick() {  
    otheritem.style.color = "red";  
}
textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);
function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}