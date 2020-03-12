const math = require("./math");
require("./peek");

module.exports = expr => {
    if (typeof expr !== "string") {
        if (expr instanceof String) {
            expr = expr.toString();
        } else {
            return "Invalid expression.";
        }
    }

    let tokens = expr.split("");
    tokens = tokens.filter(e => e != " ");
    tokens = math.NumberMerge(tokens);
    let saveOp = "";
    let num = false;
    let newToken = [];
    tokens.forEach((x, i) => {
        if (i == 0 && math.IsOperator(x)) {
            saveOp = x;
            num = true;
        } else if (!math.IsOperator(x) && !math.IsNumber(x)) {
            saveOp = x;
            num = true;
            newToken.push(x);
        } else if (num && math.IsNumber(x)) {
            saveOp = math.IsOperator(saveOp) ? saveOp : "";
            if (saveOp == "+") {
                newToken.push(saveOp);
                newToken.push(x);
            } else {
                newToken.push(saveOp + /* "i" +  */ x);
            }
            num = false;
        } else if (!math.IsOperator(saveOp) && !math.IsNumber(saveOp)) {
            /*   if (x == "+") newToken.push(x); */
            /*  newToken.push(x); */
            /*  console.log(`${i} === ${saveOp} === ${x}`);      */
        } else if (math.IsOperator(saveOp) && math.IsOperator(x)) {
            newToken.push(saveOp);
            num = true;
        } else {
            newToken.push(x);
        }
        saveOp = x;
    });
    newToken = newToken.filter(
        (item, pos, arr) => !pos || item !== arr[pos - 1]
    );

    let S = [],
        O = [],
        tok;

    while ((tok = newToken.shift())) {
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

    /*   console.log(test);  */

    console.log(O.join(" "));
    return O.join(" ");
};
