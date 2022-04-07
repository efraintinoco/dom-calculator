const screen = document.querySelector("#screen")
const buttons = document.querySelectorAll("span")
const clear = document.querySelector("#clear")
let acceptingInput = true

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent == "÷" && acceptingInput) {
            screen.textContent += "/"
        }
        if (button.textContent == "x" && acceptingInput) {
            screen.textContent += "*"
        }
        if (button.textContent === "C" && acceptingInput) {
            screen.textContent = ""
        }
        if (button.textContent !== "÷" && button.textContent !== "=" && button.textContent !== "x" && button.textContent !== "C" && acceptingInput) {
            screen.textContent += button.textContent
        }
        try {
            if (button.textContent === "=" && acceptingInput) {
                if (screen.textContent.includes("/0")) {
                    screen.textContent = "Error, Resetting"
                }
                screen.textContent = eval(screen.textContent)
            }
        } catch (error) {
            screen.textContent = "Error, Resetting"
            acceptingInput = false
            setTimeout(function() {
                acceptingInput = true
                screen.textContent = ""
            }, 1800)
        }
    })
})