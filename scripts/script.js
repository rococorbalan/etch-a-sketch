const container = document.querySelector("#container");
const input = document.querySelector(".size")
let pixels = container.children
const color = document.querySelector(".color")
const clear = document.querySelector(".clear")
const rainbow = document.querySelector(".rainbow")
const eraser = document.querySelector(".eraser")

document.querySelectorAll('#toggle').forEach(element => {
    element.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

let mouseDown = false;
document.body.onmousedown = () => {
    mouseDown = true;
}
document.body.onmouseup = () => {
    mouseDown = false;
}

let pencilColor = "#000000"

color.addEventListener("input", () =>{
    color.style.backgroundColor = color.value;
    pencilColor = color.value;
    console.log(pencilColor)
    rainbowMode = false;
    activeEraser = false;
})

let rainbowMode = false;

clear.addEventListener("click", clearCanvas)
rainbow.addEventListener("click", () => {
    if (rainbowMode == true) {
        rainbowMode = false;
    }else if (rainbowMode == false) {
        rainbowMode = true;
    }
})

let activeEraser = false;
eraser.addEventListener("click", () => {
    if (activeEraser == true) {
        activeEraser = false;
    }else if (activeEraser == false) {
        activeEraser = true;
    }
})

input.addEventListener("input", () => {
    console.log(input.value)
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild)
    }
    createGrid(input.value, input.value)
})

function createGrid(rows, columns) {
    
    for (let i = 0; i < (rows * columns); i ++){
        let cell = document.createElement("div");
        cell.style.width = `${400/input.value}px`
        cell.style.height = `${400/input.value}px`
        cell.addEventListener("mouseover", () => {
            if (mouseDown) {
                if (rainbowMode){
                    cell.style.backgroundColor = randomHexColorCode();
                }
                if (!rainbowMode && !activeEraser){
                    cell.style.backgroundColor = pencilColor;
                }
                if (activeEraser){
                    cell.style.backgroundColor = "white";
                }
            }
        })
        cell.className = "pixel"
        container.appendChild(cell)
    }
}

createGrid(16, 16)

function clearCanvas() {
    console.log("cleared")
    for (let i = 0; i < pixels.length; i++){
        let pixel = pixels[i]
        pixel.style.backgroundColor = "white"
    }
}

function randomHexColorCode () {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}