function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(randomInRange(0, 100));

const N = 2;
const RANDOM_INITIAL_RANGE = 100;
const MATRIX_LENGTH = Math.pow(2, N) + 1;

const matrix = new Array(MATRIX_LENGTH)
                .fill(0)
                .map(() => new Array(MATRIX_LENGTH).fill(null));

console.log(matrix)

if (matrix[1][1]) console.log(true)