// Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i<j and ar[i] + ar[j] is divisible by k.

// Example
// ar = [1,2,3,4,5,6]
// k = 5
// Three pairs meet the criteria: [1,4], [2,3] and [4,6].

const divSumPairs = (n, k, ar) => {
    let pairCount = 0
    let pairs = []
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            if (ar[i] < ar[j]) {
                if ((ar[i] + ar[j]) % k == 0) {
                    pairs.push(ar[i] + "," + ar[j])
                }
            }
        }
    }
    console.log(pairs)
    return pairs.length
}

console.log(divSumPairs(6, 5, [1, 2, 3, 4, 5, 6]))
