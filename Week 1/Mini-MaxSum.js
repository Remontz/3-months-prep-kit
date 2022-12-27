// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// array = [1, 2, 3]
// heldNumber = (array.splice(0, 1)) * 1
// console.log(array)
// array.splice(0, 0, heldNumber)
// console.log(array)


const miniMaxSum = ((arr) => {
    // 1. Create SumArray Thats holding all possible sums. ["sum w/o index 1", "sum w/o index 2", "sum w/o index 3"...etc.]
    const sumArray = []

    arr.map((number, index)=>{
        heldNumber=(arr.splice(index, 1)) * 1
        let sum = 0
        arr.map((number, index)=>{
            sum =sum + number 
        })
        sumArray.push(sum)
        arr.splice(index, 0, heldNumber)
    })

    // 2.  Find min and max of Sum Array
    max = sumArray[0]
    min = sumArray[0]
    sumArray.map((sum)=>{
        (sum > max) ? max = sum : null
    })
    sumArray.map((sum)=>{
        (sum < min) ? min = sum : null
    })

    return ([min, max])
})
const testArray = [1, 2, 3, 4, 5];

console.log(miniMaxSum(testArray))

// console.log("The max is: " + miniMaxSum(testArray).max)
// console.log("The min is: " + miniMaxSum(testArray).min)

// map through the array
// hold specific index as an integer
// sum remaining numbers in array
// add that sum to a sums array
// reinsert held number back into the array






// Explanation

// The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:

// Sum everything except 1, the sum is 14 .
// Sum everything except 2, the sum is 13.
// Sum everything except 3, the sum is 12.
// Sum everything except 4, the sum is 11.
// Sum everything except 5, the sum is 10.