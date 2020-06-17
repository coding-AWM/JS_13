'use strict'

let buttonCalculate = document.querySelector('#start');
let addIncomeButton = document.querySelector('button.income_add');
let addExpensesButton = document.querySelector('button.expenses_add');
let depositCheck = document.querySelector('#deposit-check')
let addIncomeItems = document.querySelectorAll('.additional_income-item');
let budgetMonthValue = document.querySelector('.budget_month-value');
let budgetDayValue = document.querySelector('.budget_day-value');
let expensesMonthValue = document.querySelector('.expenses_month-value');
let additionalIncomeValue = document.querySelector('.additional_income-value');
let additionaExpensesValue = document.querySelector('.additional_expenses-value');
let incomePeriodValue = document.querySelector('.income_period-value');
let targetMonthValue = document.querySelector('.target_month-value');
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let periodSelect = document.querySelector('.period-select');
console.log('periodSelect: ', periodSelect);