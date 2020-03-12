let math = require("./math");
Array.prototype.peek = function() {
    return this[this.length - 1];
};
module.exports = expr => {
    if (typeof expr !== "string") {
        if (expr instanceof String) {
            expr = expr.toString();
        } else {
            return "Invalid expression.";
        }
    }

    let tokens = expr
        .replace(/^-|([\^\(\)+\-*/])\s*-/g, "$1#")
        .match(/([\#?\.\w]+)|[\^()+\-*/]/gi)
        .map(e => e.replace("#", "-"));

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

    console.log(O.join(" "));
    return O.join(" ");
};
