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

mouseOverWhiteToBlack()

//getNewGrid
button.addEventListener('click', function (){
    let row = document.getElementsByClassName('row')
    for (i = 0; i < row.length; i++)
    row[i].style.display = 'none'
    let dimension = prompt('enter dimension of the grid')
    getGrid(dimension)
    mouseOver()
})
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
function mouseOverRandomColor() {
    let cells = document.getElementsByClassName('cell')
    for (let cell of cells) {
        cell.addEventListener('mouseover', function(){
            let r = Math.floor(Math.random() * 256),
            g = Math.floor(Math.random() * 256),
            b = Math.floor(Math.random() * 256)
            this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        })
    }
    }
function mouseOverWhiteToBlack() {
    let cells = document.getElementsByClassName('cell')
    let r = 255, g = 255, b = 255
    for (let cell of cells) {
    cell.addEventListener('mouseover', function(){
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    if (r == 0) r = 255, g = 255, b = 255
    r -= 25.5
    g -= 25.5
    b -= 25.5
        })
    }
    }
//end effect of mouseOver
    

