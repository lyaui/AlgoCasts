// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const getLowerCharsStr = (str) =>
//     str
//       .split('')
//       .filter((_char) => _char)
//       .join('')
//       .toLowerCase();

//   const strA = getLowerCharsStr(stringA);
//   const strB = getLowerCharsStr(stringB);

//   if (strA.length !== strB.length) return false;

//   const getCharCounter = (str) =>
//     str.split('').reduce((_acc, _cur) => {
//       _acc[_cur] = _acc[_cur] === undefined ? 1 : _acc[_cur] + 1;
//       return _acc;
//     }, {});

//   const counterA = getCharCounter(strA);
//   const counterB = getCharCounter(strB);

//   for (const key in counterA) {
//     const itemA = counterA[key];
//     const itemB = counterB[key];
//     if (itemA !== itemB) return false;
//   }

//   return true;
// }

function anagrams(stringA, stringB) {
  const getLowerCharsStr = (str) =>
    str
      .split('')
      .filter((_char) => _char)
      .sort()
      .join('')
      .toLowerCase();

  const strA = getLowerCharsStr(stringA);
  const strB = getLowerCharsStr(stringB);

  return strA === strB;
}

module.exports = anagrams;
