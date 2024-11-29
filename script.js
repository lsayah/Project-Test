// burger menu

const menuToggle = document.getElementById("burgerMenu");
const navbarMenu = document.querySelector(".navBarList");

menuToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// HEADER BANNER TEXT WRITER

const container = document.getElementById("autotext");
const texts = ["Hi,", "I'm Elias", "IT Student", "Financial Specialist"];
let textIndex = 0;
let charIndex = 0;
let currentLine = null;
let isCompleted = false;

const randomSpeed = (min, max) => Math.floor(Math.random() * (max - min) + min);

const play = () => {
  if (!currentLine) {
    currentLine = document.createElement("div");
    currentLine.classList.add("line");
    container.appendChild(currentLine);
  }

  const currentText = texts[textIndex];
  currentLine.innerHTML = currentText.slice(0, charIndex);
  if (currentText === "I'm Elias") {
    currentLine.innerHTML = currentText
      .slice(0, charIndex)
      .replace("Elias", "<strong style='color: #00FFFF;'>Elias</strong>");
  } else {
    currentLine.innerHTML = currentText.slice(0, charIndex);
  }

  charIndex++;
  if (charIndex > currentText.length) {
    charIndex = 0;
    textIndex++;
    currentLine = null;

    if (textIndex >= texts.length) {
      isCompleted = true;
    }
  }

  if (isCompleted) {
    clearInterval(timer);
  } else {
    clearInterval(timer);
    timer = setInterval(play, randomSpeed(50, 300));
  }
};

let timer = setInterval(play, 300);





