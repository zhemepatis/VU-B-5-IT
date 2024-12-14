function validateCanvas() {
    let promise = 
        new Promise((resolve, reject) => {
            $(".sudoku-canvas").children().each((_, cell) => {
                let err = validateCell(cell)
                if (err != null) {
                    reject(err)
                    return
                }
            })

            resolve()
        })

    return promise
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

    if (!Number.isInteger(number))
        return "All numbers should be integers."

    return null
}