'use strict'
let arr = [];

arr[0] = '123456789';
arr[1] = '987654321';
arr[2] = '234567890';
arr[3] = '198765432';
arr[4] = '456789123';
arr[5] = '654987321';
arr[6] = '951753456';

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == 2 || arr[i][0] == 4) {
        console.log(arr[i]);
    }
}

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for (let k = 1; k < 10; k++) {

//             if (+arr[i][j] % +arr[i][j] === 0 && +arr[i][j] / +arr[i][j] === 1 && +arr[i][j] / k === 1 && +arr[i][j] % 0)
//             console.log(arr[i][j]);
//         }
//     }
// }
// дорабооать цикл. для вывода простых чисел. первая чстьработает, надо сделать проверку на деление на все числа



// if ( 4 % 3 === 0 && 4 / 4 === 1) {
//     console.log(5);
// }

for (let i = 1; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            break
        } else {

            console.log(i);
            break
        }
    }
}