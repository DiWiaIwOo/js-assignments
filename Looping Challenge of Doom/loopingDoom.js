let count = 0
let to4 = 1

while(count < 5) {
    document.write(`I love web dev class! <br>`)
    count++
}

document.write(`<br>`)

while(to4 <= 4) {
    document.write(`${to4} <br>`)
    to4++
}

document.write(`<br>`)

for(three = 15; three <= 30; three = three + 3) {
    document.write(`${three} <br>`)
}

document.write(`<br>`)

for(j= 0; j < 4; j++) {
    for(i = 0; i < 4; i++) {
        document.write(`🟦`)
    }
    document.write(`<br>`)
}

document.write(`<br>`)

for(i = 1; i <= 7; i++) {
    for(j = 1; j <= i; j++) {
        document.write(`🦴`)
    }
    document.write(`<br>`)
}

document.write(`<br>`)

for(i = 0; i < 7; i++) {
    for (j = 7; j > i; j--) {
        document.write(`~ `)
    }
    for(k = 0; k <= i; k++) {
        document.write(`🦴`)
    }
    document.write(`<br>`)
}

document.write(`<br>`)

for(i = 1; i <= 5;i++) {
    for(j = 1; j <= i; j++) {
        document.write(`<br>`)
        for(k = 1; k <= j; k++) {
            document.write(`🦴`)
        }
    }
    document.write(`<br>`)
}