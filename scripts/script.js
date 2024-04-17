const container = document.querySelector("#container");
let mouseDown = false;
document.body.onmousedown = () => {
    mouseDown = true;
}
document.body.onmouseup = () => {
    mouseDown = false;
}


function createGrid(rows, columns) {
    
    for (let i = 0; i < (rows * columns); i ++){
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", () => {
            if (mouseDown) {
                cell.style.backgroundColor = 'black';
            }
        })
        cell.className = "pixel"
        container.appendChild(cell)
    }
}

createGrid(16, 16)

