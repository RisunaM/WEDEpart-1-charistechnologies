// script.js

// ✅ Header fade-in animation
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

// ✅ Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ✅ Gallery hover zoom
document.querySelectorAll(".image-grid img").forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.05)";
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
        alert("Please fill in all fields.");
        return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Invalid email format.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
