function fetchPuzzle(id = 1) {
    fetch(`https://6550e0cc7d203ab6626e476a.mockapi.io/api/v1/SudokuBoard/${id}`, {
        method: "GET"
    })
    .then(res => res.json())
    .then(puzzle => generateCanvas(puzzle.board))
}

function generateCanvas(puzzle) {
    let canvas = $(".sudoku-canvas")

    for(let i = 0; i < 81; ++i) {
        let cell = document.createElement("input")
        cell.id = `sudoku-cell-${i}`
        cell.className = "sudoku-cell"
        cell.setAttribute("autocomplete", "off")

        cellCol = i % 9 
        if ((cellCol + 1) % 3 == 0 && cellCol != 8)
            cell.className += " right-column"
        
        cellRow = Math.floor(i / 9)
        if ((cellRow + 1) % 3 == 0 && cellRow != 8)
            cell.className += " bottom-row"

        if (puzzle[i] != "x") {
            cell.value = puzzle[i]
            cell.disabled = true
        }

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
    if (!cell.disabled)
        cell.value = ""
}

$(document).ready(() => {
    fetchPuzzle()

    $("#reset-canvas-btn").click(() => {
        resetCanvas()
    })
})