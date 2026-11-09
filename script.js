// MENÚ RESPONSIVE

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Cerrar el menú al seleccionar una sección

navItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// RESALTAR LA SECCIÓN ACTIVA

const sections = document.querySelectorAll("main section[id]");

function highlightActiveSection() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 130;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", highlightActiveSection);

// BOTÓN VOLVER ARRIBA

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// AÑO AUTOMÁTICO EN EL PIE DE PÁGINA

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.textContent =
        `© ${new Date().getFullYear()} - Página desarrollada con HTML, CSS y JavaScript`;
}

// EJECUTAR AL CARGAR LA PÁGINA

highlightActiveSection();