let num = 266219;
let stringNum;
let multiplyNum = 1;
let powerNum = 0;
let stringPower;
let numberPower;

stringNum = String(num);

for (i = 0; i < stringNum.length; i++) {    
    multiplyNum *= stringNum.charAt(i);   
}
console.log(multiplyNum);

powerNum = multiplyNum**3;
stringPower = String(powerNum);
numberPower = Number(stringPower.slice(0, 2));

console.log(numberPower);