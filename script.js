let body = document.querySelector('body')
let button = document.createElement('button')
button.textContent = 'click me'
button.classList.add = 'button'
body.appendChild(button)
let globalDiv = document.createElement('div')
globalDiv.className = 'global'
body.appendChild(globalDiv)
//get initiallyGrid
function getGrid (x) {
    for (i = 1; i <= x; i++){
        let row = document.createElement('div')
        row.classList.add('row')
        let dimensionsOfrow = 960 / +x
        row.style.height = `${dimensionsOfrow}px`
        globalDiv.appendChild(row)
for (k = 1; k <= x; k++){
    let cell = document.createElement('div')
    let dimensionsOfcell = 960 / +x
    cell.style.width = `${dimensionsOfcell}px`
    cell.style.height = `${dimensionsOfcell}px`
    cell.classList.add('cell')
row.appendChild(cell)
}
    }
}
getGrid(16)
//end of getting grid
//get effect of mouseOver
function mouseOver() {
    let cells = document.getElementsByClassName('cell')
    for (let cell of cells) {
        console.log(cells)
        cell.addEventListener('mouseover', function(){
            this.classList.add('mouseover')
        })
    }
    }
mouseOver()
//end effect of mouseOver
//getNewGrid
button.addEventListener('click', function (){
    let row = document.getElementsByClassName('row')
    for (i = 0; i < row.length; i++)
    row[i].style.display = 'none'
    let dimension = prompt('enter dimension of the grid')
    getGrid(dimension)
    mouseOver()
})
