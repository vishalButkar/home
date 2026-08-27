
/* ===============================
   MOBILE MENU
================================ */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close mobile menu after clicking */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* ===============================
   DARK / LIGHT MODE
================================ */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "☀";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "◐";

        localStorage.setItem("theme", "light");

    }

});


/* Remember selected theme */

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀";

}


/* ===============================
   ANIMATED COUNTERS
================================ */

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target =
                    parseInt(counter.getAttribute("data-target"));

                let current = 0;

                const increment =
                    Math.max(1, Math.ceil(target / 60));

                const updateCounter = () => {

                    current += increment;

                    if (current >= target) {

                        counter.textContent = target + "+";

                    } else {

                        counter.textContent = current;

                        requestAnimationFrame(updateCounter);

                    }

                };

                updateCounter();

                observer.unobserve(counter);

            }

        });

    },

    {
        threshold: 0.5
    }

);

counters.forEach(counter => {

    observer.observe(counter);

});


/* ===============================
   SCROLL REVEAL
================================ */

const revealElements = document.querySelectorAll(
    ".research-card, .innovation-card, .project-card, .publication"
);

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});


/* ===============================
   CURRENT YEAR
================================ */

const year = new Date().getFullYear();

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${year} Your Name. All Rights Reserved.
        <span>Designed with curiosity + technology.</span>`;

}
