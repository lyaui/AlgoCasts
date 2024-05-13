// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const chunk = [];

//   for (let i = 0; i < array.length; i++) {
//     if (i % size === 0) {
//       const subArr = array.slice(i, i + size);
//       chunk.push(subArr);
//     }
//   }

//   return chunk;
// }

function chunk(array, size) {
  const chunk = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (i % size === 0) {
      chunk.push([element]);
    } else {
      const subIdx = Math.floor(i / size);
      chunk[subIdx].push(element);
    }
  }

  return chunk;
}

module.exports = chunk;
