let homePoints = 0
let visitorPoints = 0

function add0AtFrontHome() {
    if(homePoints <= 9) {
        document.querySelector(".homePoints").innerHTML = "0" + homePoints
    } else {
        document.querySelector(".homePoints").innerHTML = homePoints
    }
}
function add0AtFrontHomeVisitor() {
    if(visitorPoints <= 9) {
        document.querySelector(".visitorPoints").innerHTML = "0" + visitorPoints
    } else {
        document.querySelector(".visitorPoints").innerHTML = visitorPoints
    }
}

function askHome() {
    const homeName = prompt("Home team name: ")
    document.querySelector(".homeTitle").innerHTML = homeName
}
function askGuest() {
    const guestName = prompt("Guest team name: ")
    document.querySelector(".visitorTitle").innerHTML = guestName
}

function add1home() {
    homePoints++
    add0AtFrontHome()
}
function add2home() {
    homePoints+=2
    document.querySelector(".homePoints").innerHTML = homePoints
    add0AtFrontHome()
}
function add3home() {
    homePoints+=3
    document.querySelector(".homePoints").innerHTML = homePoints
    add0AtFrontHome()
}
function minus1home() {
    if(homePoints < 1) {
        homePoints = 0
        document.querySelector(".homePoints").innerHTML = homePoints
        add0AtFrontHome()
    } else {
        homePoints--
        document.querySelector(".homePoints").innerHTML = homePoints
        add0AtFrontHome()
    }
}
function minus2home() {
    if(homePoints < 2) {
        homePoints = 0
        document.querySelector(".homePoints").innerHTML = homePoints
        add0AtFrontHome()
    } else {
        homePoints-=2
        document.querySelector(".homePoints").innerHTML = homePoints
        add0AtFrontHome()
    }
}
function minus3home() {
    if(homePoints < 3) {
        homePoints = 0
        document.querySelector(".homePoints").innerHTML = homePoints
        add0AtFrontHome()
    } else {
        homePoints-=3
        document.querySelector(".homePoints").innerHTML = homePoints
        add0AtFrontHome()
    }
}
function add1visitor() {
    visitorPoints++
    document.querySelector(".visitorPoints").innerHTML = visitorPoints
    add0AtFrontHomeVisitor()
}
function add2visitor() {
    visitorPoints+=2
    document.querySelector(".visitorPoints").innerHTML = visitorPoints
    add0AtFrontHomeVisitor()
}
function add3visitor() {
    visitorPoints+=3
    document.querySelector(".visitorPoints").innerHTML = visitorPoints
    add0AtFrontHomeVisitor()
}
function minus1visitor() {
    if(visitorPoints < 1) {
        visitorPoints = 0
        document.querySelector(".visitorPoints").innerHTML = visitorPoints
        add0AtFrontHomeVisitor()
    } else {
        visitorPoints--
        document.querySelector(".visitorPoints").innerHTML = visitorPoints
        add0AtFrontHomeVisitor()
    }
    
}
function minus2visitor() {
    if(visitorPoints < 2) {
        visitorPoints = 0
        document.querySelector(".visitorPoints").innerHTML = visitorPoints
        add0AtFrontHomeVisitor()
    } else {
        visitorPoints-=2
        document.querySelector(".visitorPoints").innerHTML = visitorPoints
        add0AtFrontHomeVisitor()
    }
    
}
function minus3visitor() {
    if(visitorPoints < 3) {
        visitorPoints = 0
        document.querySelector(".visitorPoints").innerHTML = visitorPoints
        add0AtFrontHomeVisitor()
    } else {
        visitorPoints-=3
        document.querySelector(".visitorPoints").innerHTML = visitorPoints
        add0AtFrontHomeVisitor()
    }
}

let secLeft = 24
let secLeftInterval
let isShotclockOn = false

function countDownButton() {
    if(isShotclockOn === false) {
        secLeftInterval = setInterval(countDownShoot, 1000)
    }
    isShotclockOn = true
}
function stopCountDown() {
    if(isShotclockOn === true) {
        clearInterval(secLeftInterval)
    }
    isShotclockOn = false
}
function resetCountDown() {
    secLeft = 24
    document.querySelector(".clock").innerHTML = secLeft
}
function countDownShoot() {
    secLeft--
    if(secLeft == 0) {
        secLeft = 24
    }
    document.querySelector(".clock").innerHTML = secLeft
}

let periodNum = 0

function periodAdd() {
    periodNum++
    document.querySelector(".periodNum").innerHTML = periodNum
}
function periodMinus() {
    if(periodNum >= 1){
        periodNum--
    }
    document.querySelector(".periodNum").innerHTML = periodNum
}
function periodReset() {
    periodNum = 0
    document.querySelector(".periodNum").innerHTML = periodNum
}

let quarterSecLeft = 60
let quarterMinLeft = 11
let clockTimeLeftInterval
let isTimerRunning = false

function startTimer() {
    if(isTimerRunning === false) {
        clockTimeLeftInterval = setInterval(startTimerFunction, 1000)
    }
    isTimerRunning = true
}
function startTimerFunction() {
    quarterSecLeft--
    if(quarterMinLeft < 0) {
        quarterMinLeft = 12
        clearInterval(clockTimeLeftInterval)
    }
    if(quarterMinLeft === 0) {
        quarterMinLeft = "0" + quarterMinLeft
    }
    if(quarterSecLeft < 10) {
        quarterSecLeft = "0" + quarterSecLeft
    }
    if(quarterSecLeft == 0) {
        quarterMinLeft--
        quarterSecLeft = 60
        document.querySelector(".seconds").innerHTML = "00"
    }
    document.querySelector(".minutes").innerHTML = quarterMinLeft
    document.querySelector(".seconds").innerHTML = quarterSecLeft
}
function stopTimer() {
    if(isTimerRunning === true) {
        clearInterval(clockTimeLeftInterval)
    }
    isTimerRunning = false
}
function resetTimer() {
    quarterMinLeft = 12
    quarterSecLeft = 60
    clearInterval(clockTimeLeftInterval)
    isTimerRunning = false
    document.querySelector(".minutes").innerHTML = quarterMinLeft
    document.querySelector(".seconds").innerHTML = "00"
}