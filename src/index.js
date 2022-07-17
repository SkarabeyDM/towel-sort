
module.exports = function towelSort (matrix) {
  return arguments.length ? [].concat(...matrix.map((arr, i) => i % 2 === 0 ? arr : arr.reverse())) : []
}

// function towelSort (matrix){
//   return [].concat(...matrix.map((arr, i) => i % 2 === 0 ? arr : arr.reverse()))
// }