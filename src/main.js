window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

//class active
const navbarNav = document.querySelector(".container-li");

//menu di klik
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("action");
};

// klik diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("action");
  }
});

// validasi Form
const formContact = document.querySelector("form");

var name = document.getElementById("hs-firstname-contacts-1").value;
let lastName = document.getElementById("hs-lastname-contacts-1").value;
var email = document.getElementById("hs-email-contacts-1").value;
var message = document.getElementById("hs-about-contacts-1").value;

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}


