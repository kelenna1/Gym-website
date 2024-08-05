/*const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtn.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});*/
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.classList.toggle("ri-close-line", isOpen);
    menuBtnIcon.classList.toggle("ri-menu-line", !isOpen);
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.classList.remove("ri-close-line");
    menuBtnIcon.classList.add("ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header_content h2", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 800,
});
ScrollReveal().reveal(".header_content .header_btn", {
    ...scrollRevealOption,
    delay: 1100,
});

const scrollRevealDev={
    distance: "100px",
    origin: "left",
    duration: 1000
};

ScrollReveal().reveal(".about_card", {
    ...scrollRevealDev,
    delay: 500,
    interval: 500,
});

ScrollReveal().reveal(".trainer_card", {
    ...scrollRevealOption,
    delay: 150,
    interval: 500,
});

ScrollReveal().reveal(".blog_card", {
    ...scrollRevealOption,
    delay: 150,
    interval: 500,
});

ScrollReveal().reveal(".blog_btn", {
    ...scrollRevealOption,
    delay: 150,
    interval: 500,
});

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        thresholdDelta: 10,
        releaseOnEdges: true,
    },
});
