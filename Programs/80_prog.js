// set matrix zeros

var setZeroes = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let firstRowHasZero = false;
    let firstColHasZero = false;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                if (i === 0) firstRowHasZero = true;
                if (j === 0) firstColHasZero = true;
                matrix[i][0] = 0; 
                matrix[0][j] = 0; 
            }
        }
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (firstRowHasZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    if (firstColHasZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
};

let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(matrix);
console.log(matrix);