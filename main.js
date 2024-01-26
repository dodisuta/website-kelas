window.addEventListener("scroll", function(){
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})

//class active
const navbarNav = document.querySelector(".container-li");

//menu di klik
document.querySelector("#hamburger").onclick = () => {
    navbarNav.classList.toggle("action");
};

// klik diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger");
document.addEventListener('click', function(e) {
   if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove("action");
   }
});