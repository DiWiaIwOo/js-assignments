const data = [
    ["Feb 9", "Feb 13", "Feb 15", "Feb 16", "Feb 20", "Feb 22", "Feb 23", "Feb 27", "Mar 1", "Mar 2"],
    [33, 32, 32, 34, 33, 34, 37, 37, 43, 40],
    [94, 94, 94, 97, 94, 92, 96, 95, 95, 97]
]

// not displaying Feb27

for(let i = 1; i < data[0].length + 1; i++) {
    document.querySelector(`#d${i}`).innerHTML = data[0][i-1]
}
for(let i = 1; i < data[1].length + 1; i++) {
    document.querySelector(`#w${i}`).innerHTML = data[1][i-1]
}
for(let i = 1; i < data[2].length + 1; i++) {
    document.querySelector(`#a${i}`).innerHTML = data[2][i-1] + "%"
}

let fastestWPM = 0
data[1].forEach(function(element) {
    if(element > fastestWPM) {
        fastestWPM = element
    }
})
document.querySelector(`#fast`).innerHTML = fastestWPM

let mostAcr = 0
data[2].forEach(function(element) {
    if(element > fastestWPM) {
        mostAcr = element
    }
})
document.querySelector(`#mostAcr`).innerHTML = mostAcr + "%"

let sumAcr = 0
data[1].forEach(function(element) {
    sumAcr = sumAcr + element
})
const avrAcr = sumAcr / data[2].length
document.querySelector(`#avrAcu`).innerHTML = avrAcr + "%"

let sumWords = 0
data[1].forEach(function(element) {
    sumWords = sumWords + element
})
const avrWords = sumWords / data[1].length
document.querySelector(`#avrWord`).innerHTML = avrWords

lastWPM = data[1][data[1].length-1]
lastAcu = data[2][data[2].length-1]
document.querySelector(`#latestAcu`).innerHTML = "Latest Accuracy is " + lastAcu + "%. "
document.querySelector(`#latestWpm`).innerHTML = "Latest WPM is " + lastWPM + ". "

//bonus
let largestWpm = data[1][0]
let smallestWpm = data[1][0]
for(let i = 0; i < data[1].length; i++) {
    if(data[1][i] > largestWpm) {
      largestWpm = data[1][i]
    }
    if(data[1][i] < smallestWpm) {
      smallestWpm = data[1][i]
    }
}
const diffWpm = largestWpm - smallestWpm
document.querySelector(`#diffWpm`).innerHTML = "Difference between fastest and slowest WPM is " + diffWpm + ". "

let largestAcc = data[2][0]
let smallestAcc = data[2][0]
for(let i = 0; i < data[2].length; i++) {
    if(data[2][i] > largestAcc) {
        largestAcc = data[2][i]
    }
    if(data[2][i] < smallestAcc) {
        smallestAcc = data[2][i]
    }
}
const diffAcc = largestAcc - smallestAcc
document.querySelector(`#diffAcc`).innerHTML = "Difference between highest and lowest WPM is " + diffAcc + ". "