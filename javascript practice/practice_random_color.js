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

    //change h1 text & color
    h1.innerText = `rgb(${r}, ${g}, ${b})`;
    if (r < 100 && g < 100 && b < 100) {
        h1.style.color = 'white'
    } else {
        h1.style.color = 'black'
    }

}


btn.addEventListener('click', changeColor);
