tailwind.config = {
      darkMode: 'class'
    }

var menuBtn = document.querySelector("#menu-btn")
var mobileMenu = document.querySelector("#mobile-menu");
menuBtn.addEventListener("click", function(){
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
})