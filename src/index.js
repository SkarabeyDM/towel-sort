const towelSort = (matrix = []) => matrix.flatMap((arr, i) => i % 2 ? arr.reverse() : arr)

module.exports = towelSort