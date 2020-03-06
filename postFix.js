var math = require("./math");
module.exports.postFix = input => {
    let output = ""; //Строка для хранения выражения
    let operStack = []; //Стек для хранения операторов
    for (let i = 0; i < input.length; i++) {
        if (math.IsDelimeter(input[i])) continue; //Переходим к следующему символу
        if (math.isNumber(input[i])) {
            while (!math.IsDelimeter(input[i]) && !math.IsOperator(input[i])) {
                output += input[i]; //Добавляем каждую цифру числа к нашей строке
                i++; //Переходим к следующему символу
                if (i >= input.length) break;
            }
            output += " ";
            i--; //Возвращаемся на один символ назад, к символу перед разделителем
        }
        if (math.IsOperator(input[i])) {
            if (input[i] == "(") operStack.push(input[i]);
            else if (input[i] == ")") {
                let s = operStack.pop();
                while (s != "(") {
                    output += s + " ";
                    s = operStack.pop();
                }
            } //Если любой другой оператор
            else {
                if (operStack.length > 0)
                    if (
                        math.GetPriority(input[i]) <=
                        math.GetPriority(operStack[operStack.length - 1])
                    )
                        //Если в стеке есть элементы
                        //И если приоритет нашего оператора меньше или равен приоритету оператора на вершине стека
                        output += operStack.pop() + " "; //То добавляем последний оператор из стека в строку с выражением

                operStack.push(input[i]); //Если стек пуст, или же приоритет оператора выше - добавляем операторов на вершину стека
            }
        }
    }
    //Когда прошли по всем символам, выкидываем из стека все оставшиеся там операторы в строку
    while (operStack.length > 0) output += operStack.pop() + " ";
    return output.trim(); //Возвращаем выражение в постфиксной записи
};
