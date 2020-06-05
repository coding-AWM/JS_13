let money;
let income;
let addExpensesа;
let depositrue;
let mission000;
let period;
let lowerAddExpenses;
let arrAddExpenses;
let budgetDay;

money = 300;
income = 'Свободный заработок';
addExpenses = 'аренда, интернет, еда, транспорт';
deposit = true;
mission = 5000;
period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('"Период равен' + ' ' + period + ' ' + 'месяцев"');
console.log('Цель заработать' + ' ' + mission + ' ' + 'долларов');

lowerAddExpenses = addExpenses.toLowerCase();
arrAddExpenses = addExpenses.split(', ');

console.log(arrAddExpenses);

budgetDay = money/30;

console.log(budgetDay);

