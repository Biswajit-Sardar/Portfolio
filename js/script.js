
const openBtn = document.getElementById("open-menu-btn");
const closeBtn = document.getElementById("close-menu-btn");
const navBox = document.querySelector(".nav-box");

openBtn.addEventListener("click", () => {
    navBox.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navBox.classList.remove("active");
});

