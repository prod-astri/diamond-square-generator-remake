function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const N = 2;
const RANGE = 100;
const NOISE_MAX_AMPLITUDE = 10;
const MATRIX_LENGTH = Math.pow(2, N) + 1;

const matrix = new Array(MATRIX_LENGTH)
                .fill(0)
                .map(() => new Array(MATRIX_LENGTH).fill(null));

// console.log(matrix)

function fillCorners(matrix){
  matrix[0][0] = matrix[0][0] || randomInRange(0, RANGE);
  matrix[0][MATRIX_LENGTH - 1] = matrix[0][MATRIX_LENGTH - 1] || randomInRange(0, RANGE);
  matrix[MATRIX_LENGTH - 1][MATRIX_LENGTH - 1] = matrix[MATRIX_LENGTH - 1][MATRIX_LENGTH - 1] || randomInRange(0, RANGE);
  matrix[MATRIX_LENGTH - 1][0] = matrix[MATRIX_LENGTH - 1][0] || randomInRange(0, RANGE);
  return matrix
}

fillCorners(matrix)

function calculateDiamond(matrix, startX, startY, step){
  matrix[startX + step/2][startY + step/2] = 
    (matrix[startX][startY] + matrix[startX][startY])/4
  return matrix;
}

function calculateSquare(matrix, step){
  return matrix;
}

const newMatrix = calculateDiamond(matrix, 0, 0, MATRIX_LENGTH-1)

calculateSquare(newMatrix, 0, 0, MATRIX_LENGTH-1)



