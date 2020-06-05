let num = 266219; //266219
let stringNum;
let multiplyNum = 1;
let powerNum = 0;
let stringPower;

stringNum = String(num);

for (i = 0; i < stringNum.length; i++) {    
    multiplyNum *= stringNum.charAt(i);   
}
console.log(multiplyNum);

powerNum = multiplyNum**3;

stringPower = String(powerNum);
console.log(stringPower.slice(0, 2));