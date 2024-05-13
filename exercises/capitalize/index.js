// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const preStr = i === 0 ? '' : str[i - 1];
    const char = i === 0 || preStr === ' ' ? str[i].toUpperCase() : str[i];
    result += char;
  }

  return result;
}

module.exports = capitalize;
