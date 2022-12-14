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

// Fade in
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((el, index) => {
    //gsap.to(element, time(second), option)
    gsap.to(el, 1, {
        delay: (index + 1) * 0.7,
        opacity: 1,
    })
});

//Vertical Loop
const verticalSwiper = document.querySelector(".swiper-container-vertical");
const verticalSwiperEl = verticalSwiper.querySelectorAll(".swiper");
const verticalLoop = () => {
    verticalSwiperEl.forEach((el, index) => {
        window.setTimeout(() => {
            verticalSwiper.scrollTop = verticalSwiper.clientHeight * index;
        }, 2000 * index)

    })
}
verticalLoop();
setInterval(verticalLoop, 2000 * verticalSwiperEl.length)

//Horizontal Swiper
const HorizontalSwiper = document.querySelector(".swiper-container-horizontal");
HorizontalSwiper.scrollLeft = 400;
const leftSwiper = document.querySelector(".notice .left-icon");
const rightSwiper = document.querySelector(".notice .right-icon");
leftSwiper.addEventListener("click", () => {
    HorizontalSwiper.scrollLeft -= 840;
    if (HorizontalSwiper.scrollLeft == 0) {
        leftSwiper.style.display = "none";

    }
    if (rightSwiper.style.display = "none") {
        rightSwiper.style.display = "block"
    }

})
rightSwiper.addEventListener("click", () => {
    HorizontalSwiper.scrollLeft += 840;
    if (HorizontalSwiper.scrollLeft > HorizontalSwiper.scrollWidth - 820) {
        rightSwiper.style.display = "none";
    }
    if (leftSwiper.style.display = "none") {
        leftSwiper.style.display = "block"
    }
})

//Promotion toggle button
const promotionToggle = document.querySelector(".inner .inner__right .toggle-promotion");
const promotionContainer = document.querySelector(".notice .swiper-wrapper");
promotionToggle.addEventListener("click", () => {
    promotionContainer.classList.toggle("hide")
})

//Floting Animation
const floatingAnimation = (selector) => {
    gsap.to(selector, 1, {
        y: 20,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: 1,
    })
}
floatingAnimation(".floating")

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((el) => {
    new ScrollMagic
        .Scene({
            triggerElement: el,
            triggerHook: 0.8,
        })
        .setClassToggle(el, "show")
        .addTo(new ScrollMagic.Controller());
})

// SWIPERJS
new Swiper(".swiper", {
    loop: true,
    autoplay: true,
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
})

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();