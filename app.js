const screen = document.querySelector("#screen")
const buttons = document.querySelectorAll("span")
const clear = document.querySelector("#clear")
let acceptInput = true

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent == "÷") {
            screen.textContent += "/"
        }
        if (button.textContent == "x" && acceptInput) {
            screen.textContent += "*"
        }
        if (button.textContent === "C" && acceptInput) {
            screen.textContent = ""
        }
        if (button.textContent !== "÷" && button.textContent !== "=" && button.textContent !== "x" && button.textContent !== "C" && acceptInput) {
            screen.textContent += button.textContent
        }
        try {
            if (button.textContent === "=" && acceptInput) {
                if (screen.textContent.includes("/0")) {
                    screen.textContent = "Error, Restart"
                }
                screen.textContent = eval(screen.textContent)
            }
        } catch (error) {
            screen.textContent = "Error, Restart"
            acceptInput = false
            setTimeout(function () {
                acceptInput = true
                screen.textContent = ""
            }, 2500)
        }
    })
})