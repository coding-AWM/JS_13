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

const AppData = function () {

};

const appData = new AppData();

buttonCancel.addEventListener('click', appData.blockReset);
buttonCalculate.addEventListener('click', appData.start);
addExpensesButton.addEventListener('click', appData.addExpensesBlock);
addIncomeButton.addEventListener('click', appData.addAmountBlock);
periodSelect.addEventListener('change', eventFunc);