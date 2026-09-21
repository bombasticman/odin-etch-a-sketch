function populate_the_screen() {
    for (let column = 0; column < 16; column++) {
        for (let row = 0; row < 16; row++) {
            const square = document.createElement("div")
            square.classList.add("square")
            document.getElementById("container").appendChild(square)
            square.addEventListener("mouseover", () => {
                console.log("test")
                square.style.backgroundColor = "red"
            })
        }
    }
}


populate_the_screen()