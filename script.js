let body = document.querySelector('body')
let button = document.createElement('button')
button.textContent = 'LAUNCH'
button.classList.add = 'button'
body.appendChild(button)
let globalDiv = document.createElement('div')
globalDiv.className = 'global'
body.appendChild(globalDiv)
//get radioButton
let input1 = document.createElement('input')
let input2 = document.createElement('input')
let input3 = document.createElement('input')
input1.type = 'radio'
input2.type = 'radio'
input3.type = 'radio'
input1.name = 'button'
input2.name = 'button'
input3.name = 'button'
input1.checked = true
input1.textContent = 'sfjdksdljfk'
button.insertAdjacentElement('beforebegin', input1)
button.insertAdjacentElement('beforebegin', input2)
button.insertAdjacentElement('beforebegin', input3)
let para1 = document.createElement('p')
let para2 = document.createElement('p')
let para3 = document.createElement('p')
para1.style.display = 'inline'
para2.style.display = 'inline'
para3.style.display = 'inline'
para1.textContent = 'Black'
para2.textContent = 'Random color'
para3.textContent = 'From black to white'
input1.insertAdjacentElement('afterend', para1)
input2.insertAdjacentElement('afterend', para2)
input3.insertAdjacentElement('afterend', para3)
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

mouseOverRandomColor()

//getNewGrid
button.addEventListener('click', function func1(){
    let row = document.getElementsByClassName('row')
    let dimension = prompt('enter dimension of the grid')
    if (+dimension - +dimension === 0 && dimension !== null && dimension !== ''){
    for (i = 0; i < row.length; i++)
    row[i].style.display = 'none'
    getGrid(dimension)
    if (input1.checked === true) mouseOver()
    else if (input2.checked === true) mouseOverRandomColor()
    else if (input3.checked === true) mouseOverWhiteToBlack()
}
if(dimension === '' || +dimension - +dimension !== 0){
    console.log(dimension)
alert('You need to enter a number!')
func1()
}
})
//get effect of mouseOver
function mouseOver() {
    let cells = document.getElementsByClassName('cell')
    for (let cell of cells) {
        cell.addEventListener('mouseover', function(){
            this.classList.add('mouseover')
        })
    }
    }
function mouseOverRandomColor() {
    let cells = document.getElementsByClassName('cell')
    for (let cell of cells) {
        cell.addEventListener('mouseover', function func(){
            let r = Math.floor(Math.random() * 256),
            g = Math.floor(Math.random() * 256),
            b = Math.floor(Math.random() * 256)
            this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            cell.removeEventListener('mouseover', func)
        })
    }
    }
function mouseOverWhiteToBlack() {
    let cells = document.getElementsByClassName('cell')
    let r = 255, g = 255, b = 255
    for (let cell of cells) {
    cell.addEventListener('mouseover', function func(){
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    if (r == 0) r = 255, g = 255, b = 255
    r -= 25.5
    g -= 25.5
    b -= 25.5
    cell.removeEventListener('mouseover', func)
        })
    }
    }
//end effect of mouseOver
    

