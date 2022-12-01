const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
    searchInputEl.focus();
})
searchInputEl.addEventListener("focus", () => {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder", "Search");

})
searchInputEl.addEventListener("blur", () => {
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", "");
    searchInputEl.value = "";
})
const badgeEl = document.querySelector("header .badges");

window.addEventListener('scroll', _.throttle(() => {
    if (window.scrollY > 500) {
        //badge hide
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: "none",
        })
    }
    else {
        //badge show
        gsap.to(badgeEl, 0.4, {
            opacity: 1,
            display: "block",
        })
    }
}, 300));
// _.throttle(handler, delay time)