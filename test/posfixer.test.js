const calc = require("../calc");
const postFix = require("../postFix");

test("123 + 123 => 123 123 +", () => {
    expect(postFix("123 + 123")).toMatch(/123 123 +/);
});

test("1 + 2 * 3 => 1 2 3 * +", () => {
    expect(postFix("1 + 2 * 3")).toMatch(/1 2 3 * +/);
});

test("1 + (-2) => 1 -2 +", () => {
    expect(postFix("1 + (-2)")).toMatch(/1 -2 +/);
});

test("-1 + 2 + -3 => -1 2 + -3 +", () => {
    expect(postFix("-1 + 2 + -3")).toMatch("-1 2 + -3 +");
});

test("-1 + - 2 => -1 2 - +", () => {
    expect(postFix("-1 + - 2")).toMatch(/-1 -2 +/);
});

test("-1 - -3 => -1 -3 -", () => {
    expect(postFix("-1 - -3")).toMatch(/-1 -3 -/);
});
