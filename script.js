function populate_the_screen(size) {
    size = Number(size)
    const board = document.getElementById("container")
    board.replaceChildren()
    board.style.minWidth = size + "px"
    board.style.maxWidth = size + "px"
    for (let column = 0; column < size; column++) {
        for (let row = 0; row < size; row++) {
            const square = document.createElement("div")
            square.classList.add("square")
            board.appendChild(square)
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "red"
            })
        }
    }
}

function request_user_input() {
    while(true) {
        grid_size = Number(prompt("Please set grid size(MAX=1000)"))
        if (grid_size < 1000) {
            populate_the_screen(grid_size)
            return false
        }
        
    }
}

user_input_button = document.getElementById("user_input")
user_input_button.addEventListener("click", request_user_input)