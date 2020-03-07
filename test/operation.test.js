const math = require("../math");

test("+", () => {
    expect(math.IsOperator("+")).toBe(true);
});
test("-", () => {
    expect(math.IsOperator("-")).toBe(true);
});
test("*", () => {
    expect(math.IsOperator("*")).toBe(true);
});
test("/", () => {
    expect(math.IsOperator("/")).toBe(true);
});
test("(", () => {
    expect(math.IsOperator("(")).toBe(true);
});
test(")", () => {
    expect(math.IsOperator(")")).toBe(true);
});
