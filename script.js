let grid_size = prompt("Please enter the the number of squares per side");

if (Number.isFinite(parseInt(grid_size)) && parseInt(grid_size) > 0 && parseInt(grid_size) <= 100) {
  const container = document.querySelector('#container');
  container.style.setProperty('--grid-size', grid_size);

  for (let i = 0; i < parseInt(grid_size); i++) {
    const sec_div = document.createElement('div');
    sec_div.classList.add('secDivs');
    container.appendChild(sec_div);

    for (let j = 0; j < parseInt(grid_size); j++) {
      const tar_div = document.createElement('div');
      tar_div.classList.add('terDivs');
      sec_div.appendChild(tar_div);


      tar_div.addEventListener("mouseenter", hoverRainbow);
    }
  }
} else {
    alert("Please enter an integar greater than 0 and less than 101")
}

function RGBcolor() {
  var R = Math.floor(Math.random() * 256);
  var G = Math.floor(Math.random() * 256);
  var B = Math.floor(Math.random() * 256);
  var randomcolor = "rgb(" + R + "," + G + "," + B + ")";
  return randomcolor;
}

function hoverRainbow() {
  const color = RGBcolor();
  this.style.backgroundColor = color;
}
const clearButton = document.getElementById("clearCanvas");
clearButton.addEventListener("click", clearCanvas);

function clearCanvas() {
  const gridSquares = document.querySelectorAll(".terDivs");
  gridSquares.forEach((square) => {
    square.style.backgroundColor = "lightblue";
  });
}
