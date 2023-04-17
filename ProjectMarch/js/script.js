//Smoth scrolling
function ScrollSmooth(link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top 
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links 
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }
    })
}

var alllinks = document.querySelectorAll("a:link");

//alllinks.forEach(ScrollSmooth);

for (var i = 0; i < alllinks.length; i++) {
    ScrollSmooth(alllinks[i]);
}


var openEl = document.getElementsByName("menu-outline")[0];
var closeEl = document.getElementsByName("close-outline")[0];
closeEl.classList.toggle("hideButton");
const headerEl = document.querySelector(".header");
var btnEl = document.querySelector(".btn-mobile-nav");
btnEl.addEventListener("click",

    function () {


        var mainNav = document.getElementById("main-nav");
        closeEl.classList.toggle("hideButton");
        openEl.classList.toggle("hideButton");
        mainNav.classList.toggle("nav-open");

    });
/*
function toggleClass(link) {

    link.classList.toggle("nav-close");
}

const headerEl = document.querySelector(".header");



const btnNavEl = document.querySelector(".btn-mobile-nav");
const allIcons = document.querySelectorAll(".icon-mobile-nav");


btnNavEl.addEventListener("click", function () {

    allIcons.forEach(toggleClass);
    headerEl.classList.toggle("nav-open");
});

const closeButton = document.getElementsByName("close-outline")[0];
closeButton.classList.toggle("nav-close");
//const sectionHeroEl = document.querySelector(".section-hero");

*/
