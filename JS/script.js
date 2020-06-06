let money = 300;
let income = 'Свободный заработок';
let addExpenses = 'аренда, интернет, еда, транспорт';
let deposit = true;
let mission = 5000;
let period = 6;

//в коде выше инициализировал с присвоением переменные

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('"Период равен' + ' ' + period + ' ' + 'месяцев"');
console.log('Цель заработать' + ' ' + mission + ' ' + 'долларов');

let arrAddExpenses = addExpenses.toLowerCase().split(', ');
console.log(arrAddExpenses);

//в коде выше убрал лишнюю переменную, для нижнего регистра, сделал методы через строку.

let budgetDay = money/30;
console.log(budgetDay);

//ну теперь без вариантов ПРИНЯТЬ)))

