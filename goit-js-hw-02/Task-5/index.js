"use strict";
debugger;
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function(message) {
//    let words = message.toLowerCase();

//    if (words.includes('spam') || words.includes('sale')) {
//        return true;
//    } else {
//        return false;
//    }
// };

const checkForSpam = function (message) {
    const badWords = ["spam", "sale"];
    let textArr = message.toLowerCase();

    for (let badWord of badWords) {
      if (textArr.includes(badWord)) {
        return textArr.includes(badWord); //!по умолчанию возвращает true дополнительно писать не нужно
      }
    }

    return false;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam("Latest technology news")); // false
  
  console.log(checkForSpam("JavaScript weekly newsletter")); // false
  
  console.log(checkForSpam("Get best sale offers now!")); // true
  
  console.log(checkForSpam("[SPAM] How to earn fast money?")); // true