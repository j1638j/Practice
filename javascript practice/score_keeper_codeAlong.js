const p1Btn = document.querySelector('#p1Button');
const p2Btn = document.querySelector('#p2Button');
const resetBtn = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const playTo = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let playToValue = playTo.value;

function addScore(player) {

    if (player === 1) {
        p1Score++;
        p1Display.innerText = p1Score;
    } else if (player === 2) {
        p2Score++;
        p2Display.innerText = p2Score;
    }

    if (p1Score == playToValue || p2Score == playToValue) {
        //make buttons unclickable
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        if (p1Score == playToValue) {
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
        } else {
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
        }
    }

}

p1Btn.addEventListener('click', () => { addScore(1) });
p2Btn.addEventListener('click', () => { addScore(2) });

playTo.addEventListener('change', (event) => {
    playToValue = playTo.value;
})

resetBtn.addEventListener('click', () => {
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    p1Display.style.color = 'black';
    p2Display.style.color = 'black';
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');

    //make buttons clickable again
    p1Btn.disabled = false;
    p2Btn.disabled = false;

})