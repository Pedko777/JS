"use strict";
// debugger;

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function (login) {
//   const name = "Ajax"; //! создали переменную имя 
//   const nameLangth = login.length; //!длина переменной имя равняется длине логина

//   if (nameLangth >= 4 && nameLangth <= 16) { //!если  длина переменной ьольше 4 и меньше 16
//     return true; //!то верни тру
//   } else { //! в противном случае
//     return false; //! верни фолс
// }

// };

//! преобразованная в стрелочную
const isLoginValid = (login) => login.length >= 4 && login.length <= 16;

// const isLoginUnique = function (allLogins, login) {
//   const res = allLogins.includes(login); //!перемення рес проверяет содержит ли масив оллоджинс логин 
//   return res;
// };

//! преобразованная в стрелочную
const isLoginUnique = (allLogins, login) => allLogins.includes(login);

const addLogin = function (allLogins, login) {
  //   console.log(allLogins === logins);
  const isLoginGood = isLoginValid(login);

  if (!isLoginGood) { //!если переменная не соответсвует верни 
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }

  const isLoginUnic = isLoginUnique(allLogins, login);

  if (isLoginUnic) { //!если переменная содержит элемент соответствующий элементу массива то выведи 
    return "Такой логин уже используется!";
  }

  allLogins.push(login); //!если предыдущие операции не выполнились то добавь элемент в масив 
  return "Логин успешно добавлен!";
};

console.log(logins);

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'лжен быть от 4 до 16 символов'
