"use strict"
//* Напиши скрипт, который выполнит следующие операции.

//* Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

//* Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

//* Например для первой категории получится:

//* Категория: Животные
//* Количество элементов: 4

const item = document.querySelectorAll('li.item')
// console.log(item);
function categoriesCount (countItem)  { 
  return console.log(`В списке ${countItem.length} категории.`);
}
categoriesCount(item)


//=======================

function getCategory(item) { item.forEach (item => {
    const innerContentUl = item.firstElementChild.textContent;
    // console.log(innerContentUl);
    const allElementsLength = item.querySelector("ul").querySelectorAll("li").length;
    // console.log(allElementsLength);
    return console.log(`Категория ${innerContentUl} содержит ${allElementsLength} элемента`);
  });
}


getCategory(item);