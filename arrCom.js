const math = require("./math");

Array.prototype.peek = function() {
    return this[this.length - 1];
};

module.exports.NumberMerge = arr => {
    let newArr = [];
    arr.forEach(x => {
        if (math.IsNumber(x) || x == ".") {
            if (newArr.length > 0 && math.IsNumber(newArr[newArr.length - 1]))
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
        if (math.IsNumber(x)) {
            return parseInt(x);
        } else return x;
    });
    return newArr;
};
module.exports.IsDelimeter = get => {
    if (["=", " "].indexOf(get) != -1) return true;
    return false;
};

module.exports.IsDubling = get => {
    return get.filter((item, pos, arr) => !pos || item !== arr[pos - 1]);
};

module.exports.ClaerExpr = get => {
    return get.split("").filter(e => e != " ");
};
