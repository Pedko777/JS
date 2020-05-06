"use strict"
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
{/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */}
let counterValue = 0;

const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
// console.log(decrement);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);
// console.log(increment);
const counter = document.querySelector('#value');

const decrFn = () => {
    return (counter.textContent = counterValue -= 1);
}

const incrFn = () => {
    return (counter.textContent = counterValue += 1);
}

decrementBtn.addEventListener("click", decrFn);
incrementBtn.addEventListener("click", incrFn)