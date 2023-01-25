// You will be given a list of 32 bit unsigned integers. Flip all the bits (1 >> 0 and 0 >> 1) and return the result as an unsigned integer.




const flippingBits = (n) => {
    const decimalToBinary = (int) => {
        // rewrite int as 32-bit binary
        let intAsBinRev = []
        let div = int
        while (div > 0) {
            if (div % 2 === 0) {
                intAsBinRev.push(0)
            }
            if (div % 2 !== 0) {
                intAsBinRev.push(1)
            }
            div = Math.floor(div / 2)
        }
        let numOfZeros = 32 - (intAsBinRev.length)
        let intBin = []
        for (let i = 0; i < numOfZeros; i++) {
            intBin.push(0)
        }

        for (let t = intAsBinRev.length - 1; t >= 0; t--) {
            intBin.push(intAsBinRev[t])
        }
        return (intBin)
    }

    const flipBits = (val) => {
        let binArray = decimalToBinary(val)
        for (let i = 0; i < binArray.length; i++) {
            if (binArray[i] === 0) { binArray[i] = 1 }
            else if (binArray[i] === 1) { binArray[i] = 0 }
        }
        return (binArray)
    }

    const binaryToDecimal = (binaryArray) => {
        let powerOfTwo = 31
        let decVal = 0
        for (let i = 0; i < binaryArray.length; i++) {
            if (binaryArray[i] === 1) {
                decVal = decVal + (2 ** powerOfTwo)
                powerOfTwo--
            }
        }
        return decVal
    }


    return (binaryToDecimal(flipBits(n)))
}

console.log(flippingBits(2147483647))
