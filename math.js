const operation = require("./operation");
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

module.exports.IsOperator = get => {
    if (operation.hasOwnProperty(get) && operation[get].operator) return true;
    return false;
};
module.exports.GetPriority = get => {
    return operation[get].priority;
};
