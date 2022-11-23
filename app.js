// Global Definitions
const sizeOfGrid = 5;
const container = document.querySelector('.container')
const resetButton = document.querySelector('.reset');

// Creates a Grid

const createGrid = (amtOfGrids) => {
    for (let i = 0; i < amtOfGrids; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')
     
        for (let j = 0; j < amtOfGrids; j++) {
            const widthAndHeight = 960 / sizeOfGrid;
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = widthAndHeight + 'px'
            gridBox.style.height = widthAndHeight + 'px'
            // Adding hover feature
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black';
            })

            row.appendChild(gridBox)
        }

        container.appendChild(row)
    }
}

createGrid(sizeOfGrid)

// Reset Button

resetButton.addEventListener('click', () => {
    let usersNumber = Number(prompt("How many squares do you want to draw with? (Pick a number that's 100 or less)")) 

    while (usersNumber > 100) {
        usersNumber = Number(prompt("How many squares do you want to draw with? (Pick a number that's 100 or less)"))
    }
    createGrid(usersNumber)  
})


/** 
createGrid(sizeOfGrid)


function Grid = () {
    alert
    for (let i = 0; i < 257; i++)
}


// Creates a 16x16 Grid
const Grid(makeGrid) {
    for (let i = 0; i < 257; i++) {
        const cell = document.createElement('cell');
        cellDiv.appendChild(cell);

    }

    if (count === 256) {
        
    }
}
console.log(Grid());

for (let i = 0; i < 256; i++) {
  const cell = document.createElement('div');
  container.appendChild(div);
  cell.addEventListener('mouseenter', () => {
    cell.style.backgroundColor = 'blue';
    })
}

*/