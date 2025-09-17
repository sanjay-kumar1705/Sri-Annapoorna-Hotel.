// Smooth Scroll Animation for nav links
document.querySelectorAll("nav .nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: "smooth",
      });
    }

    // Update active class on nav links
    document
      .querySelectorAll("nav .nav-link")
      .forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});

// Animate menu cards on scroll
const menuCards = document.querySelectorAll("[data-animate]");

function checkCards() {
  const triggerBottom = window.innerHeight * 0.9;

  menuCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.animation = "fadeInUp 0.8s ease forwards";
    }
  });
}

window.addEventListener("scroll", checkCards);
window.addEventListener("load", checkCards);