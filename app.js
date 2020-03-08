const readline = require("readline");
const calc = require("./calc");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on("line", function(line) {
    if (line) {
        let out = calc(line);
        console.log(out);
    }
});
