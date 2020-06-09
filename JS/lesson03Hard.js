'use strict';

let languageRu = document.querySelectorAll('.languageRu');
let languageEn = document.querySelectorAll('.languageEn');
let langIndex;

let lang = confirm('Ваш язык общения русский?');
if (lang) {
    lang = 'Ru';
    langIndex = 0;
} else {
    lang = 'En';
    langIndex = 1;
}

let arrayOfDays = [
    [
        'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'
    ],
    [
        'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ]
]

let namePerson = prompt('Как вас зовут?');

console.log('Блок вывода с помощью IF:');

if (lang === 'Ru') {
    console.log('Понедельник');
    console.log('Вторник');
    console.log('Среда');
    console.log('Четверг');
    console.log('Пятница');
    console.log('Суббота');
    console.log('Воскресенье');
} else {
    console.log('Monday');
    console.log('Thuesday');
    console.log('Wednesday');
    console.log('Thursday');
    console.log('Friday');
    console.log('Saturday');
    console.log('Sunday');
}

console.log('Блок вывода с помощью SWITCH');

switch (lang) {
    case 'Ru':
        console.log('Понедельник');
        console.log('Вторник');
        console.log('Среда');
        console.log('Четверг');
        console.log('Пятница');
        console.log('Суббота');
        console.log('Воскресенье');
        break;
    case 'En':
        console.log('Monday');
        console.log('Thuesday');
        console.log('Wednesday');
        console.log('Thursday');
        console.log('Friday');
        console.log('Saturday');
        console.log('Sunday');
}

console.log('С помощью многомерного массива');

for (let i = 0; i < arrayOfDays[langIndex].length; i++) {
    console.log(arrayOfDays[langIndex][i]);
};

let roleOfPerson = namePerson === 'Артём' ? console.log('Директор') :
    namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');

//ниже код для верстки. Это мне нужно, решил сразу проверить. 
//Понимаю что не по теме и не к уроку, но буду принателен если дашь обратную связь, как можно это упростить. 

if (lang === 'Ru') {
    for (let i = 0; i < languageRu.length; i++) {
        languageRu[i].classList.add('langRu');
    }
    // languageRu[0].classList.add('langRu');
    // languageRu[1].classList.add('langRu');
    // languageRu[2].classList.add('langRu');
    // languageRu[3].classList.add('langRu');
    // languageRu[4].classList.add('langRu');
    // languageRu[5].classList.add('langRu');
    // languageRu[6].classList.add('langRu');   
} else if (lang === 'En') {
    for (let i = 0; i < languageRu.length; i++) {
        languageEn[i].classList.add('langEn');
    }
    // languageEn[0].classList.add('langEn');
    // languageEn[1].classList.add('langEn');
    // languageEn[2].classList.add('langEn');
    // languageEn[3].classList.add('langEn');
    // languageEn[4].classList.add('langEn');
    // languageEn[5].classList.add('langEn');
    // languageEn[6].classList.add('langEn'); 
}
console.log(languageRu.length);

//доделаю позже. пока додумался так.