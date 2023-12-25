var icon = document.getElementById("icon");
const button = document.getElementById("slider")

button.onclick = function(){
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")){
        icon.src = "icons/sun.png";
    } else {
        icon.src = "icons/moon.png";
    }
}