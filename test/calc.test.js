const calc = require("../calc");
test("add : 2 + 2 = 4", () => {
    expect(calc("2 + 2")).toBe(4);
});
test("substract : 12 - 6 = 6", () => {
    expect(calc("12 - 6")).toBe(6);
});
test("multiply : 2 + 2 * 2 = 6", () => {
    expect(calc("2 + 2 * 2")).toBe(6);
});

test("divide : 100  / 5 = 20", () => {
    expect(calc("100  / 5")).toBe(20);
});

test("Decimal: 29 + 6 * 7  / 39 = 30.076", () => {
    expect(calc("29 + 6 * 7  / 39")).toBeCloseTo(30.076);
});

test("hooks : 21 + (54-32 * 2) + 2 * 2  / 54 = 11", () => {
    expect(calc("21 + (54-32 * 2) + 2 * 2  / 54")).toBeCloseTo(11.07);
});

test("1--2 = 3", () => {
    expect(calc("1--2")).toBeCloseTo(3);
});
test("-2--4 = 2", () => {
    expect(calc("-2--4")).toBeCloseTo(2);
});
test("1(+3) = 4", () => {
    expect(calc("1(+3)")).toBeCloseTo(4);
});
test("1-(-3) = 4", () => {
    expect(calc("1-(-3)")).toBeCloseTo(4);
});
