/* process.stdin.setEncoding("utf8"); */
var readline = require("readline");
var calc = require("./calc");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on("line", function(line) {
    if (line) {
        let out = calc.calculated(line);
        console.log(out);
    }
});
