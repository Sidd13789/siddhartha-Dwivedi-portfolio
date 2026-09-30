/* ================= NAVIGATION MENU ================= */

const navMenu = document.getElementById("myNavMenu");
const menuIcon = document.querySelector(".nav-menu-btn i");

function myMenuFunction() {
    const isOpen = navMenu.classList.toggle("responsive");

    // bars icon <-> X icon
    menuIcon.classList.toggle("uil-bars", !isOpen);
    menuIcon.classList.toggle("uil-multiply", isOpen);
}

function closeMenu() {
    navMenu.classList.remove("responsive");
    menuIcon.classList.add("uil-bars");
    menuIcon.classList.remove("uil-multiply");
}

// close on link click
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", closeMenu);
});

// close on outside click
document.addEventListener("click", e => {
    if (!e.target.closest("#header")) closeMenu();
});

// close when resizing back to desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
});


/* ================= NAVBAR SHADOW ================= */

const navHeader = document.getElementById("header");

function headerShadow() {
    const scrolled = window.scrollY > 50;
    const small = window.innerWidth <= 900;

    navHeader.style.boxShadow = scrolled ? "0 1px 6px rgba(0, 0, 0, 0.1)" : "none";
    navHeader.style.height = scrolled ? "70px" : (small ? "70px" : "90px");
}

window.addEventListener("scroll", headerShadow, { passive: true });
headerShadow();


/* ================= TYPING EFFECT ================= */

new Typed(".typedText", {
    strings: ["Software Engineer", "Web Developer", "ML Engineer", "Programmer"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1800
});


/* ================= SCROLL REVEAL ================= */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {

    const isMobile = window.innerWidth <= 900;

    const sr = ScrollReveal({
        origin: "bottom",
        distance: isMobile ? "30px" : "60px",
        duration: 1000,
        easing: "cubic-bezier(.22, .8, .3, 1)",
        reset: false,
        mobile: true
    });

    sr.reveal(".featured-text-card");
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 300 });
    sr.reveal(".social_icons", { delay: 400 });
    sr.reveal(".featured-image", { delay: 300, origin: "right" });

    sr.reveal(".top-header");
    sr.reveal(".about-info", { delay: 100 });
    sr.reveal(".skills-box", { interval: 100 });
    sr.reveal(".project-card", { interval: 150 });
    sr.reveal(".achievement-card", { interval: 100 });
    sr.reveal(".experience-container", { delay: 100 });
    sr.reveal(".contact-info", { delay: 100, origin: "left" });
    sr.reveal(".form-control", { delay: 200, origin: "right" });
}


/* ================= ACTIVE NAV LINK ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function scrollActive() {
    const y = window.scrollY + 120;

    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const link = document.querySelector('.nav-menu a[href="#' + section.id + '"]');

        if (link && y >= top && y < bottom) {
            navLinks.forEach(nav => nav.classList.remove("active-link"));
            link.classList.add("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive, { passive: true });
scrollActive();