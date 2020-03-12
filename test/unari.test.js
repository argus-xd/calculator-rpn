const unari = require("../unari");

test("-1+2+-3", () => {
    expect(unari("-1+2+-3").join(" ")).toMatch("-1 + 2 + -3");
});

test("-1+2+-3 ", () => {
    expect(unari("-1+2+(-3+3)").join(" ")).toMatch("-1 + 2 + ( -3 + 3 )");
});

test("-1+2+-3*15-3.14 ", () => {
    expect(unari("-1+2+-3*15-3.14").join(" ")).toMatch(
        "-1 + 2 + -3 * 15 - 3.14"
    );
});

test("-1+2+-3*15-3.14 / 4", () => {
    expect(unari("-1+2+-3*15-3.14 / 4").join(" ")).toMatch(
        "-1 + 2 + -3 * 15 - 3.14 / 4"
    );
});
test("-1+2+(-3+3) ", () => {
    expect(unari("-1+2+(-3+3)").join(" ")).toMatch("-1 + 2 + ( -3 + 3 )");
});
