function fillInAnswer() {
    fetchAnswer(puzzleId)
    .then(answer => fillInCanvas(answer.solution))
}

function fillInCanvas(answer) {
    let i = 0
    $(".sudoku-canvas").children().each((_, cell) => {
        cell.value = answer[i]
        ++i
    })
}