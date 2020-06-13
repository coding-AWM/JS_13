'use strict'

let isNumber = function (z) {
    return !isNaN(parseFloat(z)) && isFinite(z);
}

let money, income,
    start = function () {
        do {
            money = prompt('Ваш месячный доход?', 500);            
        }
        while (!isNumber(money))

        do {
            income = prompt('Свободный заработок', 200);
        }
        while (!isNumber(income))
    };
start();
let appData = {
    budget: money,
    income: {}, //доп доходы
    addIncome: [], //доп оходы текст
    expenses: {}, // доп расходы
    addExpenses: [], //возм доп расходы 
    deposit: false,
    mission: 2000,
    period: 6,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'one, two, three');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }
}
appData.asking();



let summaryIncome = summ(+money, +income);
let expenses = [];
let amount = 0;

function summ(a, b) {
    return a + b;
}

let getExpensesMonth = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        let exp;
        expenses[i] = prompt('Введите обязательную статью расходов?', 'f-21');

        do {
            exp = prompt('Во сколько это обойдётся?', 21);
        }
        while (!isNumber(exp))
        amount = exp;
        sum += +amount;
    }
    console.log('Список ежемесячных трат: ', expenses);
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
    if (Math.ceil(appData.mission / accumulatedMonth) > 0) {
        console.log('Цель будет достигнута за: ');
        return Math.ceil(appData.mission / accumulatedMonth);
    } else {
        console.log('С отрицательным расходом цель достигнута не будет: ');
        return Math.ceil(appData.mission / accumulatedMonth);
    }

}
let budgetDay = Math.floor(accumulatedMonth / 30);

function showDetailes() {
    console.log('Расходы за месяц составили: ' + expensesAmount + ' долларов');
    console.log('Бюджет на месяц: ' + getAccumulatedMonth() + ' долларов!');
    console.log('Цель заработать' + ' ' + appData.mission + ' ' + ' долларов');
    console.log(getTargetMonth() + ' ' + 'месяца');
    console.log('Бюджет на день ' + budgetDay + ' долларов');
    // console.log(arrAddExpenses);
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
