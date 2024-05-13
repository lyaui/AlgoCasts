// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const counter = {};
  for (const _char of str) {
    counter[_char] = counter[_char] === undefined ? 0 : counter[_char] + 1;
  }
  let max = -Infinity;
  let result;
  for (const _char in counter) {
    const val = counter[_char];
    if (val > max) {
      max = val;
      result = _char;
    }
  }

  return result;
}

module.exports = maxChar;
