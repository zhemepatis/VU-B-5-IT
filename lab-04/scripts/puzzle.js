var puzzleId = 1

$(document).ready(_ => {
    fetchPuzzle(puzzleId)
    .then(puzzle => generateCanvas(puzzle.board))
    .then(_ => $(".controls").show())

    $("#submit-answer-btn").click(_ => {
        validateCanvas()
        .then(_ => fetchAnswer(puzzleId))
        .then(answer => checkAnswer(answer.solution))
        .catch(err => console.log(err))
    })
})

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

function checkAnswer(solution) {
    let promise = 
        new Promise((resolve, reject) => {
            let i = 0
            $(".sudoku-canvas").children().each((_, cell) => {
                if (cell.value !== solution[i]) {
                    reject("Solution is incorrect.")
                    return
                }

                ++i
            })

            resolve()
        })
    
    return promise
}