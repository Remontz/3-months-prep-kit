// A pangram is a string that contains every letter of the alphabet.Given a sentence determine whether it is a pangram in the English alphabet.Ignore case. Return either pangram or not pangram as appropriate.

// Example : s = 'The quick brown fox jumps over the lazy dog.'

// The string contains all letters in the English alphabet, so return pangram.

// Function Description

// Complete the function pangrams in the editor below.It should return the string pangram if the input string is a pangram.Otherwise, it should return not pangram.

// pangrams has the following parameter(s):

// string s: a string to test

const pangram = (s) => {
    const string = s.toLowerCase()
    console.log(string)
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let letterIncluded = false
    let result = null
    for (let i = 0; i < alphabet.length; i++) {
        if (string.includes(alphabet[i]) === false) {
            letterIncluded = false
            break
        }
        else if (string.includes(alphabet[i]) === true) {
            letterIncluded = true
        }
    }
    letterIncluded ? result = 'pangram' : result = 'not pangram'
    return result
}

console.log(pangram('the quick Brown fox jumps over the lazy dog'))
console.log(pangram('clue'))