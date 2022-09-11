// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}


//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a) {
    a.addEventListener()
        ("click", function() {
            navCollapse.classList.remove("show");
        })

})

/*
const navbar = document.getElementById('.navbar');
const collapse = document.getElementById('.collapse');
document.onclick = function(e) {
    if (e.target.id != 'navbar' && e.target.id != 'collapse') {
        collapse.classList.remove('active');
        navbar.classList.remove('active');
    }
}
*/