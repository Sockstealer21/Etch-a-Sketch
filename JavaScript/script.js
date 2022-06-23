

for (let x = 0; x<256;x++){
    const drawingDivs = document.createElement('div')
    drawingDivs.setAttribute('class', 'drawingSpace');
    container.appendChild(drawingDivs)
}

const drawing = container.childNodes

drawing.forEach ((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'red';
});
})

/*drawing.forEach ((div) => {
    div.addEventListener('mouseout', () => {
        
        div.style.backgroundColor = 'white';
});
})
*/

function colorChange() {
    
}