document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const status = document.getElementById("formStatus");
  status.textContent = Thanks, ${name}! We’ve received your message.;
  this.reset();
});
