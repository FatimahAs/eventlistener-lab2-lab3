let red = document.getElementById("stopButton")
let yellow = document.getElementById("slowButton")
let green = document.getElementById("goButton")

let div1 = document.getElementById("stopLight")
let div2 = document.getElementById("slowLight")
let div3 = document.getElementById("goLight")
red.addEventListener("click", () => {
    div1.style.backgroundColor = "red"
    div2.style.backgroundColor = ""
    div3.style.backgroundColor = ""

})

yellow.addEventListener("click", () => {
    div2.style.backgroundColor = "yellow"
    div1.style.backgroundColor = ""
    div3.style.backgroundColor = ""

})

green.addEventListener("click", () => {
    div3.style.backgroundColor = "green"
    div1.style.backgroundColor = ""
    div2.style.backgroundColor = ""

})