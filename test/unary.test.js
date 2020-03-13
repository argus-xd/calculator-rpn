const unary = require("../unary");

test("-1+2+-3", () => {
    expect(unary("-1+2+-3").join(" ")).toMatch("-1 + 2 + -3");
});

test("-1+2+-3 ", () => {
    expect(unary("-1+2+(-3+3)").join(" ")).toMatch("-1 + 2 + ( -3 + 3 )");
});

test("-1+2+-3*15-3.14 ", () => {
    expect(unary("-1+2+-3*15-3.14").join(" ")).toMatch(
        "-1 + 2 + -3 * 15 - 3.14"
    );
});

test("-1+2+-3*15-3.14 / 4", () => {
    expect(unary("-1+2+-3*15-3.14 / 4").join(" ")).toMatch(
        "-1 + 2 + -3 * 15 - 3.14 / 4"
    );
});

test("-1+2+(-3+3) + (2*-2)", () => {
    expect(unary("-1+2+(-3+3) + (2*-2)").join(" ")).toMatch(
        "-1 + 2 + ( -3 + 3 ) + ( 2 * -2 )"
    );
});
