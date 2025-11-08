window.onload = () => {
  const usernameInput = document.getElementById("username");
  const registerBtn = document.getElementById("registerBtn");
  const loginBtn = document.getElementById("loginBtn");
  const guestBtn = document.getElementById("guestBtn");

  registerBtn.onclick = () => {
    const username = usernameInput.value.trim();
    if (username) {
      localStorage.setItem("speculumUser", username);
      alert("Registered successfully!");
      window.location.href = "trainer.html";
    } else {
      alert("Please enter your name to register.");
    }
  };

  loginBtn.onclick = () => {
    const username = usernameInput.value.trim();
    const savedUser = localStorage.getItem("speculumUser");
    if (username && username === savedUser) {
      window.location.href = "trainer.html";
    } else {
      alert("User not found! Please register first.");
    }
  };

  guestBtn.onclick = () => {
    localStorage.removeItem("speculumUser");
    window.location.href = "trainer.html";
  };
};
