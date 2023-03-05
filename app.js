// function duplicateCount(text) {
//   let textArr = text.toLowerCase().split('');

//   let myObj = {};
//   textArr.forEach((item) => {
//     myObj[item] = myObj[item] > 0 ? Number(myObj[item] + 1) : Number(1);
//   });

//   let result = 0;

//   Object.values(myObj).forEach((item) => {
//     if (item > 1) {
//       result += 1;
//     }
//   });

//   return result;
// }
// console.log(duplicateCount('abcde'));

/////////////////////////////////////////////////
// const binaryArrayToNumber = (arr) => {
//   let result = 0;
//   const reversArr = arr.reverse();
//   reversArr.forEach((element, index) => {
//     result += element === 1 ? 2 ** index : 0;
//   });
//   return result;
// };

// console.log(binaryArrayToNumber([0, 0, 0, 1]));
// console.log(binaryArrayToNumber([0, 0, 1, 0]));
// console.log(binaryArrayToNumber([1, 1, 1, 1]));
// console.log(binaryArrayToNumber([0, 1, 1, 0]));

///////////////////////////////////////////////////////////
/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).*/

// function toCamelCase(str) {
//   const arrStr = str.split('');
//   if (arrStr.length === 0) return '';
//   const newArr = [];

//   for (let index = 0; index < arrStr.length; index++) {
//     if (arrStr[index] === '-' || arrStr[index] === '_') {
//       continue;
//     }

//     if (arrStr[index - 1] === '-' || arrStr[index - 1] === '_') {
//       newArr.push(arrStr[index].toUpperCase());
//     } else newArr.push(arrStr[index]);
//   }

//   return newArr.join('');
// }

// console.log(toCamelCase(''));
// console.log(toCamelCase('the_stealth_warrior'));
// console.log(toCamelCase('The-Stealth-Warrior'));
// console.log(toCamelCase('A-B-C'));

/////////////////////////////////////////////////////////////////////////

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// function filter_list(l) {
//   const newArr = l.filter((item) => {
//     return typeof item === 'number';
//   });
//   return newArr;
// }

// console.log(filter_list([1, 2, 'a', 'b']));
// console.log(filter_list([1, 'a', 'b', 0, 15]));
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));

/////////////////////////////////////////////////////////////////////////

/** The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here. */

// function rgb(r, g, b) {
//   const arrOfColors = [r, g, b];
//   let hexalValue = '';

//   for (item of arrOfColors) {
//     if (item < 0) {
//       hexalValue += '00';
//     } else if (item > 255) {
//       hexalValue += 'FF';
//     } else {
//       const digit = item.toString(16);
//       hexalValue +=
//         item < 16 ? `0${digit}`.toUpperCase() : `${digit}`.toUpperCase();
//     }
//   }

//   return hexalValue;
// }

// console.log(rgb(0, 0, 0));
// console.log(rgb(0, 0, -20));
// console.log(rgb(300, 255, 255));
// console.log(rgb(173, 255, 47));

/////////////////////////////////////////////////////////////////////////

/*What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:


anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

*/

// function anagrams(word, words) {
//   const myWord = word.split('').sort().join('');

//   let resultArr = [];
//   words.forEach((element) => {
//     if (myWord === element.split('').sort().join('')) {
//       resultArr.push(element);
//     }
//   });
//   return resultArr;
// }

// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']));
//////////////////////////////////////////////////////////////
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(number) {
//   if (isNaN(number) || number < 0) return 0;
//   let sum = 0;
//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(solution(50));
////////////////////////////////////////////////////////
/////instructions start
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1, 2], [1]) == [2];
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3];
/////instructions end

///mySolution
function arrayDiff(a, b) {
  a.forEach((el, index) => {
    if (b.includes(el)) {
      a.splice(index, 1);
      console.log(a);
    }
  });
  return a;
}

// console.log(arrayDiff([1, 2], [1]));
// console.log(arrayDiff([1, 2, 2], [1]));
// console.log(arrayDiff([1, 2, 2], [2]));
// console.log(arrayDiff([1, 2, 2], []));
// console.log(arrayDiff([], [1, 2]));
console.log(arrayDiff([1, 2, 3], [1, 2]));

////////////////////////////////////////////////////////
