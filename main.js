
let hamburgerBtn = document.querySelector(".header-right > a");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let closeBtn = document.querySelector("a.close");


hamburgerBtn.addEventListener("click", function(){

    if (hamburgerMenu.className == "hamburger-menu" ) {

        hamburgerMenu.classList.add("active");
    }
    else {
        hamburgerMenu.className == "hamburger-menu";
    }

    /* si poteva anche risolvere tutto senza if/else, con:
     hamburgerMenu.classList.toggle("active")  
    
     ma risulta meno chiaro e meno granulare (se voglio ad es. eseguire azioni extra) */
});


closeBtn.addEventListener("click", function(){
    
    hamburgerMenu.className = "hamburger-menu";
});

