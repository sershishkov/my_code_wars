////////////////////////////////////////////////////////
/////instructions start
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1, 2], [1]) == [2];
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3];
/////instructions end

///mySolution
// function arrayDiff(a: number[], b: number[]): number[] {
//   const newArr = a.filter((el) => {
//     return !b.includes(el);
//   });

//   return newArr;
// }

// console.log(arrayDiff([1, 2], [1]));
// console.log(arrayDiff([1, 2, 2], [1]));
// console.log(arrayDiff([1, 2, 2], [2]));
// console.log(arrayDiff([1, 2, 2], []));
// console.log(arrayDiff([], [1, 2]));
// console.log(arrayDiff([1, 2, 3], [1, 2]));

////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
/////instructions start
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples;
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
/////instructions end
///startSolution
export function reverseWords(str: string): string {
  let countSpace = str.match(/ /g)?.length;
  //   console.log('countSpace:', countSpace);
  let arrWords = str.split(' ');
  let countWords = arrWords.length;
  let spacesLength = countSpace! / (countWords! - 1);
  let space: string = '';
  for (let i = 0; i < spacesLength; i++) {
    space += ' ';
  }

  let newStr: string = '';
  arrWords.forEach((el, index) => {
    newStr =
      newStr +
      el.split('').reverse().join('') +
      `${index === arrWords.length - 1 ? '' : space}`;
  });
  return newStr;
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log(reverseWords('apple'));
console.log(reverseWords('a b c d'));
console.log(reverseWords('double   spaced   words'));

///endSolution

////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
/////instructions start

/////instructions end
///startSolution

///endSolution
////////////////////////////////////////////////////////
