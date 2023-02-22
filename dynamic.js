const textArray = ["I'm a Physicist", "I'm a Programmer", "I'm a Data Scientist", "I'm a Data Analyst","I'm a Researcher", "I'm a Technical Writer"];
let textIndex = 0;
let charIndex = 0;
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 3000;
const detel = document.querySelector(".detel");
const textElement = document.querySelector(".detel h2");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function type() {
  if (charIndex < textArray[textIndex].length) {
    textElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textIndex = getRandomInt(textArray.length);
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, newTextDelay + 250);
});
