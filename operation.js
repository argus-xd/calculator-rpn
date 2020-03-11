class operations {
    constructor(priority) {
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
class bracket extends operations {}

let operationsList = [];
operationsList["("] = new bracket(0);
operationsList[")"] = new bracket(1);
operationsList["+"] = new add(2);
operationsList["-"] = new substract(3);
operationsList["*"] = new multiply(4);
operationsList["/"] = new divide(4);
module.exports = operationsList;
