let seconds = 00;
let tens = 00;
let appendTens = document.getElementById("tens")
let appendSeconds = document.getElementById("seconds")
let buttonStart = document.getElementById("button-start")
let buttonStop = document.getElementById("button-stop")
let buttonReset = document.getElementById("button-reset")
let Interval

buttonStart.addEventListener("click", ()=> {
    clearInterval(Interval)
    Interval = setInterval(startTimer, 10)
})

buttonStop.addEventListener("click", () => {
    clearInterval(Interval)
})

buttonReset.addEventListener("click", () => {
    clearInterval(Interval)
    appendSeconds.innerHTML = "00"
    appendTens.innerHTML = "00"
    seconds = 00
    tens = 00
})

function startTimer() {
    tens ++
    if(tens <= 9) {
        appendTens.innerHTML = "0" + tens
    }
    if(tens > 9) {
        appendTens.innerHTML = tens
    }
    if(tens > 99) {
        seconds++
        appendSeconds.innerHTML = seconds
        tens = 00
    }
    if(seconds <= 9){
        appendSeconds.innerHTML = "0" + seconds
    }
}