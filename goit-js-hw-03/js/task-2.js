'use strict';

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

const countProps = function (obj) {
	// let total = []; //!создаём переменную со значением пустого масива
	// total = Object.keys(obj); //!присваевыем переменной значения функции , которые переносятся в масив и становятся элементами масива
	// return total.length; //!возвращаем длину масива
	return Object.keys(obj).length //!краткий вариант
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
