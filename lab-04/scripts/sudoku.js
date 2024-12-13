function generate_canvas() {
    let canvas = $(".sudoku-canvas")

    for(let i = 1; i < 82; ++i) {
        let cell = document.createElement("input")
        cell.id = `sudoku-cell-${i}`
        cell.className = "sudoku-cell"
        
        canvas.append(cell)
    }
}


$(document).ready(() => {
    generate_canvas()
})