myitem2 = document.getElementById("Headshot");
let imageSizeToggle = 0;
    myitem2.addEventListener("click", onClick);
    function onClick() {  
        if (imageSizeToggle == 0) {
            imageSizeToggle = 1
            myitem2.style.width = "160px";
            myitem2.style.height = "200px";
        } else {
            imageSizeToggle = 0
            myitem2.style.width = "80px";
            myitem2.style.height = "100px";
        }
}