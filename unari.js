const math = require("./math");

this.isDubling = get => {
    return get.filter((item, pos, arr) => !pos || item !== arr[pos - 1]);
};

module.exports = expr => {
    let saveOp = "";
    let num = false;
    let newToken = [];

    expr = expr.split("").filter(e => e != " ");
    expr = math.NumberMerge(expr);

    expr.forEach((x, i) => {
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
                newToken.push(saveOp + x);
            }
            num = false;
        } else if (!math.IsOperator(saveOp) && !math.IsNumber(saveOp)) {
            if (!math.IsOperator(expr[i + 1]) && !math.IsNumber(expr[i + 1])) {
                newToken.push(x);
            }
        } else if (math.IsOperator(saveOp) && math.IsOperator(x)) {
            newToken.push(saveOp);
            num = true;
        } else {
            newToken.push(x);
        }
        saveOp = x;
    });
    newToken = this.isDubling(newToken);
    return newToken;
};
