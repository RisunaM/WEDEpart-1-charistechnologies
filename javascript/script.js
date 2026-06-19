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

// 🌟 Gallery hover zoom
document.querySelectorAll(".image-grid img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

// 🌟 Form validation
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

// 🌟 Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// 🌟 Scroll‑to‑top button
const scrollBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 🌟 Modal popup for gallery images
const modal = document.createElement("div");
modal.id = "img-modal";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0,0,0,0.8)";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.zIndex = "2000";

const modalImg = document.createElement("img");
modalImg.style.maxWidth = "90%";
modalImg.style.maxHeight = "90%";
modalImg.style.borderRadius = "8px";
modalImg.style.boxShadow = "0 4px 10px rgba(0,0,0,0.5)";

modal.appendChild(modalImg);
document.body.appendChild(modal);

// Close modal on click
modal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Attach click events to gallery images
document.querySelectorAll(".image-grid img").forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.style.display = "flex";
  });
});

// 🌟 Modal popup with keyboard controls
const modal = document.createElement("div");
modal.id = "img-modal";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0,0,0,0.8)";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.zIndex = "2000";

const modalImg = document.createElement("img");
modalImg.style.maxWidth = "90%";
modalImg.style.maxHeight = "90%";
modalImg.style.borderRadius = "8px";
modalImg.style.boxShadow = "0 4px 10px rgba(0,0,0,0.5)";

modal.appendChild(modalImg);
document.body.appendChild(modal);

let galleryImages = Array.from(document.querySelectorAll(".image-grid img"));
let currentIndex = -1;

// Open modal on image click
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    modalImg.src = img.src;
    modal.style.display = "flex";
  });
});

// Close modal on click outside image
modal.addEventListener("click", e => {
  if (e.target !== modalImg) {
    modal.style.display = "none";
  }
});

// Keyboard controls
document.addEventListener("keydown", e => {
  if (modal.style.display === "flex") {
    if (e.key === "Escape") {
      modal.style.display = "none"; // Close modal
    }
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      modalImg.src = galleryImages[currentIndex].src;
    }
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      modalImg.src = galleryImages[currentIndex].src;
    }
  }
});
