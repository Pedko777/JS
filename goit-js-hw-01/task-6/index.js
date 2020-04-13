let input;
let total = 0;
let message;

do {
  input = prompt("Введите число");
  if (isNaN(input)) {
    alert("Введено не число");
  } else {
    total = total + Number(input);
  }
} while (input !== null);

alert(`Общая сумма чисел: ${total}`);