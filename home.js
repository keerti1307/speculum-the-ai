// Run once the page loads
window.onload = () => {
  // Get elements from HTML
  const usernameInput = document.getElementById("username");
  const registerBtn = document.getElementById("registerBtn");
  const loginBtn = document.getElementById("loginBtn");
  const guestBtn = document.getElementById("guestBtn");

  // Register button logic
  registerBtn.onclick = () => {
    const username = usernameInput.value.trim();
    if (username) {
      localStorage.setItem("speculumUser", username);
      alert("Registered successfully!");
      window.location.href = "trainer.html"; // Redirect after register
    } else {
      alert("Please enter your name to register.");
    }
  }

  // Login button logic
  loginBtn.onclick = () => {
    const username = usernameInput.value.trim();
    const savedUser = localStorage.getItem("speculumUser");

    if (username && username === savedUser) {
      alert(`Welcome back, ${username}!`);
      window.location.href = "trainer.html"; // Redirect after login
    } else {
      alert("User not found! Please register first.");
    }
  }
}
