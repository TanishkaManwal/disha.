document.addEventListener("DOMContentLoaded", function() {
  const loginSignup = document.getElementById("login-signup");
  
  loginSignup.addEventListener("click", function() {
      alert("Redirecting to login/signup page...");
      // Here you can add actual redirection logic
  });

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
      tab.addEventListener("mouseover", function() {
          tab.style.backgroundColor = "#ddd";
      });
      tab.addEventListener("mouseout", function() {
          tab.style.backgroundColor = "white";
      });
  });
});
