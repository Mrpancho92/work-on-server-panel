'use strict';

// localStorage.setItem('number', 5);
// localStorage.removeItem('number');
// localStorage.clear(); - // полная очистка локального хранилища 
// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');


if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

 if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
  } 
  
checkbox.addEventListener('change', () => {
  if (localStorage.getItem('isChecked')) {
    localStorage.removeItem('isChecked');
  } else {
    localStorage.setItem('isChecked', true);
  }
});

change.addEventListener('click', () => {
      if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
      } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
      }
});

// Сериализация данных чтоб записать объекты и массивы а иначе получим просто Object

const persone = {
    name:'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);
console.log(JSON.parse(localStorage.getItem('alex')));
