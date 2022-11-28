
// matrix multiplication
// input M1: "[1,2,3],[4,5,6],[7,8,9]"
// input M2: "[1,2,3],[4,5,6],[7,8,9]"
// output: "[30,36,42],[66,81,96],[102,126,150]"

M1 = [ [ 1, 1, 1, 1 ],[ 2, 2, 2, 2 ], [ 3, 3, 3, 3 ], [ 4, 4, 4, 4 ] ];
M2 = "[ [ 1, 1, 1, 1 ],[ 2, 2, 2, 2 ], [ 3, 3, 3, 3 ], [ 4, 4, 4, 4 ] ]"

M2=JSON.parse(M2);
// M1=JSON.parse(M1);
const N = 4;

let res = new Array(N);
    for (let k = 0; k < N; k++)
        res[k] = new Array(N);

function multiply(mat1, mat2, res) {
    let i, j, k;
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            res[i][j] = 0;
            for (k = 0; k < N; k++)
                res[i][j] += mat1[i][k] * mat2[k][j];
        }
    }

    return res;
}

var result = multiply(M1, M2, res);
console.log(result);


