const navLinks = document.querySelectorAll(".nav__menu a");
const navbarCollapse = document.querySelector("#mainNav");
const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

if (navbarCollapse && typeof bootstrap !== "undefined") {
  const collapseInstance = bootstrap.Collapse.getOrCreateInstance(navbarCollapse, {
    toggle: false
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        collapseInstance.hide();
      }
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
