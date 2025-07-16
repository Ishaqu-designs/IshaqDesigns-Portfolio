// Smooth scrolling for navbar links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const section = document.querySelector(targetId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

// Fade-in effect when scrolling
const sections = document.querySelectorAll('section');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      section.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger on load

// Button hover animation (just for fun)
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseover', () => {
    btn.style.transform = 'scale(1.05)';
  });
  btn.addEventListener('mouseout', () => {
    btn.style.transform = 'scale(1)';
  });
});
// ===== CONTACT FORM VALIDATION =====
document.addEventListener("DOMContentLoaded", function () {

  // Contact form elements
  const contactForm = document.getElementById("contactForm");
  const contactName = document.getElementById("contactName");
  const contactEmail = document.getElementById("contactEmail");
  const contactMessage = document.getElementById("contactMessage");
  const contactMsgBox = document.getElementById("contactMsg");

  // Signup form elements
  const signupForm = document.getElementById("signupForm");
  const signupName = document.getElementById("signupName");
  const signupEmail = document.getElementById("signupEmail");
  const signupPassword = document.getElementById("signupPassword");
  const signupMsgBox = document.getElementById("signupMsg");

  // Helper function to validate email format
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ✅ CONTACT FORM SUBMIT
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // stop page reload

      if (contactName.value.trim() === "" || contactEmail.value.trim() === "" || contactMessage.value.trim() === "") {
        contactMsgBox.textContent = "⚠ Please fill all fields!";
        contactMsgBox.className = "message error";
        return;
      }

      if (!isValidEmail(contactEmail.value)) {
        contactMsgBox.textContent = "⚠ Please enter a valid email!";
        contactMsgBox.className = "message error";
        return;
      }

      // Success
      contactMsgBox.textContent = "✅ Message sent successfully!";
      contactMsgBox.className = "message success";

      // Clear form
      contactForm.reset();
    });
  }

  // ✅ SIGNUP FORM SUBMIT
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (signupName.value.trim() === "" || signupEmail.value.trim() === "" || signupPassword.value.trim() === "") {
        signupMsgBox.textContent = "⚠ Please fill all fields!";
        signupMsgBox.className = "message error";
        return;
      }

      if (!isValidEmail(signupEmail.value)) {
        signupMsgBox.textContent = "⚠ Please enter a valid email!";
        signupMsgBox.className = "message error";
        return;
      }

      if (signupPassword.value.length < 6) {
        signupMsgBox.textContent = "⚠ Password must be at least 6 characters!";
        signupMsgBox.className = "message error";
        return;
      }

      // Success
      signupMsgBox.textContent = "✅ Signup successful!";
      signupMsgBox.className = "message success";

      // Clear form
      signupForm.reset();
    });
  }

});
<script>
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
</script>
