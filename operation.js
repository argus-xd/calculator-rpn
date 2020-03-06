class operations {
    constructor(/* operation, */ priority) {
        /* this.operation = operation; */
        this.priority = priority;
    }
    calc() {}
}

class add extends operations {
    calc(a, b) {
        return a + b;
    }
}
class substract extends operations {
    calc(a, b) {
        return a - b;
    }
}
class multiply extends operations {
    calc(a, b) {
        return a * b;
    }
}
class divide extends operations {
    calc(a, b) {
        return a / b;
    }
}

let operationsList = [];
operationsList["+"] = new add(1);
operationsList["-"] = new substract(1);
operationsList["*"] = new multiply(2);
operationsList["/"] = new divide(2);

module.exports = operationsList;
