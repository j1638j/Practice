const btn = document.querySelector('#button');
const bg = document.body;
const h1 = document.querySelector('h1');

function randomNumber() {
    return Math.floor(Math.random() * 255);
}

function changeColor() {

    //generate random numbers
    let r = randomNumber();
    let g = randomNumber();
    let b = randomNumber();

    //change background color
    bg.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    //change h1 text
    h1.innerText = `rgb(${r}, ${g}, ${b})`;

}


btn.addEventListener('click', changeColor);
