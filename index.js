let button = document.querySelector("button");
let display = document.querySelector("span");

button.addEventListener("click", nextNum);

let array = [22, 3, 5, 17, 30, 66];
let i = 0;

function nextNum() {
    if (i < array.length) {
        display.textContent = array[i];
        i++;
    } 
}

nextNum();
