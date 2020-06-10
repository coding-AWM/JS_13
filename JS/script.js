'use strict'

let isNumber = function (z) {
    return !isNaN(parseFloat(z)) && isFinite(z);
}

let money,
    income,
    addExpenses,
    deposit,
    mission = 2000,
    period = 6;

let start = function () {
    // while (isNaN(money) || money.trim() === '' || money === null) {
    //     money = prompt('Ваш месячный доход?');
    // }
    //Код выше для проверки на вводимые данные. всё что не число FALSE

    // while (isNaN(parseFloat(money))) {
    //     money = +prompt('Ваш месячный доход?');
    // }
    //код выше проверяет ЭтоЧисло, а перед этим приводит к дробному числу если это число то код продолжается.
    //Если же не число (а всё что не число не получится запарсить в число). то код повторяется

    while (!isNumber(money)) {
        money = prompt('Ваш месячный доход?');
    }

    while (!isNumber(income)) {
        income = prompt('Свободный заработок');
    }
    //два кода выше тоже самое. но создана универсальная функция для проверки на число

    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    deposit = confirm('Есть ли у вас депозит в банке?');
};
start();

let arrAddExpenses = addExpenses.toLowerCase().split(', ');
let summaryIncome = summ(+money, +income);
let expenses = [];

function summ(a, b) {
    return a + b;
}

let getExpensesMonth = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?');
        sum += +prompt('Во сколько это обойдётся?');
    }
    console.log('Список ужемесячных трат: ', expenses);
    return sum;
}

let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: ', expensesAmount);

function getAccumulatedMonth() {
    return summaryIncome - expensesAmount;
}

let accumulatedMonth = getAccumulatedMonth();
console.log('Чистый доход в месяц: ', accumulatedMonth);

function getTargetMonth() {
    if (Math.ceil(mission / accumulatedMonth) > 0) {
        console.log('Цель будет достигнута за: ');
        return Math.ceil(mission / accumulatedMonth);
    } else {
        console.log('С отрицательным расходом цель достигнута не будет: ');
    }
}
let budgetDay = Math.floor(accumulatedMonth / 30);

function showDetailes() {
    console.log('Расходы за месяц составили: ' + expensesAmount + ' долларов');
    console.log('Бюджет на месяц: ' + getAccumulatedMonth() + ' долларов!');
    console.log('Цель заработать' + ' ' + mission + ' ' + ' долларов');
    console.log( getTargetMonth() + ' ' + 'месяца');
    console.log('Бюджет на день ' + budgetDay + ' долларов');
    console.log(arrAddExpenses);
}

function showTypeOf() {
    console.log(typeof money);
    console.log(typeof income);
    console.log(typeof deposit);
}

function getStatusIncome() {
    if (budgetDay >= 30) {
        console.log('У вас высокий уровень дохода');
    } else if (budgetDay >= 15 && budgetDay < 30) {
        console.log('У вас средний уровень дохода');
    } else if (budgetDay > 0 && budgetDay < 15) {
        console.log('К сожалению у вас уровень дохода ниже среднего, не выходите без маски и перчаток,' + ' ' +
            'что бы не нарваться на штраф');
    } else if (budgetDay <= 0) {
        console.log('вы всё таки вышли без маски, в итоге получили штраф.' + ' ' +
            'Штраф сразу забрали с карты, а так как она пустая и на ней всего 100 рублей,' + ' ' +
            'то ваши карты заблокированы, а к вам уже вламывается росгвардия с автоматами. Аминь. Прискорбно');
    }
}

showDetailes();
getStatusIncome();
showTypeOf();