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

let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let periodSelect = document.querySelector('.period-select');
