// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

const plusMinus = (array) => {
    let posCtr = 0
    let negCtr = 0
    let zeroCtr = 0
    let ctrArray = []
    array.map((number, index) => {
        (number < 0) ? (negCtr++) : ((number > 0) ? posCtr++ : zeroCtr++)
    })

    ctrArray.push(posCtr)
    ctrArray.push(negCtr)
    ctrArray.push(zeroCtr)


    const ratios = []
    ctrArray.map((ctr, index) => {
        ratios.push((ctr/array.length).toFixed(6))
    })

    console.log("Positive Ratio: " + ratios[0])
    console.log("Negative Ratio: " + ratios[1])
    console.log("Zero Ratio: " + ratios[2])
    console.log("----------")
}

plusMinus([1, 1, 0, -1, -1])
plusMinus([-3, 0 , -2, 4, 0, 9, -3])