function fetchPuzzle(id) {
    let promise = 
        fetch(`https://6550e0cc7d203ab6626e476a.mockapi.io/api/v1/SudokuBoard/${id}`, {
            method: "GET"
        })
        .then(res => res.json())

    return promise
}


function fetchAnswer(id) {
    let promise = 
        fetch(`https://6550e0cc7d203ab6626e476a.mockapi.io/api/v1/SudokuSolutions/${id}`, {
            method: "GET"
        })
        .then(res => res.json())

    return promise
}