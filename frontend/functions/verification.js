
// matrix multiplication
// input M1: "[1,2,3],[4,5,6],[7,8,9]"
// input M2: "[1,2,3],[4,5,6],[7,8,9]"
// output: "[30,36,42],[66,81,96],[102,126,150]"

function multiply(mat1, mat2) {
    mat1 = JSON.parse(mat1);
    mat2 = JSON.parse(mat2);

    var N = mat1.length;

    let res = new Array(N);
    for (let k = 0; k < N; k++)
        res[k] = new Array(N);

    var N = mat1.length;

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

function verifier(mat1 , mat2, res) {
    var mat1 = JSON.parse(mat1);
    var mat2 = JSON.parse(mat2);
    var N = mat1.length;

    //random generation of the r vector 
    // containing only 0/1 as its elements
    let r = new Array(N);
    for (let p = 0; p < N; p++ ){
        r[p] = new Array(1);
    }

    for (let i = 0; i < N; i++) {
        r[i][0] = Math.floor(Math.random() * 2);
    }

    //test mat1 * (mat2*r) - (res*) = 0
    let br = new Array(N);
    for (let p = 0; p < N; p++ ){
        br[p] = new Array(1);
    }
    for (let i = 0; i < N; i++)
    {
        for (let j = 0; j < 1; j++)
        {
            for (let k = 0; k < N; k++)
            {
                br[i][j] = br[i][j] + mat2[i][k] * r[k][j];
            }
        }
    }

    let cr = new Array(N);
    for (let p = 0; p < N; p++ ){
        cr[p] = new Array(1);
    }
    for (let i = 0; i < N; i++)
    {
        for (let j = 0; j < 1; j++)
        {
            for (let k = 0; k < N; k++)
            {
                cr[i][j] = cr[i][j] + res[i][k] * r[k][j];
            }
        }
    }
    let abr = new Array(N);
    for (let p = 0; p < N; p++ ){
        abr[p] = new Array(1);
    }

    for (let i = 0; i < N; i++)
    {
        for (let j = 0; j < 1; j++)
        {
            for (let k = 0; k < N; k++)
            {
                abr[i][j] = abr[i][j] + mat1[i][k] * br[k][j];
            }
        }
    }
    // br = multiplyVector(mat2, r, n);
    // cr = multiplyVector(res, r, n);
    // abr = multiplyVector(mat1, br, n);
    // abr-cr

    for (let i = 0; i < N; i++)
    {
        abr[i][0] = abr[i][0] - cr[i][0];
    }

    var flag = true;

    for (let i = 0; i < N; i++)
    {
        if (abr[i][0] == 0){
            continue;
        }
        else{
            flag = false;
        }
    }

    if(flag == true){
        return false;
    }
    else{
        return true;
    }
}

M1 = "[ [ 1, 1, 1, 1 ],[ 2, 2, 2, 2 ], [ 3, 3, 3, 3 ], [ 4, 4, 4, 4 ] ]";
M2 = "[ [ 1, 1, 1, 1 ],[ 2, 2, 2, 2 ], [ 3, 3, 3, 3 ], [ 4, 4, 4, 4 ] ]";

var result = multiply(M1, M2);
console.log(result);
var verifier = verifier(M1, M2, result);
console.log(verifier);