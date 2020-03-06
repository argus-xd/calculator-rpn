var math = require("./math");
var postFix = require("./postFix.js");
var operation = require("./operation");

module.exports.postFixCalc = postfixExpr => {
    let operandStack = [];
    let arrToken = postfixExpr.split(" ");

    arrToken.forEach(token => {
        if (math.isNumber(token)) {
            operandStack.push(parseFloat(token));
        } else {
            let b = operandStack.pop();
            let a = operandStack.pop();
            let result = operation[token].calc(a, b);
            operandStack.push(result);
        }
    });
    return operandStack.pop();
};

module.exports.calculated = get => {
    let postFix_ = postFix.postFix(get);
    return this.postFixCalc(postFix_);
};
