const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
const body = document.querySelector("body");
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

const no_options = [
  "no",
  "pls",
  "why",
  ":(",
  ':"(',
  "fuck you",
  "sikee",
  "haha",
  "i beg",
];

const yes_options = [
  "click me",
  "im here",
  "i wont let you down",
  "hii im happiness",
  "yes",
  "me pls",
  "mememmemem",
];

yesBtn.addEventListener("click", (e) => {
  alert("yay :D");
});

noBtn.addEventListener("mouseover", (e) => {
  refreshWindowSizes();

  randXPos = Math.random() * (windowWidth - 100);
  randYPos = Math.random() * (windowHeight - 60);

  noBtn.style.position = "absolute";
  noBtn.style.left = randXPos + "px";
  noBtn.style.top = randYPos + "px";
  noBtn.style.backgroundColor = `rgb(${Math.random() * 255},0,0)`;
  noBtn.innerText =
    no_options[parseInt(Math.random() * (no_options.length - 1))].toUpperCase();

  yesBtn.style.backgroundColor = "rgb(0,255,0)";
  yesBtn.innerText =
    yes_options[
      parseInt(Math.random() * (no_options.length - 1))
    ].toUpperCase();

  body.style.backgroundColor = `rgb(${Math.random() * 255},${
    Math.random() * 255
  },${Math.random() * 255})`;
});

noBtn.addEventListener("click", (e) => {
  alert("okay :(");
});

const refreshWindowSizes = () => {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  console.log(windowHeight);
};
