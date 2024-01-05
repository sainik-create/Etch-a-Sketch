let grid_size = prompt("Please enter the number of rows");

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
    }
  }
} else {
    alert("Please enter a positive integar less than or equal to 100");
}
