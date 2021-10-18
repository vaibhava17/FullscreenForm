const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let random = {}
let clickMe = document.querySelector(".colorbtn")
// let color = document.querySelector(".color")

clickMe.addEventListener("click", function(){
    let hexNumber = "#"
    for(let i=0; i<18; i++){
        for(let j=0;j<6; j++){
            hexNumber += hex[randomColor()]
        }
        console.log(hexNumber)
    }
})

function randomColor(){
    return Math.floor(Math.random()*hex.length)
}