 const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');

  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });


// scroll up button /////////////////////////////
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show/hide button with fade
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  // Smooth scroll to top
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });



// Dropdown functionality ///////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const arrow = dropdown.querySelector(".dropdown-arrow");

  arrow.addEventListener("click", (e) => {
    e.stopPropagation(); 
    dropdown.classList.toggle("open");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
});


// Authentication modal /////////////////////////
const authModal = document.getElementById("auth-modal");
const openAuth = document.getElementById("open-auth");
const closeAuth = document.getElementById("close-auth");
const backdrop = document.querySelector(".auth-backdrop");

const loginTab = document.getElementById("login-tab");
const signupTab = document.getElementById("signup-tab");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

openAuth.onclick = () => authModal.classList.add("open");
closeAuth.onclick = () => authModal.classList.remove("open");
backdrop.onclick = () => authModal.classList.remove("open");

// Tab switching
loginTab.onclick = () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
};

signupTab.onclick = () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
};

// Text link switching
document.getElementById("switch-to-signup").onclick = () => signupTab.click();
document.getElementById("switch-to-login").onclick = () => loginTab.click();


