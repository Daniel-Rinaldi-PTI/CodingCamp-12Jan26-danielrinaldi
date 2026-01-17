welcomeMessage();

function welcomeMessage() {
    let userResponse = prompt("Your Name?");
    if(userResponse == null || userResponse.trim() === "") {
        userResponse = "Guest";
    }
    document.getElementById("welcome").innerText = "Welcome, " + userResponse + " in My Portfolio Website!";
}

function validateForm(params) {
    document.getElementById("pesan").addEventListener("submit", function(e) {
      e.preventDefault();
      let valid = true;

      // Name validation
      const name = document.getElementById("name").value.trim();
      if (name === "") {
        document.getElementById("nameError").classList.remove("hidden");
        valid = false;
      } else {
        document.getElementById("nameError").classList.add("hidden");
      }

      // Email validation
      const email = document.getElementById("email").value.trim();
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
      if (!email.match(emailPattern)) {
        document.getElementById("emailError").classList.remove("hidden");
        valid = false;
      } else {
        document.getElementById("emailError").classList.add("hidden");
      }

      // Phone validation (only digits, min 8 chars)
      const phone = document.getElementById("phone").value.trim();
      const phonePattern = /^[0-9]{8,15}$/;
      if (!phone.match(phonePattern)) {
        document.getElementById("phoneError").classList.remove("hidden");
        valid = false;
      } else {
        document.getElementById("phoneError").classList.add("hidden");
      }

      // Message validation
      const message = document.getElementById("message").value.trim();
      if (message === "") {
        document.getElementById("messageError").classList.remove("hidden");
        valid = false;
      } else {
        document.getElementById("messageError").classList.add("hidden");
      }

    // If all valid → show content in paragraph
    if (valid) {
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
      outputDiv.classList.remove("hidden");
      document.getElementById("pesan").reset();
    }
  });
}