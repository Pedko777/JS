'use strict';

// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ: значение используя Object.keys() и
// for... of



const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy'; //!добавили новый ключ со значением
user.hobby = 'skydiving';//!замение значение в ключе хобби
user.premium = false;//!заменили значение в ключе премиум

// console.table(user);
// console.log(user);

const keys = Object.keys(user);

for (const key of keys) {
    console.log(`${key}:`, user[key]);
}