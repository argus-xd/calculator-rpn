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
operationsList["("] = new add(0);
operationsList[")"] = new add(1);
operationsList["+"] = new add(2);
operationsList["-"] = new substract(3);
operationsList["*"] = new multiply(4);
operationsList["/"] = new divide(4);
module.exports = operationsList;
