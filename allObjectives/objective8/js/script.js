function toggleNav() {
    var updateElement = document.getElementById("menu-icon");
    updateElement.classList.toggle("open")
    var updateElement = document.getElementById("menu"); updateElement.classList.toggle("menu");
    var updateText = document.getElementById("text"); updateElement.classList.toggle("text");
}