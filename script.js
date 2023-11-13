const openMenuBtn = document.getElementById("open")
const closeMenuBtn = document.getElementById("close")
const phoneMenu = document.getElementById("phone-menu")

function openMenu() {
    openMenuBtn.style.display = "none"
    closeMenuBtn.style.display = "block"
    phoneMenu.style.display = "flex"
}

openMenuBtn.addEventListener("click", openMenu) 

function closeMenu() {
    openMenuBtn.style.display = "block"
    closeMenuBtn.style.display = "none"
    phoneMenu.style.display = "none"
}

closeMenuBtn.addEventListener("click", closeMenu) 
