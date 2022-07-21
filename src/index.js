//const towelSort = (matrix = []) => [].concat(...matrix.map((arr, i) => i % 2 === 0 ? arr : arr.reverse()));
const towelSort = (matrix = []) => matrix.flatMap((arr, i) => i % 2 === 0 ? arr : arr.reverse())

module.exports = towelSort