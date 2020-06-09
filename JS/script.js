'use strict'
let money = 1 * (prompt('Ваш месячный доход?'));
let income = 1 * (prompt('Свободный заработок'));
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expense1 = prompt('Введите обязательную статью расходов?');
let amount1 = 1 * (prompt('Во сколько это обойдётся?'));
let expense2 = prompt('Введите обязательную статью расходов?');
let amount2 = 1 * (prompt('Во сколько это обойдётся?'));
let mission = 5000;
let period = 6;
let arrAddExpenses = addExpenses.toLowerCase().split(', ');
let summaryIncome = sum(money, income);
let accumulatedMonth = getAccumulatedMonth();

function sum(a, b) {
    return a + b;
}

function getExpensesMonth() {
    return amount1 + amount2;
}

function getAccumulatedMonth() {
    return summaryIncome - getExpensesMonth();
}

function getTargetMonth() {
    return Math.ceil(mission / getAccumulatedMonth());
}
let budgetDay = Math.floor(accumulatedMonth / 30);

function showDetailes () {
    console.log('Расходы за месяц составили: ' + getExpensesMonth() + ' долларов');
    console.log('Бюджет на месяц: ' + getAccumulatedMonth() + ' долларов!');
    console.log('Цель заработать' + ' ' + mission + ' ' + ' долларов');
    console.log('Цель будет достигнута за:' + ' ' + getTargetMonth() + ' ' + 'месяцев');
    console.log('Бюджет на день ' + budgetDay + ' долларов');
    console.log(arrAddExpenses);
}

function showTypeOf() {
    console.log(typeof money);
    console.log(typeof income);
    console.log(typeof deposit);
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
showTypeOf();
