'use strict';

// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
//нужно создать переменную которая будет присваивать лучшего продажника
//нужно создать переменную которая будет присваивать самый большой результат выполненых задач
//с помощью цикла фор ин перебрать элементы
//добавить условие

const findBestEmployee = function (employees) {
	let bestResult = 0;
	let bestEmployee;
	for (let key in employees) {
		if (employees[key] > bestResult) {
			bestResult = employees[key];
			bestEmployee = key;
		}
	}
	return [bestEmployee, bestResult];
};


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
	findBestEmployee({
		ann: 29,
		david: 35,
		helen: 1,
		lorence: 99,
	})
); // lorence

console.log(
	findBestEmployee({
		poly: 12,
		mango: 17,
		ajax: 4,
	})
); // mango

console.log(
	findBestEmployee({
		lux: 147,
		david: 21,
		kiwi: 19,
		chelsy: 38,
	})
); // lux
