var math = require("./math");

module.exports = expr => {
    var i = 0;
    if (typeof expr !== "string") {
        if (expr instanceof String) {
            expr = expr.toString();
        } else {
            return "Invalid expression.";
        }
    }

    var tokens = expr
        .replace(/^-|([\^\(\)+\-*/])\s*-/g, "$1#")
        .match(/([\#?\.\w]+)|[\^()+\-*/]/gi)
        .map(e => e.replace("#", "-"));

    var S = [],
        O = [],
        tok;

    while ((tok = tokens.shift())) {
        if (tok == "(") S.push(tok);
        else if (tok == ")") {
            while (S.length > 0 && S[S.length - 1] != "(") O.push(S.pop());
            if (S.length == 0) return "Mismatched parenthesis.";
            S.pop();
        } else if (math.IsOperator(tok)) {
            while (
                S.length > 0 &&
                math.IsOperator(S[S.length - 1]) &&
                ((math.LeftAssoc(tok) &&
                    math.GetPriority(tok) <=
                        math.GetPriority(S[S.length - 1])) ||
                    (!math.LeftAssoc(tok) &&
                        math.GetPriority(tok) <
                            math.GetPriority(S[S.length - 1])))
            )
                O.push(S.pop());
            S.push(tok);
        } else {
            O.push(tok);
        }
    }

    while (S.length > 0) {
        if (!math.IsOperator(S[S.length - 1])) return "Mismatched parenthesis.";
        O.push(S.pop());
    }

    if (O.length == 0) return "Invalid expression.";

    var s = "";
    for (var i = 0; i < O.length; i++) {
        if (i != 0) s += " ";
        s += O[i];
    }

    return s;
};
