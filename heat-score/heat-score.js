const boyGrl = prompt("Are you a boy or girl?")
let r1 = 0
let r2 = 0
let r3 = 0

if(boyGrl == `boy`) {
    r1 = prompt("How hairy are you? (?/10)")
    r2 = prompt("How good is your personality? (?/10)")
    r3 = prompt("How rich are you🤑? (?/10)")
} else if(boyGrl == `girl`) {
    r1 = prompt("How hairy(on the head) are you? (?/10)")
    r2 = prompt("How beautiful are you? (?/10)")
    r3 = prompt("How close do you think that you are close to being a sugar mommy🤑? (?/10)")
} else {
    document.write("<h1>non-binary people are the coolest 😎 </h1>")
}

r1 = parseInt(r1)
r2 = parseInt(r2)
r3 = parseInt(r3)

const chance = ((r1 + r2 + r3) / 3)

if(chance >= 7) {
    document.write(`<p>Your score is ${chance}/10.</p><br>`)
    document.write("<p>You are likely to get a mate😏😏.</p>")
    document.write(`<img src="https://media.tenor.com/G9HVBz-OJ-oAAAAC/dancing-peter-parker.gif">`)

} else if(chance >=4) {
    document.write(`<p>Your score is ${chance}/10.</p><br>`)
    document.write("<p>Maybe you could find a opposite gender friend😳?</p>")
    document.write(`<img src="https://i.pinimg.com/originals/82/e3/94/82e394e46b6b0e68cd6b5341d6a3f1df.jpg">`)
} else if(chance <= 4 && chance > 0) {
    document.write(`<p>Your score is ${chance}/10..</p><br>`)
    document.write("<p>I'm sorry to tell you that you weren't born to have a bf/ gf😭😭.</p>")
    document.write(`<img src="https://t4.ftcdn.net/jpg/05/08/38/47/360_F_508384795_AaOb8TQgvq6BqOCbMXtAgEKZJofEXPOn.jpg">`)
}