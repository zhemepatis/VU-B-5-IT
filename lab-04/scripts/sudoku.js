function generateCanvas() {
    let canvas = $(".sudoku-canvas")

    for(let i = 0; i < 81; ++i) {
        let cell = document.createElement("input")
        cell.id = `sudoku-cell-${i}`
        cell.className = "sudoku-cell"

        cellCol = i % 9 
        if ((cellCol + 1) % 3 == 0 && cellCol != 8)
            cell.className += " right-column"
        
        cellRow = Math.floor(i / 9)
        if ((cellRow + 1) % 3 == 0 && cellRow != 8)
            cell.className += " bottom-row"

        canvas.append(cell)
    }
}

function resetCanvas() {
    let canvas = $(".sudoku-canvas")
    canvas.children(".sudoku-cell").each((_, cell) => {
        resetCell(cell)
    })
}

function resetCell(cell) {
    cell.value = ""
}


$(document).ready(() => {
    generateCanvas()

    $("#reset-canvas-btn").click(() => {
        resetCanvas()
    })
})