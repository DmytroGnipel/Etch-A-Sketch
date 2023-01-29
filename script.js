let body = document.querySelector('body')
let button = document.createElement('button')
button.textContent = 'Number of squares'
button.classList.add = 'button'
body.appendChild(button)
let globalDiv = document.createElement('div')
globalDiv.className = 'global'
body.appendChild(globalDiv)
let parag = document.createElement('p')
button.insertAdjacentElement('afterend', parag)
//get radioButtons
for (let i = 1; i <= 3; i++){
let input = document.createElement('input')
input.type = 'radio'
input.name = 'button'
button.insertAdjacentElement('beforebegin', input)
let para = document.createElement('p')
para.style.display = 'inline'
input.insertAdjacentElement('beforebegin', para)
}
let inputs = document.querySelectorAll('input')
inputs[0].checked = true
let paras = document.querySelectorAll('p')
paras[0].textContent = 'Black brush' 
paras[1].textContent = 'Random color'
paras[2].textContent = 'From black to white brush' 

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

mouseOver()

//getNewGrid
button.addEventListener('click', function func1(){
    let row = document.getElementsByClassName('row')
    let dimension = prompt('set number of squares per side for the new grid')
    if (+dimension - +dimension === 0
         && dimension !== null 
         && dimension !== ''
         && +dimension <= 100){
    for (i = 0; i < row.length; i++)
    row[i].style.display = 'none'
    getGrid(dimension)
    mouseOver()
}
if(dimension === '' || +dimension - +dimension !== 0 || +dimension > 100){
    console.log(dimension)
alert('You need to enter a number less than 101!')
func1()
}
})
//get effect of mouseOver
function mouseOver() {
    let cells = document.getElementsByClassName('cell')
    let r = 255, g = 255, b = 255
    for (let cell of cells) {
        cell.addEventListener('mouseover', function func(){
if  (inputs[0].checked === true) {
    this.style.backgroundColor = 'black'
}
if (inputs[1].checked === true){
    let r = Math.floor(Math.random() * 256),
            g = Math.floor(Math.random() * 256),
            b = Math.floor(Math.random() * 256)
            this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}
if (inputs[2].checked === true) {
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    if (r == 0) r = 255, g = 255, b = 255
    r -= 25.5
    g -= 25.5
    b -= 25.5

}
cell.removeEventListener('mouseover', func)})
}
}
