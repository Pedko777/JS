"use strict"


// * Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// * после чего вставит все li за одну операцию в список ul.ingredients. Для создания 
// *DOM-узлов используй document.createElement().

const ingredientsGet = document.querySelector('#ingredients');
// console.log(ingredientsGet);
const fragment = document.createDocumentFragment();
// console.log(fragment);
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// ingredients.forEach(function(ingredient) {
//     const addLi = document.createElement('li');
//     addLi.textContent = ingredient;
//     fragment.append(ingredient)
// })

// ingredientsGet.append(fragment)
// console.log(ingredientsGet);

// =============================================

  function makeList() {ingredients.forEach(ingredient => {
      const addLi = document.createElement("li");
      addLi.textContent = ingredient;
      fragment.append(addLi);
    });
    return ingredientsGet.append(fragment);
  }
  makeList(ingredients);

