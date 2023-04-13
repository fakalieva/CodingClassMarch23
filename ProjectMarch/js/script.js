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