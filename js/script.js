
/* =========================
   1. SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* =========================
   2. MOBILE MENU TOGGLE (if you add hamburger later)
========================= */

const nav = document.querySelector("nav");

function toggleMenu() {
  nav.classList.toggle("active");
}


/* =========================
   3. MAIL BUTTON (CONTACT)
   - works for any element with class .mail-btn
========================= */

document.querySelectorAll(".mail-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    window.location.href =
      "mailto:yourmail@gmail.com?subject=Hotel%20Booking&body=Hello,%20I%20want%20to%20book%20a%20room.";
  });
});


/* =========================
   4. WHATSAPP FLOAT BUTTON
========================= */

const whatsappBtn = document.querySelector(".floating");

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", function (e) {
    e.preventDefault();

    window.open(
      "https://wa.me/91XXXXXXXXXX?text=Hello%20I%20want%20to%20book%20a%20room",
      "_blank"
    );
  });
}


/* =========================
   5. REVIEW FORM HANDLING
========================= */

const reviewForm = document.querySelector(".review-form");

if (reviewForm) {
  reviewForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector("input[type='text']").value;
    const message = this.querySelector("textarea").value;

    if (name === "" || message === "") {
      alert("Please fill all fields");
      return;
    }

    alert("Thank you for your review, " + name + "!");

    this.reset();
  });
}


/* =========================
   6. HEADER BACKGROUND ON SCROLL
========================= */

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(7, 26, 53, 0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background = "transparent";
  }
});


/* =========================
   7. BUTTON CLICK ANIMATION FEEDBACK
========================= */

document.querySelectorAll(".primary, .secondary").forEach(btn => {
  btn.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";

    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);
  });
});