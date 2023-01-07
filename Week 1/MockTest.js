// find median of unsorted array

const findMedian = (unsortedArr) => {
    let sortedArr = unsortedArr.sort(function (a, b) { return a - b })
    let median

    if (sortedArr.length % 2 === 0) {
        console.log("even amount of values")
        let midRank = ((sortedArr.length) / 2) - 1
        console.log("middle index: " + midRank)

        median = (sortedArr[midRank] + sortedArr[(midRank + 1)]) / 2
    }

    if (sortedArr.length % 2 !== 0) {
        console.log("odd amount of values")
        let midRank = Math.floor((sortedArr.length) / 2)

        console.log("middle index: " + midRank)

        median = sortedArr[midRank]
    }

    return median
}

console.log(findMedian([40, 100, 1, 5, 25, 10]))
console.log(findMedian([1, 2, 3]))
console.log(findMedian([1, 2, 90, 35, 3]))