'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let count;
let totalPrice;
let balance;
let message;

count = prompt(
  "Введите количество дроидов, которые вы хотите приобрести"
);

totalPrice = count * pricePerDroid;
balance = credits - totalPrice;

if (count === null) {
  message = "Отменено пользователем!";
} else if (isNaN(count[0]) || isNaN(count)) {
    alert ( 'Введите число' );
}  else if (totalPrice <= credits && count > -1) {
  message = `Вы купили ${count} дроидов, на счету осталось ${balance} кредитов.`;
} else {
  message = "Недостаточно средств на счету!";
}

console.log(message);