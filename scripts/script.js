const container = document.querySelector("#container");
const input = document.querySelector(".size")
let pixels = container.children
const color = document.querySelector(".color")
const clear = document.querySelector(".clear")
const rainbow = document.querySelector(".rainbow")

let mouseDown = false;
document.body.onmousedown = () => {
    mouseDown = true;
}
document.body.onmouseup = () => {
    mouseDown = false;
}

let pencilColor = "#000000"

color.addEventListener("input", () =>{
    pencilColor = color.value;
    console.log(pencilColor)
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

function createGrid(rows, columns) {
    
    for (let i = 0; i < (rows * columns); i ++){
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", () => {
            if (mouseDown) {
                if (rainbowMode){
                    cell.style.backgroundColor = randomHexColorCode();
                }
                if (!rainbowMode){
                    cell.style.backgroundColor = pencilColor;
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
