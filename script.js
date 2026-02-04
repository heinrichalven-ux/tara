const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const info = document.getElementById("info");
const buttons = document.getElementById("buttons");
const song = document.getElementById("loveSong");

// YES button
yesBtn.addEventListener("click", () => {
  // hide buttons
  buttons.style.display = "none";

  // show info
  info.classList.remove("hidden");

  // play music
  song.play();
});

// NO button escapes
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
