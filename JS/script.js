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



let isNumber = function (z) {
    return !isNaN(parseFloat(z)) && isFinite(z);
}

const AppData = function () {
    this.budget = 0;
    this.income = {};
    this.addIncome = [];
    this.incomeMonth = 0;
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
};

AppData.prototype.start = function () {
    if (salaryAmount.value === '') {
        alert('Ошибка! Поле "месячный доход" должнобыть заполнено');
        return;
    }
    this.budget = +salaryAmount.value;

    // appData.getInfoDeposit();
    this.getExpenses();
    this.getExpensesMonth();
    this.getincome();
    this.getIncomeMonth();
    this.getAddIncome();
    this.getAddExpenses();
    this.getBudget();
    this.budgetDay = Math.floor(this.getBudget() / 30);

    this.showResult();
    this.blockInput();
};

AppData.prototype.eventFunc = function (event) {
    periodAmount.innerHTML = periodSelect.value;
    incomePeriodValue.value = this.calcSavedMoney();
}

AppData.prototype.blockInput = function () {
    input = document.querySelectorAll('input');
    for (let i = 0; i < input.length; i++) {
        input[i].readOnly = true;
    }

    buttonCalculate.style.display = "none";
    buttonCancel.style.display = "inline-block";

    addIncomeButton.disabled = true;
    addExpensesButton.disabled = true;
    depositCheck.disabled = true;

};

AppData.prototype.reset = function () {
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

    appData = Object.assign({}, copy);

    buttonCancel.style.display = "none";
    buttonCalculate.style.display = "inline-block";
    addIncomeButton.disabled = false;
    addExpensesButton.disabled = false;
    depositCheck.disabled = false;
    addExpensesButton.style.display = 'block';
    addIncomeButton.style.display = 'block';
    periodSelect.value = "1";
    periodAmount.textContent = 1;
};

AppData.prototype.showResult = function () { //                   -----ВЫВОД результатов в вёрстку
    const _this = this;
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = this.getTargetMonth();
    incomePeriodValue.value = this.calcSavedMoney();

};

AppData.prototype.addExpensesBlock = function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, addExpensesButton);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
        addExpensesButton.style.display = 'none';
    }
};

AppData.prototype.addAmountBlock = function () {
    let clonAmountItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(clonAmountItem, addIncomeButton);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
        addIncomeButton.style.display = 'none';
    }
};

AppData.prototype.getExpenses = function () {
    const _this = this;
    expensesItems.forEach(function (item) {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = +item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
            _this.expenses[itemExpenses] = +cashExpenses;
        }
    })
};

AppData.prototype.getincome = function () {
    const _this = this;
    incomeItems.forEach(function (item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = +item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
            _this.addIncome[itemIncome] = +cashIncome;
        }
    })
};

AppData.prototype.getAddExpenses = function () {
    const _this = this;
    let addExpenses = additionalExpensesItem.value.split(', ');
    addExpenses.forEach(function (item) {
        let itemValue = item.trim();
        if (item !== '') {
            _this.addExpenses.push(itemValue);
        }
    })
};

AppData.prototype.getAddIncome = function () {
    const _this = this;
    addIncomeItems.forEach(function (item) {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
            _this.addIncome.push(itemValue);
        }
    });
};

AppData.prototype.getInfoDeposit = function () {
    if (this.deposit) {
        let z, x;
        do {
            z = +prompt('Какой годовой процент по депозиту?', 10);
        }
        while (!isNumber(z))
        this.percentDeposit = z;

        do {
            x = +prompt('Какая у вас сумма депозита?', 200);
        }
        while (!isNumber(x))
        this.moneyDeposit = x;
    }
};

AppData.prototype.getExpensesMonth = function () {
    for (let key in this.expenses) {
        let sum0 = +this.expenses[key]
        this.expensesMonth += sum0;
    }
};

AppData.prototype.getIncomeMonth = function () {
    for (let key in this.addIncome) {
        let sum0 = +this.addIncome[key]
        this.incomeMonth += sum0;
    }
};

AppData.prototype.getBudget = function () {
    return this.budgetMonth = +this.budget + +this.incomeMonth - +this.expensesMonth;
};

AppData.prototype.getTargetMonth = function () {
    return Math.ceil(targetAmount.value / this.budgetMonth);
};

AppData.prototype.getStatusIncome = function () {

    if (this.budgetDay >= 30) {
        console.log('У вас высокий уровень дохода');
    } else if (this.budgetDay >= 15 && this.budgetDay < 30) {
        console.log('У вас средний уровень дохода');
    } else if (this.budgetDay > 0 && this.budgetDay < 15) {
        console.log('К сожалению у вас уровень дохода ниже среднего, не выходите без маски и перчаток,' + ' ' +
            'что бы не нарваться на штраф');
    } else if (this.budgetDay <= 0) {
        console.log('вы всё таки вышли без маски, в итоге получили штраф.' + ' ' +
            'Штраф сразу забрали с карты, а так как она пустая и на ней всего 100 рублей,' + ' ' +
            'то ваши карты заблокированы, а к вам уже вламывается росгвардия с автоматами. Аминь. Прискорбно');
    }
};
AppData.prototype.calcSavedMoney = function () {

    return this.budgetMonth * periodSelect.value;
}
AppData.prototype.eventsListeners = function () {
    buttonCancel.addEventListener('click', this.reset.bind(appData));
    buttonCalculate.addEventListener('click', this.start.bind(appData));
    addExpensesButton.addEventListener('click', this.addExpensesBlock.bind(appData));
    addIncomeButton.addEventListener('click', this.addAmountBlock.bind(appData));
    periodSelect.addEventListener('change', this.eventFunc.bind(appData));
}
let appData = new AppData();
let copy = Object.assign({}, new AppData());
appData.eventsListeners();