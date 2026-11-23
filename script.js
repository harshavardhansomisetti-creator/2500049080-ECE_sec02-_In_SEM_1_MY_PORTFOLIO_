
// ==========================================
// PORTFOLIO - HARSHAVARDHAN
// ==========================================

// 1. MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});


// 2. TYPING ANIMATION

const typingElement = document.getElementById("typing");

const roles = [
    "ECE Student",
    "Embedded Systems Enthusiast",
    "Electronics Explorer",
    "Technology Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingElement.textContent =
        currentRole.substring(0, characterIndex);

    let speed = deleting ? 45 : 85;

    if (!deleting && characterIndex === currentRole.length) {
        deleting = true;
        speed = 1300;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// 3. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".section-heading, .about-card, .skill-card, .project-card, .education-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// 4. DYNAMIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// 5. CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");

    if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        return;
    }

    const yourEmail = "harshavardhansomisetti@gmail.com";

    const subject = encodeURIComponent(
        "Portfolio Contact - " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    status.textContent = "Opening your email application...";

    window.location.href =
        `mailto:${yourEmail}?subject=${subject}&body=${body}`;
});
