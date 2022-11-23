// Global Definitions
const cellDiv = document.querySelector('.container');

// Creates a 16x16 Grid
for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  cellDiv.appendChild(div);
}

document.getElementById('div').addEventListener('mouseover', mouseOver);

function mouseOver() {
    document.getElementById('div').style.color = "blue";
}

/** 
function Grid = () {
    alert
    for (let i = 0; i < 257; i++)
}

let count = 0;

// Creates a 16x16 Grid
function Grid(makeGrid) {
    for (let i = 0; i < 257; i++) {
        const cell = document.createElement('cell');
        cellDiv.appendChild(cell);
        count++;
    }

    if (count === 256) {
        
    }
}
console.log(Grid());

*/