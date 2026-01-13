document.addEventListener("DOMContentLoaded", () => {
  // Simple interactions for the "fake" buttons
  const subscribeBtn = document.querySelector(".subscribe-btn");
  const emailInput = document.querySelector(".email-input");

  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
      if (emailInput.value) {
        alert("Thanks for subscribing to The Daily Insight! (This is a demo)");
        emailInput.value = "";
      } else {
        alert("Please enter an email address.");
      }
    });
  }

  const followBtns = document.querySelectorAll(".follow-btn");
  followBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.innerText === "Follow") {
        this.innerText = "Following";
        this.style.backgroundColor = "#e0e0e0";
        this.style.color = "#333";
      } else {
        this.innerText = "Follow";
        this.style.backgroundColor = ""; // Reset to CSS default
        this.style.color = "";
      }
    });
  });

  // Sticky Header Scroll Effect (Optional)
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
});
