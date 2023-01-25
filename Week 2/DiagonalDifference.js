// Given a square matrix, calculate the absolute difference between the sums of its diagonals. For example, the square matrix  is shown below:
{/*
                        1 2 3
                        4 5 6
                        9 8 9 
                        */}
//The left - to - right diagonal = (1 + 5 + 9) || 15 .The right to left diagonal = (3 + 5 + 9) || 17.  Their absolute difference is 2.

// Function description
// diagonalDifference takes the following parameter: int arr[n][m]: an array of integers
// Return int: the absolute diagonal difference

// Input Format
// The first line contains a single integer, n , the number of rows and columns in the square matrix.
// Each of the next n lines describes a row,arr[i], and consists of n space - separated integers arr[i][j].

// Constraints
// 100 <= arr[i][j] <= 100
// Output Format
// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

const diagonalDifference = (n, ...input) => {
    let table = []

    for (let j = 1; j <= n; j++) {
        let row = []
        for (let i = 1; i <= n; i++) {
            row[i - 1] = (input.splice([0], 1))[0]
        }
        table.push(row)
    }

    //diag right = (0,0) + (1, 1) + ...
    let sumPrime = 0
    let sumSec = 0
    for (let t = 0; t < n; t++) {
        sumPrime = sumPrime + table[0 + t][0 + t]
    }
    let x = 0
    for (let y = (n - 1); y >= 0; y--) {
        sumSec = sumSec + table[x][0 + y]
        x++
    }



    return Math.abs(sumPrime - sumSec)

}

const diagonalDifferenceA = (...input) => {
    let sq = input.length
    let sumPrime = 0
    let sumSec = 0
    // diagonal right
    for (let i = 0; i < sq; i++) {
        sumPrime = sumPrime + input[i][i]
        // console.log("sumPrime(" + i + ") = " + sumPrime)
        sumSec = sumSec + input[i][(sq - 1) - i]
        // console.log("sumSec(" + i + ") = " + sumSec)
    }

    return Math.abs(sumPrime - sumSec)
}

console.log(diagonalDifference(3, 11, 2, 4, 4, 5, 6, 10, 8, -12))
console.log(diagonalDifferenceA([11, 2, 4], [4, 5, 6], [10, 8, -12]))


function diagonalDifference(arr) {

    var n = arr.length;
    var d1 = 0;
    var d2 = 0;

    for (var i = 0; i < n; i++) {

        for (var j = 0; j < n; j++) {
            // finding the sum of primary diagonal*

            if (i === j) {
                d1 += arr[i][j];
            }
            // finding the sum of secondary diagonal*

            if (i + j === n - 1) {
                d2 += arr[i][j];
            }

        }

    }
    return Math.abs(d1 - d2);
}