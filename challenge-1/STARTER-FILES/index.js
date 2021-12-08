const startBtn = document.getElementById("start");
const minuteTimer = document.getElementById("minutes");
const secondsTimer = document.getElementById("seconds");
const ring = document.getElementById("ring");
const settings = document.getElementById("settings");

let clockStatus;

const clock = function() {
    secondVal = parseInt(secondsTimer.value)
    minuteVal = parseInt(minuteTimer.value)

    if (secondVal === 0) {
        if (minuteVal === 0) {
            ring.classList.add("ending")
            clearInterval(clockStatus)
            alert("Time's Up!")
        } else {
            secondVal = 59
            minuteVal -= 1
        }
    } else {
        secondVal -= 1
    }

    secondVal < 10 ? secondVal = "0" + secondVal : secondVal
    minuteVal < 10 ? minuteVal = "0" + minuteVal : minuteVal

    secondsTimer.value = secondVal;
    minuteTimer.value = minuteVal;
}

startBtn.addEventListener("click", () => {
    console.log("Start Button Clicked", startBtn.innerText)
    if (startBtn.innerText === "START") {
        clockStatus = setInterval(clock, 1000)
        startBtn.innerText = "STOP"
    }
    else if (startBtn.innerText === "STOP") {
        clearInterval(clockStatus)
        startBtn.innerText = "START"
    }
})

settings.addEventListener("click", () => {
    secondsTimer.toggleAttribute("disabled")
    minuteTimer.toggleAttribute("disabled")
})