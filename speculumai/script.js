const doll = document.getElementById("doll");
const timerDisplay = document.getElementById("timer");
const greeting = document.getElementById("greeting");
let currentMode = "", currentIndex = 0, countdown;

const user = localStorage.getItem("speculumUser");
greeting.textContent = user
  ? `Hey ${user}, welcome back! Ready for your session? 💪`
  : "Welcome to Speculum AI! Let’s get started.";

const speak = (text) => {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-IN";
  utter.rate = 1;
  speechSynthesis.speak(utter);
};

const fitnessMoves = [
  "Do 10 squats.",
  "Stretch your arms upward for 10 seconds.",
  "Do 5 push-ups.",
  "Rotate your neck slowly.",
  "Jump lightly in place for 15 seconds.",
  "Touch your toes and hold for 5 seconds.",
  "Do 15 jumping jacks.",
  "Sit down and take 3 deep breaths.",
  "Do 10 lunges on each leg.",
  "Hold a plank for 20 seconds.",
  "Do 10 sit-ups.",
  "Do 20 arm circles.",
  "Stand on one leg for 10 seconds.",
  "Side stretch to the left and right.",
  "Relax your shoulders and roll them back."
];

const actingPrompts = [
  "Act surprised for 5 seconds!",
  "Show me a confident smile.",
  "Pretend to cry like in a movie scene.",
  "Act like you’re talking to your best friend.",
  "Do a dramatic pose and hold it!",
  "Pretend to be giving a speech to a crowd.",
  "Show your angry face for 5 seconds!",
  "Act sleepy and then suddenly excited!",
  "Do a slow-motion walk like in a film.",
  "Imitate your favorite actor’s expression!",
  "Pretend to answer a phone call dramatically.",
  "Act like you just won an award.",
  "Pretend to be scared of something imaginary.",
  "Do a slow villain laugh.",
  "Pretend you’re hosting a TV show!"
];

function startCountdown(seconds, callback) {
  let remaining = seconds;
  timerDisplay.textContent = `⏳ ${remaining}s`;
  clearInterval(countdown);

  countdown = setInterval(() => {
    remaining--;
    if (remaining <= 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "✅ Done!";
      setTimeout(callback, 1500);
    } else {
      timerDisplay.textContent = `⏳ ${remaining}s`;
    }
  }, 1000);
}

function startRoutine(mode) {
  currentMode = mode;
  currentIndex = 0;
  doll.textContent = `🩵 Starting ${mode} mode...`;
  speak(`Starting ${mode} mode! Get ready.`);
  setTimeout(giveNextInstruction, 3000);
}

function giveNextInstruction() {
  const list = currentMode === "fitness" ? fitnessMoves : actingPrompts;
  if (currentIndex >= list.length) {
    speak("Workout complete! Great job!");
    doll.textContent = "🏁 All done! You did amazing!";
    timerDisplay.textContent = "";
    return;
  }

  const instruction = list[currentIndex];
  doll.textContent = instruction;
  speak(instruction);

  startCountdown(25, () => {
    currentIndex++;
    giveNextInstruction();
  });
}

document.getElementById("fitnessBtn").onclick = () => startRoutine("fitness");
document.getElementById("actingBtn").onclick = () => startRoutine("acting");
