function towelSort (matrix) {
  return arguments.length ? [].concat(...matrix.map((arr, i) => i % 2 === 0 ? arr : arr.reverse())) : []
}

module.exports = towelSort