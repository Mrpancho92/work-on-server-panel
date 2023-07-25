'use strict';

const app = '123';

const number = 1;

// Отдельный модуль со своей областью видимости
(function(){
    let number =2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

// Использование объектного интерфейса 
const user = (function(){
    const privat = function() {
        console.log('i am privat');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();