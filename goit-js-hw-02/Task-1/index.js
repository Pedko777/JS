"use strict";
//!обьяснения пишу для себя)
let array = []; //!в переменной создал масив элементов

const logItems = function (array) { //!переменная с масивом элементов logItems выполняет функцию в переменную array
    for (const item of array) { //!для каждого элемента из элементов по оддельности
        const itemNumber = array.indexOf(item) +1; //!добавил переменную itemNumber которая добавляет каждому из элементов индекс +1
        console.log(`${itemNumber} - ${item}`) //!законсолил результат используя шаблонную строку 
    }
}

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

