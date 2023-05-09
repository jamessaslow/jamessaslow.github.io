// const textArray = [
//   "I'm a Physicist ",
//   "I'm a Programmer ",
//   "I'm a Data Scientist ",
//   "I'm a Data Analyst ",
//   "I'm a Researcher ",
//   "I'm a Technical Writer ",
//   "I'm a Tutor "
// ];
// let textIndex = 0;
// let charIndex = 0;
// const typingDelay = 100;
// const erasingDelay = 50;
// const newTextDelay = 3000;
// const textElement = document.querySelector(".typing-text h2");

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// function type() {
//   const intervalId = setInterval(() => {
//     if (charIndex < textArray[textIndex].length) {
//       textElement.textContent += textArray[textIndex].charAt(charIndex);
//       charIndex++;
//     } else {
//       clearInterval(intervalId);
//       textElement.textContent += document.getElementById("invisible-char").textContent; // add invisible character
//       setTimeout(erase, newTextDelay);
//     }
//   }, typingDelay);
// }




// function erase() {
//   const intervalId = setInterval(() => {
//     if (charIndex > 0) {
//       textElement.textContent = textArray[textIndex].substring(0, charIndex - 1)+ " ";
//       charIndex--;
//     } else {
//       clearInterval(intervalId);
//       textIndex = getRandomInt(textArray.length);
//       setTimeout(type, typingDelay + 1100);
//     }
//   }, erasingDelay);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(type, newTextDelay + 250);
// });




// const words = [
//   'web development',
//   'data science',
//   'machine learning',
//   'artificial intelligence'
// ];

// const hello = document.createElement('h3');
// hello.innerText = 'Hello!';

// const typingText = document.querySelector('.typing-text');
// typingText.prepend(hello);

// let currentWord = 0;
// let letterIndex = 0;
// let direction = 1;

// setInterval(() => {
//   const currentWordLength = words[currentWord].length;
//   const currentText = typingText.innerText;
  
//   if (letterIndex === currentWordLength) {
//     direction = -1;
//   } else if (letterIndex === 0) {
//     direction = 1;
//     currentWord = (currentWord + 1) % words.length;
//   }
  
//   if (direction === 1) {
//     letterIndex += 1;
//     typingText.innerText = `${hello.innerText} ${words[currentWord].substring(0, letterIndex)}`;
//   } else {
//     letterIndex -= 1;
//     typingText.innerText = `${hello.innerText} ${words[currentWord].substring(0, letterIndex)}`;
//   }
  
//   if (letterIndex === 0 && direction === -1) {
//     typingText.innerText = `${hello.innerText} `;
//   }
// }, 100);



const words = [
  "web development",
  "machine learning",
  "data science",
  "artificial intelligence",
  "computer vision",
  "natural language processing",
];

const hello = "hello! ";

let currentWordIndex = 0;
let currentLetterIndex = 0;

function type() {
  if (currentLetterIndex === 0) {
    document.getElementById("typing").textContent = hello;
  }

  const currentWord = words[currentWordIndex];

  document.getElementById("typing").textContent =
    hello + currentWord.substring(0, currentLetterIndex);

  currentLetterIndex++;

  if (currentLetterIndex > currentWord.length) {
    currentLetterIndex = 0;
    currentWordIndex++;

    if (currentWordIndex >= words.length) {
      currentWordIndex = 0;
    }

    setTimeout(() => {
      deleteWord();
    }, 2000);

    return;
  }

  setTimeout(() => {
    type();
  }, Math.random() * 200);
}

function deleteWord() {
  const currentWord = words[currentWordIndex];

  if (currentLetterIndex >= 0) {
    document.getElementById("typing").textContent =
      hello + currentWord.substring(0, currentLetterIndex);

    currentLetterIndex--;

    setTimeout(() => {
      deleteWord();
    }, 50);
  } else {
    setTimeout(() => {
      selectNextWord();
    }, 1000);
  }
}

function selectNextWord() {
  currentWordIndex++;
  if (currentWordIndex >= words.length) {
    currentWordIndex = 0;
  }

  currentLetterIndex = 0;

  setTimeout(() => {
    type();
  }, 1000);
}

type();
