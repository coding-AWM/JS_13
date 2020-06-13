'use strict'

let isNumber = function (z) {
    return !isNaN(parseFloat(z)) && isFinite(z);
}

let money, income,
    start = function () {
        do {
            money = +prompt('Ваш месячный доход?', 500);
        }
        while (!isNumber(money))

        do {
            income = +prompt('Свободный заработок', 200);
        }
        while (!isNumber(income))
    };
start();
let appData = {
    budget: money,
    income: income, //доп доходы
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
        for (let key in appData.expenses) {
            let sum0 = +appData.expenses[key]
            appData.expensesMonth += sum0;
        }



        // let sum = 0;
        // sum += +amount;        
        // return sum;
    },
    getBudget: function () {
        return appData.budgetMonth = appData.budget + appData.income - appData.expensesMonth;
    },
    getTargetMonth: function () {
        if (Math.ceil(appData.mission / appData.getBudget()) > 0) {
            console.log('Цель будет достигнута за: ');
            return Math.ceil(appData.mission / appData.getBudget());
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
let expensesAmount = appData.getExpensesMonth();
appData.budgetDay = Math.floor(appData.getBudget() / 30);

function showDetailes() {
    console.log('Расходы за месяц составили: ' + appData.expensesMonth + ' $');
    console.log('Бюджет на месяц: ' + appData.getBudget() + ' $');
    console.log('Цель заработать' + ' ' + appData.mission + ' ' + ' $');
    console.log(appData.getTargetMonth() + ' ' + 'месяца');
    console.log('Бюджет на день ' + appData.budgetDay + ' $');
}

showDetailes();
appData.getStatusIncome();
console.log('appData   ',  appData);