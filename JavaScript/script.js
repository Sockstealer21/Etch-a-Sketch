for (let x = 0; x<256;x++){
    const drawingDivs = document.createElement('div')
    drawingDivs.setAttribute('class', 'drawingSpace');
    container.appendChild(drawingDivs)
}

const contChildren = container.childNodes

drawing()

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min +1));

const randomrbg = () => {
    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);
    let rgb = `rgb(${r},${g},${b})`;
    return rgb
}


let darken


function blacker(){
    if (darken === undefined){
        darken = 100
    }
    darkenString =  `hsl(0, 0%, ${darken}%)`;
    darken = darken - 10
    return darkenString
}


function drawing() {0
    contChildren.forEach ((div) => {0
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = blacker()
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

