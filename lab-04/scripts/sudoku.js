function generate_canvas() {
    let canvas = $(".sudoku-canvas")

    for(let i = 1; i < 82; ++i) {
        let cell = document.createElement("input")
        cell.id = `sudoku-cell-${i}`
        cell.className = "sudoku-cell"
        
        if (i % 3 == 0 && i % 9 != 0)
            cell.className += " right-column"
        
        console.log((i - 1) / 9)

        if ((Math.floor((i - 1) / 9) + 1) % 3 == 0 && (Math.floor((i - 1) / 9) + 1) % 9 != 0)
            cell.className += " bottom-row"

        canvas.append(cell)
    }
}


$(document).ready(() => {
    generate_canvas()
})