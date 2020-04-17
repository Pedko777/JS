"use strict";
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// debugger;

const findLongestWord = function (string) {
  const words = string.split(' ');
  let longestWord = [0];

  for (const word of words) {
      if (word.length > longestWord.length) {
          longestWord = word;
      }
  }
  return longestWord;
};


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'