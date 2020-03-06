module.exports.numberMerge = arr => {
    let newArr = [];
    arr.forEach(x => {
        if (isNumber(x)) {
            if (newArr.length > 0 && isNumber(newArr[newArr.length - 1]))
                newArr[newArr.length - 1] += x;
            else newArr.push(x);
        } else {
            newArr.push(x);
        }
    });
    return newArr;
};
module.exports.stackInt = arr => {
    let newArr = arr.map(x => {
        if (isNumber(x)) {
            return parseInt(x);
        } else return x;
    });
    return newArr;
};
module.exports.IsDelimeter = get => {
    if (["=", " "].indexOf(get) != -1) return true;
    return false;
};
module.exports.isNumber = get => {
    return !isNaN(get);
};
module.exports.IsOperator = get => {
    let operators = [];
    operators.push("+");
    operators.push("-");
    operators.push("/");
    operators.push("*");
    operators.push("(");
    operators.push(")");
    if (operators.indexOf(get) != -1) return true;
    return false;
};
module.exports.GetPriority = get => {
    switch (get) {
        case "(":
            return 0;
        case ")":
            return 1;
        case "+":
            return 2;
        case "-":
            return 3;
        case "*":
            return 4;
        case "/":
            return 4;
        case "^":
            return 5;
        default:
            return 6;
    }
};
