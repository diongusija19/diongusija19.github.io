let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

    window.onscroll = () => {
          menu.classList.remove('bx-x');
    navbar.classList.remove('active');
    }
}

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("body").style.display = "block";
}

const typed = new Typed('.multiple-text', {
      strings: ['Frontend developer', '&web designer'],
      typeSpeed: 50,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });