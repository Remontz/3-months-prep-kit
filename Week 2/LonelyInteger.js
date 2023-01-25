// Given an array of integers, where all elements but one occur twice, find the unique element.
// example || a = [1,2,3,4,3,2,1]
// The unique element is 4.

const lonelyInt = (arr) => {
    let loneInt = arr[0]
    let arrAsObj = {}
    for (let i = 0; i < arr.length; i++) {
        arrAsObj = { ...arrAsObj, [i]: { "val": arr[i], isDuplicate: false } }
        for (let j = 0; j < arr.length; j++) {
            if (j !== i) {
                if (arr[i] === arr[j]) { arrAsObj[i].isDuplicate = true }
            }
        }
        if (arrAsObj[i].isDuplicate === false) {
            loneInt = arrAsObj[i].val
        }
    }

    return (loneInt)
}

const a = [1, 2, 3, 4, 3, 2, 1]
console.log(lonelyInt(a))