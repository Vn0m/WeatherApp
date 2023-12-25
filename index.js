var icon = document.getElementById("icon");
const button = document.getElementById("slider")

button.onclick = function(){
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")){
        icon.src = "public/sun.png";
    } else {
        icon.src = "public/moon.png";
    }
}