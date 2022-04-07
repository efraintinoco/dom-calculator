const screen = document.querySelector("#screen")
const buttons = document.querySelectorAll("span")
const clear = document.querySelector("#clear")
const operatorsBtn = document.querySelectorAll(".operator")
const numbersBtn = document.querySelectorAll(".number")


numbersBtn.forEach(number => {
    number.addEventListener("click", (event) => {
        screen.innerText += event.target.innerText

    })
})


operatorsBtn.forEach(operator => {
    operator.addEventListener("click", (event) => {
        screen.textContent += event.target.textContent
    })
})
