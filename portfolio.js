// ================= NAVBAR ACTIVE SCROLL =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// ================= CLICK PE ACTIVE =================
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});


// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// ================= CONTACT FORM =================
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const message = form.querySelector("textarea").value;

  if (name && email && message) {
    alert("Message sent successfully ✅");
    form.reset();
  } else {
    alert("Please fill all fields ❌");
  }
});


// ================= SCROLL ANIMATION =================
const elements = document.querySelectorAll(".card, section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});


// ================= HIRE ME BUTTON =================
const hireBtn = document.querySelector("#hireBtn");

if (hireBtn) {
  hireBtn.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth"
    });
  });
}