// Select elements
const button = document.getElementById("changeColorBtn");
const colorValue = document.getElementById("colorValue");

// Generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change background color when button clicked
button.addEventListener("click", () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorValue.textContent = newColor;
});
