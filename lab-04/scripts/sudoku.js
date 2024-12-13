var puzzleId = 1

function fetchPuzzle(id) {
    fetch(`https://6550e0cc7d203ab6626e476a.mockapi.io/api/v1/SudokuBoard/${id}`, {
        method: "GET"
    })
    .then(res => res.json())
    .then(puzzle => generateCanvas(puzzle.board))
    .then(_ => $(".controls").show())
}

function fetchAnswer(id) {
    let promise = 
        fetch(`https://6550e0cc7d203ab6626e476a.mockapi.io/api/v1/SudokuSolutions/${id}`, {
            method: "GET"
        })
        .then(res => res.json())

    return promise
}

function generateCanvas(puzzle) {
    return new Promise(resolve => {
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

        resolve()
    })
}

// function prefillCanvas() {
//     const result = 
// }

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

function validateCanvas() {
    $(".sudoku-canvas").children().each((_, cell) => {
        let err = validateCell(cell)
        if (err != null)
            console.log(err)
    })
}

function validateCell(cell) {
    let input = cell.value

    if (input.length === 0 || input == null)
        return "All fields must be filled."

    let number = Number(input)
    if (isNaN(number))
        return "Non numerical input was found."

    if (number < 1 || number > 9)
        return "All numbers should be in range from 1 to 9."

    // if (Number.isInteger(number))
    //     return "All numbers should be integers."

    return null
}

$(document).ready(() => {
    fetchPuzzle(puzzleId)

    $("#reset-canvas-btn").click(_ => {
        resetCanvas()
    })

    $("#submit-answer-btn").click(_ => {
        validateCanvas()
    })
})