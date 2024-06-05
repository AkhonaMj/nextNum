let button = document.querySelector("button");
let display = document.querySelector("span");
let input = document.querySelector("input")

button.addEventListener("click", nextNum);

let i = 0;

function nextNum() {
    let array = input.value.split(",").map(Number);
    if (i < array.length) {
        display.textContent = array[i];
        i++;
    } 
}


