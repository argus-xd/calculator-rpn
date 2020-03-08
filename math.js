module.exports.NumberMerge = arr => {
    let newArr = [];
    arr.forEach(x => {
        if (this.IsNumber(x)) {
            if (newArr.length > 0 && this.IsNumber(newArr[newArr.length - 1]))
                newArr[newArr.length - 1] += x;
            else newArr.push(x);
        } else {
            newArr.push(x);
        }
    });
    return newArr;
};
module.exports.StackInt = arr => {
    let newArr = arr.map(x => {
        if (this.IsNumber(x)) {
            return parseInt(x);
        } else return x;
    });
    return newArr;
};
module.exports.IsDelimeter = get => {
    if (["=", " "].indexOf(get) != -1) return true;
    return false;
};
module.exports.IsNumber = get => {
    return !isNaN(get);
};
let operators = [];
operators.push("+");
operators.push("-");
operators.push("/");
operators.push("*");
operators.push("(");
operators.push(")");
module.exports.IsOperator = get => {
    if (operators.indexOf(get) != -1) return true;
    return false;
};
module.exports.LeftAssoc = get => {
    return get != "^";
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
