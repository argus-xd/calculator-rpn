const readline = require("readline");
const calc = require("./calc");
const postFix = require("./postFix");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
/* 
console.log(calc.postFixCalc("-12 12 +")); */

rl.on("line", function(line) {
    if (line) {
        let out = calc(line);
        console.log(out);
    }
});
