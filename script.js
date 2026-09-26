/* -------------------------------- */
/* REVEAL ON SCROLL */
/* -------------------------------- */

const reveals = document.querySelectorAll(".content, .footer");

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("active");

        }

    });

};

reveals.forEach(section => {

    section.classList.add("reveal");

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



/* -------------------------------- */
/* NAVBAR BACKGROUND */
/* -------------------------------- */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        nav.style.background = "rgba(255,255,255,.88)";

        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        nav.style.background = "rgba(255,255,255,.65)";

        nav.style.boxShadow = "none";

    }

});



/* -------------------------------- */
/* ACTIVE LINK */
/* -------------------------------- */

const sections = document.querySelectorAll("section");

const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/* -------------------------------- */
/* IMAGE PARALLAX */
/* -------------------------------- */

const images = document.querySelectorAll(".content img");

window.addEventListener("scroll", () => {

    images.forEach(image => {

        const speed = image.getBoundingClientRect().top * 0.03;

        image.style.transform = `translateY(${speed}px)`;

    });

});



/* -------------------------------- */
/* IMAGE FADE-IN */
/* -------------------------------- */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.01,

    rootMargin: "50px 0px 50px 0px"

});

images.forEach(image => {

    image.style.opacity = "0";

    image.style.transform = "translateY(40px)";

    image.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(image);

});



/* -------------------------------- */
/* SMOOTH SCROLL */
/* -------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))

            .scrollIntoView({

                behavior:"smooth"

            });

    });

});