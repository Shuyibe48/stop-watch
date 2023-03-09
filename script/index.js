let [hours, minutes, seconds] = [0, 0, 0]
const displayTime = document.getElementById('display-time')
let timer = null

const stopWatch = () => {
    seconds++
    if(seconds === 60){
        seconds = 0
        minutes++
        if(minutes === 60){
            minutes = 0
            hours++
        }
    }

    let h = hours < 10 ? '0' + hours : hours
    let m = minutes < 10 ? '0' + minutes : minutes
    let s = seconds < 10 ? '0' + seconds : seconds

    displayTime.innerText = h + ':' + m + ':' + s
}

const startWatch = () => {
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(stopWatch, 1000)
}

const poseWatch = () => {
    clearInterval(timer)
}

const reSetWatch = () => {
    clearInterval(timer)
    hours = 0
    minutes = 0
    seconds = 0
    displayTime.innerHTML = '00:00:00'
}

document.getElementById('start').addEventListener('click', function(){
    startWatch()
})
document.getElementById('stop').addEventListener('click', function(){
    poseWatch()
})
document.getElementById('reset').addEventListener('click', function(){
    reSetWatch()
})