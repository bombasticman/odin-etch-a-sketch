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
            const color = random_color()
            square.style.opacity = 1
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = color
                square.style.opacity = square.style.opacity - 0.1
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

function random_color() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

user_input_button = document.getElementById("user_input")
user_input_button.addEventListener("click", request_user_input)