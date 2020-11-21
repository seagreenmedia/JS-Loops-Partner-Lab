

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
 while( n < userInput + 1 )
 console.log(total)