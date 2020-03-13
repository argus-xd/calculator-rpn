const operation = require("./operation");

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
