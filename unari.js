const math = require("./math");

module.exports = expr => {
    let saveOp = "";
    let num = false;
    let newToken = [];
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
    return newToken;
};
