'use strict'

let buttonCalculate = document.getElementById('start');
let addIncomeButton = document.getElementsByTagName('button')[0];
let addExpensesButton = document.getElementsByTagName('button')[1];
let depositCheck = document.querySelector('#deposit-check');
let addIncomeItems = document.querySelectorAll('.additional_income-item');

let budgetMonthValue = document.getElementsByClassName('result-total')[0];
let budgetDayValue = document.getElementsByClassName('result-total')[1];
let expensesMonthValue = document.getElementsByClassName('result-total')[2];
let additionalIncomeValue = document.getElementsByClassName('result-total')[3];
let additionaExpensesValue = document.getElementsByClassName('result-total')[4];
let incomePeriodValue = document.getElementsByClassName('result-total')[5];
let targetMonthValue = document.getElementsByClassName('result-total')[6];
let expensesItems = document.querySelectorAll('.expenses-items');
// let expensesAmount = document.querySelector('.expenses-amount');

let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let periodSelect = document.querySelector('.period-select');


let isNumber = function (z) {
    return !isNaN(parseFloat(z)) && isFinite(z);
}

// appData.start();
let appData = {
    budget: 0,
    income: {}, //доп доходы
    addIncome: [], //доп оходы текст
    expenses: {}, // доп расходы
    addExpenses: [], //возм доп расходы 
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 2000,
    period: 6,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    incomeMonth: 0,
    start: function () {
        if (salaryAmount.value === '') {
            alert('Ошибка! Поле "месячный доход" должнобыть заполнено');
            return;
        }
        appData.budget = +salaryAmount.value;

        appData.getInfoDeposit();        
        appData. getExpenses();
        appData.getExpensesMonth();
        appData.getBudget();
        appData.budgetDay = Math.floor(appData.getBudget() / 30);
        appData.getIncomeMonth();
    },
    addExpensesBlock: function () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, addExpensesButton);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            addExpensesButton.style.display = 'none';
        }
    },
    getExpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = +item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses  !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        })
    },
    asking: function () {

        if (confirm('Если у вас дополнительный доход?')) {
            let itemInc, itemIncome
            do {
                itemInc = prompt('Какой у вас дополнительный доход?', 'Фриланс');
            }
            while (isNumber(itemInc))
            itemIncome = itemInc;

            let cashInc, cashIncome
            do {
                cashInc = prompt('Сколько в месяц приности ваш дополнительный доход?', 200)
            }
            while (!isNumber(cashInc))
            cashIncome = +cashInc;
            appData.income[itemIncome] = cashIncome;
        }

        let addExp, addExpenses

        do {
            addExp = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'one, two, three');
        }
        while (addExp === '' || addExp === ' ' || isNumber(addExp))

        addExp = addExp.charAt(0).toUpperCase() + addExp.substr(1);
        addExpenses = addExp;
        appData.addExpenses = addExpenses.split(', ');

        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        appData.getInfoDeposit()
        // appData.getExpensesMonth();
        // appData.getIncomeMonth();


        // appData.budgetDay = Math.floor(appData.getBudget() / 30);
        showDetailes();
        appData.getStatusIncome();

        function showDetailes() {
            console.log('Расходы за месяц составили: ' + appData.expensesMonth + ' $');
            console.log('Бюджет на месяц: ' + appData.budgetMonth + ' $');
            console.log('Цель заработать' + ' ' + appData.mission + ' ' + ' $');
            appData.getTargetMonth();
            console.log('Бюджет на день: ' + appData.budgetDay + ' $');
        }
        for (let word of appData.addExpenses) {
            word = word.charAt(0).toUpperCase() + word.substring(1);
            console.log(word);

        }
    },

    getInfoDeposit: function () {
        if (appData.deposit) {
            let z, x
            do {
                z = +prompt('Какой годовой процент по депозиту?', 10);
            }
            while (!isNumber(z))
            appData.percentDeposit = z;

            do {
                x = +prompt('Какая у вас сумма депозита?', 200);
            }
            while (!isNumber(x))
            appData.moneyDeposit = x;
        }
    },

    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            let sum0 = +appData.expenses[key]
            appData.expensesMonth += sum0;
        }
    },

    getIncomeMonth: function () {
        for (let key in appData.income) {
            let sum0 = +appData.income[key]
            appData.incomeMonth += sum0;
        }
    },

    getBudget: function () {
        
        return appData.budgetMonth = +appData.budget + +appData.incomeMonth - +appData.expensesMonth;
    },

    getTargetMonth: function () {
        if (Math.ceil(appData.mission / appData.getBudget()) > 0) {
            console.log('Цель будет достигнута за: ' + Math.ceil(appData.mission / appData.getBudget()) + ' ' + 'месяца');
            return Math.ceil(appData.mission / appData.getBudget());
        } else {
            console.log('С отрицательным расходом цель достигнута не будет: ');
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
    },
    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
    }

}

buttonCalculate.addEventListener('click', appData.start);
addExpensesButton.addEventListener('click', appData.addExpensesBlock)

// appData.getInfoDeposit()
// appData.asking();
// for (let key in appData) {
//     console.log('Моя программа включает в ключ - "' + key + '" И  его значение - "' + appData[key] + '"');
// }