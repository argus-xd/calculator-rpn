const calc = require("../calc");
const postFix = require("../postFix");

console.log(postFix("123+ 123"));

test("в команде нет места Я", () => {
    expect("команда").not.toMatch(/Я/);
});
