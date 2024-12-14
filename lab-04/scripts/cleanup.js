$(document).ready(() => {
    $("#reset-canvas-btn").click(_ => {
        resetCanvas()
    })
})
 
function resetCanvas() {
    let canvas = $(".sudoku-canvas")
    canvas.children(".sudoku-cell").each((_, cell) => {
        resetCell(cell)
    })
}

function resetCell(cell) {
    if (!cell.disabled)
        cell.value = null
}