var button = document.getElementsByClassName("soc");

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("mouseover", function() {
        this.style.transform = "scale(1.2)";
    });
    button[i].addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
    });
}