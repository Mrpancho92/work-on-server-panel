'use strict';

// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);

// map 

const answers = ['ivAn', 'Anna', 'Hello'];

const result = answers.map(item => {
    return item.toLocaleLowerCase();
});
console.log(result);

// every/some

const some = [4, 'qwq', 'sfsfgfgd'];
console.log(some.some(item => typeof(item) === 'number'));
console.log(some.every(item => typeof(item) === 'number'));

// reduce

const arr = [4,5,1,3,2,6];
// 0   4 
// 4   5
// 9   1
// 10  3
const res = arr.reduce((sum, current) => sum + current, 3);
console.log(res);

const arr2 = ['apple', 'pear', 'plum'];
// 0   4 
// 4   5
// 9   1
// 10  3
const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2);


const obj = {
ivan: 'persone',
ann: 'persone',
dog: 'animal',
cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArr);
// -----------------------------------------------------------------------------------------------
// Задачи
// 1) У вас есть список фильмов с рейтингом в виде массива объектов. 
// Напишите функцию showGoodFilms, которая будет принимать этот массив, 
// а возвращать будет массив объектов только с теми фильмами,
// у которых рейтинг больше или равен 8.
// P.S. Это довольно типичная задача в программировании. 
// Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...

// 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, 
// а возвращать будет строку, которая содержит названия фильмов через запятую.
// Пример:
// showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"

// 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, 
// а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. 
// Значение этого поля установите по нумерации фильма.
// Пример:
// setFilmsIds(films)  => [  
//      { name: 'Titanic', rating: 9, id: 0 }, 
//      { name: 'Die hard 5', rating: 5, id: 1 }, 
//      { name: 'Matrix', rating: 8, id: 2 },   
//      { name: 'Some bad film', rating: 4, id: 3 } ]

// 4) Запишите результат предыдущей функции в переменную tranformedArray.
// Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. 
// Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, 
// если мы передаем checkFilms(tranformedArray); :)

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

// 1)
function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
}
 //console.log(showGoodFilms(films));


// 2)
/* function showListOfFilms(arr) {
    return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
} */
function showListOfFilms(arr) {
    return arr.reduce((acc, curr) => {if (acc === 0 ) { return curr.name} else { return acc + ' ' + curr.name}}, 0);
}
//  console.log(showListOfFilms(films));


// 3)
function setFilmsIds(arr) {
    return arr.map((film, i) => { film.id = i; return film; });
}
console.log(setFilmsIds(films));


// 4)
const tranformedArray = setFilmsIds(films);
// При срабатывании every на первом фильме он натыкается на id = 0;
// 0 - это неправда в логическом ключе, поэтому и весь метод возвращает false
// Учитывайте этот момент
function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false)
}
console.log(checkFilms(tranformedArray));
// Еще короче, так как условие все равне вернет true или false:
// function checkFilms(arr) {
//     return arr.every(film => film.id || film.id === 0)
// }

// Максимально коротко, но еще читаемо:
// const checkFilms = (arr) => arr.every(film => film.id || film.id === 0)
// ---------------------------------------------------------------------------------------------
// Задачи:
// 1) У вас есть небольшой массив с данными о доходах каждой торговой точки.
//    Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных 
//    и возвращает сумму только положительных значений из каждого объекта. (число)
// Пример:
// getPositiveIncomeAmount(funds) => 13300

// 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. 
// Если хотя бы один из объектов содержит отрицательное значение поля amount, 
// то функция возвращает сумму всех значений. (число) 
// Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.
// Пример:
// getTotalIncomeAmount(funds) => -500

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];
// console.log(funds[0].amount);
// Моё решение 
function getPositiveIncomeAmount(funds) {
return funds.reduce(function(acc,curr) {
return (curr.amount > 0 ) ? acc + curr.amount : acc ;
}, 0);
};
console.log(getPositiveIncomeAmount(funds));

function getTotalIncomeAmount(funds) {
    const some = funds.some(function(item) {
      return item.amount < 0;
    });
    return funds.reduce(function(acc,curr) {
        if (some) {
            return acc + curr.amount ; 
        } else {
           return getPositiveIncomeAmount(funds);
        };
        }, 0);
};
console.log(getTotalIncomeAmount(funds));
// Ответ:
// const getPositiveIncomeAmount = (data) => {
//     return data.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0)
// }

// getPositiveIncomeAmount(funds);

// const getTotalIncomeAmount = (data) => {
//     return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
// }

// getTotalIncomeAmount(funds);






console.log(
    [1, , 3].map((x, index) => {
      console.log(`Visit ${index}`);
      return x * 2;
    }));
