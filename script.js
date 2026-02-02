const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const ask = document.getElementById("ask");
const result = document.getElementById("result");

/* Make NO run away */
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 400;
  const y = Math.random() * 160;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* YES opens second page */
yesBtn.addEventListener("click", () => {
  ask.style.display = "none";
  result.style.display = "block";
});