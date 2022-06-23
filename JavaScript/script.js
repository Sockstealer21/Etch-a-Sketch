
for (let x = 0; x<256;x++){
    const drawingDivs = document.createElement('div')
    drawingDivs.setAttribute('class', 'drawingSpace');
    container.appendChild(drawingDivs)
}

const contChildren = container.childNodes

drawing()

function drawing() {
    contChildren.forEach ((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'red';
        });
    })
}

function clearing(){
    contChildren.forEach ((div) => {
        div.style.backgroundColor = 'white';
    })
}

const refreshButton = document.createElement('button')
refreshButton.textContent = 'New page'
const body = document.querySelector('body')
body.insertBefore(refreshButton, container)

refreshButton.addEventListener('click', () => {
    newPad()
});

function childRemover(){
    let e = document.querySelector('div')
    var first = e.firstElementChild;
    while (first) {
        first.remove();
        first = e.firstElementChild;
    }
}

function newPad (){
    let gridNumber = prompt('How many square per side? 100 is the maximum.');
    if (gridNumber > 100) {
        alert('No Number higher than 100 please.')
    } else {
        document.getElementById('container').style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        document.getElementById('container').style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        childRemover()
        for (let x = 0; x < (gridNumber * gridNumber); x++ ){
            const drawingDivs = document.createElement('div')
            drawingDivs.setAttribute('class', 'drawingSpace');
            container.appendChild(drawingDivs)
            
            }
        drawing()
        }
        clearing()
    }
