"use strict";

//     new RegExp('pattern', 'flags');
//     /pattern/f

// const ans = prompt('Введите ваше имя');

// const reg = /n/;
// console.log(ans.search(reg));  // получаем в консоль 1 или -1
// Флаги
// i - если мы хотим найти что то в не зависимости от регистра
// g - найти сразу несколько вхождений
// m - включаем многострочный режим
// const reg = /n/ig;
// console.log(ans.search(reg)); //g - с search не пройдёт он ищет только первое совпадение

// console.log(ans.match(reg));
// 

// const pass = prompt('password');
// console.log(pass.replace(/./g, "*"));

// что бы получить только точку нужно экранировать символ этим \
// console.log(pass.replace(/\./g, "*"));  
// Примеры экранирования разных символов:
// console.log(pass.replace(/\\/g, "*"));
// console.log(pass.replace(/\^/g, "*"));
// console.log(pass.replace(/\&/g, "*"));
// console.log(pass.replace(/\|/g, "*"));
//Дефисы поменять на двоеточия:
// console.log('12-34-56'.replace(/-/g, ':'));

// const ans = prompt('Введите ваше число');

// const reg = /n/ig;
//const reg = / /ig; //- пробелы можно искать как отдельный символ
// console.log(reg.test(ans));  // возвращает true или false
// const reg = /\d/;
// const reg = /\d/g;
// console.log(ans.match(reg));

// В регулярных выражениях есть такое понятие как классы:
// \d  - значит что мы ищем цифры
// \w  - значит что мы ищем все слова буквы
// \s  - значит что мы ищем все пробелы

// const str = 'My name is R2D2';
// console.log(str.match(/\w\d\w\d/i));

// Обратные классы
// \D - не числа
// \W - не буквы любой символ кроме \w то есть не буквы из латиницы, не знак подчёркивания и не цифра. русские буквы принадлежат этому классу.
const str = 'My name is R2D2';
console.log(str.match(/\W/ig));