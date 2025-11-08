let user = "";
let currentExercise = "";
let exerciseList = [];
let timer;
let timeLeft = 25; // constant timer

function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");
}

function register() {
  const name = document.getElementById("registerName").value.trim();
  if (name) {
    localStorage.setItem("user", name);
    alert("Registration successful!");
    showPage("login");
  } else {
    alert("Please enter your name!");
  }
}

function login() {
  const name = document.getElementById("loginName").value.trim();
  const storedName = localStorage.getItem("user");

  if (name && name === storedName) {
    user = name;
    document.getElementById("greeting").innerText = `Hey ${user}, welcome back 👋`;
    showPage("dashboard");
  } else {
    alert("User not found! Please register first.");
  }
}

function logout() {
  user = "";
  showPage("home");
}

function startExercise(exercise, count) {
  currentExercise = exercise;
  exerciseList = [
    { name: exercise, count },
    { name: "Push-ups", count: 10 },
    { name: "Jumping Jacks", count: 10 },
    { name: "Lunges", count: 10 },
    { name: "Plank", count: 10 }
  ];
  showExercise(exerciseList[0]);
}

function showExercise(ex) {
  document.getElementById("exerciseName").innerText = ex.name;
  document.getElementById("instruction").innerText = `Do ${ex.count} ${ex.name}!`;
  showPage("exercise");
  startTimer();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 25; // always 25 seconds
  document.getElementById("timer").innerText = `⏱️ ${timeLeft} seconds left`;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `⏱️ ${timeLeft} seconds left`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Time's up! Great job 💪");
    }
  }, 1000);
}

function nextExercise() {
  const nextIndex = exerciseList.findIndex((e) => e.name === currentExercise) + 1;
  if (nextIndex < exerciseList.length) {
    currentExercise = exerciseList[nextIndex].name;
    showExercise(exerciseList[nextIndex]);
  } else {
    alert("Workout complete! 🎉");
    showPage("dashboard");
  }
}
