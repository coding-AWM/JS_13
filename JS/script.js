'use strict'
let input = document.querySelectorAll('input');

let buttonCalculate = document.getElementById('start');
let buttonCancel = document.getElementById('cancel');
let addIncomeButton = document.getElementsByTagName('button')[0];
let addExpensesButton = document.getElementsByTagName('button')[1];
let depositCheck = document.querySelector('#deposit-check');
let addIncomeItems = document.querySelectorAll('.additional_income-item');

let budgetMonthValue = document.getElementsByClassName('result-total')[0];
let budgetDayValue = document.getElementsByClassName('result-total')[1];
let expensesMonthValue = document.getElementsByClassName('result-total')[2];
let additionalIncomeValue = document.getElementsByClassName('result-total')[3];
let additionalExpensesValue = document.getElementsByClassName('result-total')[4];
let incomePeriodValue = document.getElementsByClassName('result-total')[5];
let targetMonthValue = document.getElementsByClassName('result-total')[6];
let expensesItems = document.querySelectorAll('.expenses-items');
// let expensesAmount = document.querySelector('.expenses-amount');

let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelectorAll('.income-title');
let incomeAmount = document.querySelectorAll('.income-amount');
let expensesTitle = document.querySelectorAll('.expenses-title');
let expensesAmount = document.querySelectorAll('.expenses-amount');
// let incomeAmount = document.querySelector('.income-amount');

let periodSelect = document.querySelector('.period-select');
let periodAmount = document.querySelector('.period-amount');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.target-amount');
let incomeItems = document.querySelectorAll('.income-items');

let eventFunc = function (event) {
    periodAmount.innerHTML = periodSelect.value;
    incomePeriodValue.value = appData.calcSavedMoney();
}

let isNumber = function (z) {
    return !isNaN(parseFloat(z)) && isFinite(z);
}

// appData.start();
let appData = {
    budget: 0,
    income: {}, //доп доходы
    addIncome: [], //доп оходы текст
    incomeMonth: 0, //
    expenses: {}, // доп расходы
    addExpenses: [], //возм доп расходы 
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    // mission: 2000,   
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    // incomeMonth: 0,
    start: function () {
        if (salaryAmount.value === '') {
            alert('Ошибка! Поле "месячный доход" должнобыть заполнено');
            return;
        }
        appData.budget = +salaryAmount.value;

        appData.getInfoDeposit();
        appData.getExpenses();
        appData.getExpensesMonth();
        // appData.getIncomeMonth();
        appData.getincome();
        appData.getIncomeMonth();
        appData.getAddIncome();
        appData.getAddExpenses();
        appData.getBudget();
        appData.budgetDay = Math.floor(appData.getBudget() / 30);

        appData.showResult();
        appData.blockInput();
        //    appData. blockReset();
    },

    blockInput: function () {

        for (let i = 0; i < input.length; i++) {
            input[i].readOnly = true;
        }

        // for (let i = 1; i < incomeTitle.length; i++) {
        //     incomeTitle[i].disabled = true;
        //     // incomeAmount[i].disabled = true;
        // }
        // for (let i = 1; i < expensesTitle.length; i++) {
        //     expensesTitle[i].disabled = true;
        //     // expensesAmount[i].disabled = true;
        // }

        buttonCalculate.style.display = "none";
        buttonCancel.style.display = "inline-block";
        periodSelect.disabled = true;
        addIncomeButton.disabled = true;
        addExpensesButton.disabled = true;
        depositCheck.disabled = true;

    },
    blockReset: function () {

        for (let i = 0; i < input.length; i++) {
            input[i].readOnly = false;
            input[i].value = "";
        }
        for (let i = 1; i < expensesItems.length; i++) {
            expensesItems[i].remove();
        }
        for (let i = 1; i < incomeItems.length; i++) {
            incomeItems[i].remove();
        }

        buttonCancel.style.display = "none";
        buttonCalculate.style.display = "inline-block";
        periodSelect.disabled = false;
        addIncomeButton.disabled = false;
        addExpensesButton.disabled = false;
        depositCheck.disabled = false;
        addExpensesButton.style.display = 'block';
        addIncomeButton.style.display = 'block';
        periodSelect.value = "1";
        periodAmount.textContent = 1;
    },
    showResult: function () { //                   -----ВЫВОД результатов в вёрстку
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcSavedMoney();

    },

    // getPeriodValue: function () {

    // },

    addExpensesBlock: function () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, addExpensesButton);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            addExpensesButton.style.display = 'none';
        }
    },

    addAmountBlock: function () {
        let clonAmountItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(clonAmountItem, addIncomeButton);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            addIncomeButton.style.display = 'none';
        }
    },

    getExpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = +item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = +cashExpenses;
            }
        })
    },

    getincome: function () {
        incomeItems.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = +item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                appData.addIncome[itemIncome] = +cashIncome;
            }
        })
    },

    getAddExpenses: function () {
        let addExpenses = additionalExpensesItem.value.split(', ');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        })
    },

    getAddIncome: function () {
        addIncomeItems.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
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
        for (let key in this.expenses) {
            let sum0 = +this.expenses[key]
            this.expensesMonth += sum0;
        }
    },

    getIncomeMonth: function () {
        for (let key in this.addIncome) {
            let sum0 = +this.addIncome[key]
            this.incomeMonth += sum0;
        }
    },

    getBudget: function () {
        return this.budgetMonth = +this.budget + +this.incomeMonth - +this.expensesMonth;
    },

    getTargetMonth: function () {
        return Math.ceil(targetAmount.value / this.budgetMonth);
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
        return this.budgetMonth * periodSelect.value;
    }

}
buttonCancel.addEventListener('click', appData.blockReset);
buttonCalculate.addEventListener('click', appData.start);
addExpensesButton.addEventListener('click', appData.addExpensesBlock);
addIncomeButton.addEventListener('click', appData.addAmountBlock);
periodSelect.addEventListener('change', eventFunc);

// appData.getInfoDeposit()
// appData.asking();
// for (let key in appData) {
//     console.log('Моя программа включает в ключ - "' + key + '" И  его значение - "' + appData[key] + '"');
// }