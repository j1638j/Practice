let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    let maximum = parseInt(prompt("The number is invalid. Enter the maximum number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log('Your maximum number is: ' + targetNum);

let guess = prompt("Enter your guess.");
let attempts = 1;

if (!parseInt(guess)) {
    guess = prompt("The number is invalid. Enter your guess again.");
} else {
    while (parseInt(guess) !== targetNum) {
        attempts++;
        if (parseInt(guess) < targetNum) {
            guess = prompt("The number is too small. Enter your guess again.");
        } else {
            guess = prompt("The number is too big. Enter your guess again.");
        }
    }

    alert(`Congrats! It took ${attempts} times.`);
}
