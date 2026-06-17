// script.js

// ✅ Page load animation for header
window.onload = function() {
    const header = document.querySelector("header");
    if (header) {
        header.style.opacity = 0;
        setTimeout(() => {
            header.style.transition = "opacity 1.5s ease-in-out";
            header.style.opacity = 1;
        }, 300);
    }
};

// ✅ Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ✅ Gallery hover animation
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.05)";
        img.style.transition = "transform 0.3s ease";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});

// ✅ Form validation
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return false;
    }

    // Simple email check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
