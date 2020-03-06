const math = require("./math");
const postFix = require("./postFix");
const operation = require("./operation");

module.exports.PostFixCalc = expr => {
    let postfixExpr = postFix(expr);
    let operandStack = [];
    let arrToken = postfixExpr.split(" ");

    arrToken.forEach(token => {
        if (math.IsNumber(token)) {
            operandStack.push(parseFloat(token));
        } else {
            let b = operandStack.pop();
            let a = operandStack.pop();
            let result = "";
            if (math.IsOperator(token)) {
                result = operation[token].calc(a, b);
            } else {
                console.log(`Оператор ${token} не определён`);
                return;
            }
            operandStack.push(result);
        }
    });
    return operandStack.pop();
};

module.exports = get => {
    return this.PostFixCalc(get);
};
