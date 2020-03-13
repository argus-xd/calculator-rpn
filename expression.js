const math = require("./math");
const arrCom = require("./arrCom");
const operation = require("./operation");

module.exports = expr => {
    if (typeof expr !== "string") {
        if (expr instanceof String) {
            expr = expr.toString();
        } else {
            return "Invalid expression.";
        }
    }

    let ClaerExpr = arrCom.ClaerExpr(expr);
    ClaerExpr = arrCom.NumberMerge(ClaerExpr);

    ClaerExpr.forEach(token => {
        if (!operation.hasOwnProperty(token) && !math.IsNumber(token)) {
            throw `Оператор ${token} не определён`;
        }
    });

    return expr;
};
