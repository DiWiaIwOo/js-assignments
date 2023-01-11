const characterName1 = prompt("Name one character: ")
const characterName2 = prompt("Name another character: ")
const place = "mountain"
const building = "temple"
const date = prompt("What's today's date?")

document.write(`<p>This is <span class = "red">${date}</span> 717 years ago.. <br><br></p>`)
document.write(`<p>There once was a <span class = "red">${place}</span>, </br></p>`)
document.write(`<p>In the mountain, there was a <span class = "red">${building}</span>, <br></p>`)
document.write(`<p>An old monk, <span class = "red">${characterName1}</span> , and a young monk <span class = "name2">${characterName2}</span> , lived there.<br></p>`)
document.write(`<p>One day, <span class = "red">${characterName2}</span> asked  <span class = "red">${characterName1}</span> to tell a story, <br></p>`)
document.write(`<p><span class = "red">${characterName1}</span> started: "There once was a <span class = "red">${place}</span>..."<br></p>`)
document.write(`<p class = "enter">⏎<br></p>`)



document.addEventListener('click', () => {
    day++
    document.querySelector(".day").innerHTML = day
})