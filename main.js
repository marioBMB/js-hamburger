

let hamburgerBtn = document.querySelector(".header-right > a");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let closeBtn = document.querySelector("a.close");
console.log(closeBtn);


hamburgerBtn.addEventListener("click", function(){
    hamburgerMenu.style.display = "block";
});

closeBtn.addEventListener("click", function(){
    hamburgerMenu.style.display = "none";
});

