// Example: simple form submission alert
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting Café Amplify! We'll get back to you soon.");
      form.reset();
    });
  }
});
