// script.js

// 🌟 Header fade‑in animation
window.addEventListener("load", () => {
  const header = document.querySelector("header");
  if (header) {
    header.style.opacity = 0;
    setTimeout(() => {
      header.style.transition = "opacity 1.5s ease-in-out";
      header.style.opacity = 1;
    }, 300);
  }
});

// 🌟 Smooth scroll for internal navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 🌟 Gallery hover zoom (matches CSS transition)
document.querySelectorAll(".image-grid img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

// 🌟 Form validation with clearer feedback
function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert("⚠️ Please fill in all fields before submitting.");
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  if (!email.value.match(emailPattern)) {
    alert("⚠️ Please enter a valid email address.");
    return false;
  }

  alert("✅ Form submitted successfully!");
  return true;
}
