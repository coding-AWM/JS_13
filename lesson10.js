'use strict'

const books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book'),
    adv = document.querySelectorAll('.adv'),
    li = document.getElementsByTagName('li'),
    ul = document.getElementsByTagName('ul'),
    h2 = document.getElementsByTagName('h2')


let body = document.querySelector('body');
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'

adv[0].remove();
books[0].append(book[2]);//вставитьв конец родителя
books[0].prepend(book[1]);//вставить в начало родителя
book[4].after(book[3]); //вставить 3 после 4

li[16].before(li[8])//вставляет 8 перед 16
const newLi = document.createElement('li');
ul[5].append(newLi);
li[55].after(newLi);
newLi.textContent = 'Глава 8: За пределами ES6';
li[8].after(li[11]);
li[10].before(li[13]);
li[37].after(li[45]);
li[41].after(li[39])
li[45].before(li[42]);

h2[2].textContent = 'Книга 3. this и Прототипы Объектов';



