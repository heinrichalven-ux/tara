const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const info = document.getElementById("info");

// YES button
yesBtn.addEventListener("click", () => {
  info.classList.remove("hidden");
});

// NO button escapes
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
