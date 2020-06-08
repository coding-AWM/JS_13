'use strict'
let money = 1*(prompt('Ваш месячный доход?'));
let income = 1*(prompt('Свободный заработок'));
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expense1 = prompt('Введите обязательную статью расходов?');
let amount1 = 1*(prompt('Во сколько это обойдётся?'));
let expense2 = prompt('Введите обязательную статью расходов?');
let amount2 = 1*(prompt('Во сколько это обойдётся?'));
let mission = 5000;
let period = 6;
let budgetMonth = (money+income)-(amount1+amount2);
console.log('Бюджет на месяц: ' + budgetMonth + ' долларов!');

// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);
// console.log(addExpenses.length);
// console.log('"Период равен' + ' ' + period + ' ' + 'месяцев"');
console.log('Цель заработать' + ' ' + mission + ' ' + ' долларов');

let arrAddExpenses = addExpenses.toLowerCase().split(', ');
console.log(arrAddExpenses);

period = Math.ceil(mission/budgetMonth);
console.log('цель будет достигнута за ' + period + ' месяцев!');


let budgetDay = Math.floor(budgetMonth/30);
console.log('Бюджет на день ' + budgetDay + ' долларов');


if (budgetDay >= 30) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 15 && budgetDay < 30) {
    console.log('У вас средний уровень дохода');
} else if ( budgetDay > 0 && budgetDay < 15) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) { 
    console.log('Что то пошло не так');
}
