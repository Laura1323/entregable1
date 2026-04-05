const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll(".nav__menu a");
const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: true
  });
}

if (typeof GLightbox !== "undefined") {
  GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true
  });
}

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formMessage.textContent = "Por favor completa todos los campos correctamente.";
      return;
    }

    const name = contactForm.nombre.value.trim();
    formMessage.textContent = `Gracias, ${name}. Tu mensaje fue preparado correctamente.`;
    contactForm.reset();
  });
}
