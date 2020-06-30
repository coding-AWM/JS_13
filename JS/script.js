'use strict'
let input = document.querySelectorAll('input');
const buttonCancel = document.getElementById('cancel');
const buttonCalculate = document.getElementById('start');
const addIncomeButton = document.getElementsByTagName('button')[0];
const addExpensesButton = document.getElementsByTagName('button')[1];
const depositCheck = document.querySelector('#deposit-check');
const addIncomeItems = document.querySelectorAll('.additional_income-item');
const budgetMonthValue = document.getElementsByClassName('result-total')[0];
const budgetDayValue = document.getElementsByClassName('result-total')[1];
const expensesMonthValue = document.getElementsByClassName('result-total')[2];
const additionalIncomeValue = document.getElementsByClassName('result-total')[3];
const additionalExpensesValue = document.getElementsByClassName('result-total')[4];
const incomePeriodValue = document.getElementsByClassName('result-total')[5];
const targetMonthValue = document.getElementsByClassName('result-total')[6];
let expensesItems = document.querySelectorAll('.expenses-items');
const salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelectorAll('.income-title');
let incomeAmount = document.querySelectorAll('.income-amount');
let expensesTitle = document.querySelectorAll('.expenses-title');
let expensesAmount = document.querySelectorAll('.expenses-amount');
const periodSelect = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
let incomeItems = document.querySelectorAll('.income-items');
const depositBank = document.querySelector('.deposit-bank');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');




let isNumber = function (z) {
    return !isNaN(parseFloat(z)) && isFinite(z);
}

class AppData {
    constructor() {
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
    }

    start() {
        this.percentSheck();
        if (salaryAmount.value === '') {
            alert('Ошибка! Поле "месячный доход" должнобыть заполнено');
            return;
        }
        this.budget = +salaryAmount.value;

        this.getInfoDeposit();
        this.getExpenses();
        this.getExpensesMonth();
        this.getincome();
        this.getIncomeMonth();
        this.getAddIncome();
        this.getAddExpenses();
        this.getBudget();
        this.showResult();
        this.blockInput();
    }
    eventFunc(event) {
        periodAmount.innerHTML = periodSelect.value;
        incomePeriodValue.value = this.calcSavedMoney();
    }
    blockInput() {
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

    reset() {
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

        const appDataClean = new AppData();
        const appDataProp = Object.assign({}, appDataClean);

        for (let key in appDataProp) {
            this[key] = appDataProp[key]
        }


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

    showResult() { //                   -----ВЫВОД резульстку
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcSavedMoney();

    };

    addExpensesBlock() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, addExpensesButton);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            addExpensesButton.style.display = 'none';
        }
    };

    addAmountBlock() {
        let clonAmountItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(clonAmountItem, addIncomeButton);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            addIncomeButton.style.display = 'none';
        }
    };

    getExpenses() {
        expensesItems.forEach((item) => {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = +item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                this.expenses[itemExpenses] = +cashExpenses;
            }
        })
    };

    getincome() {
        incomeItems.forEach((item) => {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = +item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                this.income[itemIncome] = +cashIncome;
            }
        })
    };

    getAddExpenses() {
        let addExpenses = additionalExpensesItem.value.split(', ');
        addExpenses.forEach((item) => {
            let itemValue = item.trim();
            if (item !== '') {
                this.addExpenses.push(itemValue);
            }
        })
    };

    getAddIncome() {
        addIncomeItems.forEach((item) => {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            }
        });
    };

    getInfoDeposit() {

        if (this.deposit) {
            // do {
            //     alert( 'введи т 0 до 20');
            //     depositPercent.value = 7;
            // } while (depositPercent.value > 20)
            this.percentDeposit = depositPercent.value;
            console.log('this.percentDeposit: ', this.percentDeposit);
            this.moneyDeposit = depositAmount.value;
        }
    };

    getExpensesMonth() {
        for (let key in this.expenses) {
            let sum0 = +this.expenses[key]
            this.expensesMonth += +sum0;
        }
    };

    getIncomeMonth() {
        for (let key in this.income) {
            let sum0 = +this.income[key]
            this.incomeMonth += +sum0;
        }
    };

    getBudget() {
        const monthDeposit = Math.ceil(this.moneyDeposit * this.percentDeposit);
        this.budgetMonth = +this.budget + +this.incomeMonth - +this.expensesMonth + monthDeposit;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    };

    getTargetMonth() {
        return Math.ceil(targetAmount.value / this.budgetMonth);
    };

    getStatusIncome() {

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

    calcSavedMoney() {
        return this.budgetMonth * periodSelect.value;
    }

    changePercent() {
        const valueSelect = this.value;
        if (valueSelect === 'other') {
            depositPercent.style.display = 'inline-block';
            depositPercent.disabled = false;
            //домашка
        } else {
            // depositPercent.value = valueSelect;
            depositPercent.disabled = true;
            depositPercent.style.display = 'none';
        }

    }

    depositHandler() {
        if (depositCheck.checked) {
            depositBank.style.display = 'inline-block';
            depositAmount.style.display = 'inline-block';
            this.deposit = true;
            depositBank.addEventListener('change', this.changePercent);
        } else {
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositBank.value = '';
            depositAmount.value = '';
            this.deposit = false;
            depositBank.removeEventListener('change', this.changePercent)
        }
    }
    percentSheck() {
        if (+depositPercent.value < 0 || +depositPercent.value > 100) {
            alert('ВВедите проценты от 1 до 100');
            depositPercent.value = '';
            buttonCalculate.disabled = true;
        } else if (!isNumber(depositPercent.value)) {
            alert('ВВедите число');
            depositPercent.value = '';
            buttonCalculate.disabled = true;
        } else {
            buttonCalculate.disabled = false;
        }
    }

    eventsListeners() {
        depositPercent.addEventListener('change', this.percentSheck.bind(this));
        buttonCancel.addEventListener('click', this.reset.bind(this));
        buttonCalculate.addEventListener('click', this.start.bind(this));
        addExpensesButton.addEventListener('click', this.addExpensesBlock.bind(this));
        addIncomeButton.addEventListener('click', this.addAmountBlock.bind(this));
        periodSelect.addEventListener('change', this.eventFunc.bind(this));
        depositCheck.addEventListener('change', this.depositHandler.bind(this));
    }
};

const appData = new AppData();
appData.eventsListeners();