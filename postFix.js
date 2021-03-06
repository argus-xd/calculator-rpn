const math = require("./math");
const unary = require("./unary");
require("./arrCom");

module.exports = expr => {
    let tokens = unary(expr);

    let S = [],
        O = [],
        tok;

    while ((tok = tokens.shift())) {
        if (math.IsNumber(tok)) {
            O.push(tok);
        } else if (math.IsOperator(tok)) {
            if (S.length === 0) {
                S.push(tok);
            } else {
                while (math.GetPriority(S.peek()) >= math.GetPriority(tok)) {
                    O.push(S.pop());

                    if (S.length === 0) {
                        break;
                    }
                }
                S.push(tok);
            }
        } else if (tok === "(" || tok === ")") {
            if (tok === "(") {
                S.push("(");
            } else {
                while (S.peek() != "(") {
                    O.push(S.pop());
                }
                S.pop();
            }
        }
    }

    if (S.length !== 0) {
        while (S.length !== 0) {
            O.push(S.pop());
        }
    }

    return O.join(" ");
};
