// part 1
console.log("Celsius", "Farenheit");
for (let c = 0; c < 101; c++) {
    let f = (c * (9 / 5) + 32)
    console.log(c, f);

}

// part 2
let userInput = +prompt("Pick a number")
let total = 0;
let n = 0;
do {
    total += n;
    n++;
}
while (n < userInput + 1)
console.log(total)

// part 3
const numbers = [1, 2, 3, 4, 5, 6];
for (let i = 1; i < 7; i++) {
    console.log(i + );
}

for (let i = 1; i < 7; i++) {
    let output = "";
    for (let j = 1; j <= i; j++) {
        output += j + " "
    }
    console.log(output);
}