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