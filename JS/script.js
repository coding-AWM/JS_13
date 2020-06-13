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
        for (let i = 0; i < 2; i++) {
            let exp, amount,
                foo = prompt('Введите обязательную статью расходов?', 'f-21');

            do {
                exp = prompt('Во сколько это обойдётся?', 21);
            }
            while (!isNumber(exp))
            amount = +exp;
            appData.expenses[foo] = amount;
        }
    },
    
    getExpensesMonth: function () {
        let sum = 0;
        sum += +amount;
        // for (let i = 0; i < 2; i++) {
        //     let exp;
        //     let foo = prompt('Введите обязательную статью расходов?', 'f-21');

        //     do {
        //         exp = prompt('Во сколько это обойдётся?', 21);
        //     }
        //     while (!isNumber(exp))
        //     amount = +exp;
        //     appData.expenses[foo] = amount;
        //     sum += +amount;
        // }
        // console.log('Список ежемесячных трат: ', expenses);
        return sum;
    },
    getAccumulatedMonth: function () {
        return summaryIncome - expensesAmount;
    },
    getTargetMonth: function () {
        if (Math.ceil(appData.mission / appData.getAccumulatedMonth()) > 0) {
            console.log('Цель будет достигнута за: ');
            return Math.ceil(appData.mission / appData.getAccumulatedMonth());
        } else {
            console.log('С отрицательным расходом цель достигнута не будет: ');
            return Math.ceil(appData.mission / appData.getAccumulatedMonth());
        }
    },
    getStatusIncome: function () {
        if (appData.budgetDay >= 30) {
            console.log('У вас высокий уровень дохода');
        } else if (appData.budgetDay >= 15 && appData.budgetDay < 30) {
            console.log('У вас средний уровень дохода');
        } else if (appData.budgetDay > 0 && appData.budgetDay < 15) {
            console.log('К сожалению у вас уровень дохода ниже среднего, не выходите без маски и перчаток,' + ' ' +
                'что бы не нарваться на штраф');
        } else if (appData.budgetDay <= 0) {
            console.log('вы всё таки вышли без маски, в итоге получили штраф.' + ' ' +
                'Штраф сразу забрали с карты, а так как она пустая и на ней всего 100 рублей,' + ' ' +
                'то ваши карты заблокированы, а к вам уже вламывается росгвардия с автоматами. Аминь. Прискорбно');
        }
    }
}
appData.asking();

console.log('appData.expenses: ', appData.expenses);



let summaryIncome = summ(+appData.budget, +income);
let expenses = [];
let amount = 0;

function summ(a, b) {
    return a + b;
}


let expensesAmount = appData.getExpensesMonth();

appData.budgetDay = Math.floor(appData.getAccumulatedMonth() / 30);

function showDetailes() {
    console.log('Расходы за месяц составили: ' + expensesAmount + ' долларов');
    console.log('Бюджет на месяц: ' + appData.getAccumulatedMonth() + ' долларов!');
    console.log('Цель заработать' + ' ' + appData.mission + ' ' + ' долларов');
    console.log(appData.getTargetMonth() + ' ' + 'месяца');
    console.log('Бюджет на день ' + appData.budgetDay + ' долларов');
    // console.log(arrAddExpenses);
}

showDetailes();
appData.getStatusIncome();
console.log(appData);