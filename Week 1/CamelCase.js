// Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

// Your task is to write a program that creates or splits Camel Case variable, method, and class names.

// Input Format

// Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
// The operation will either be S (split) or C (combine)
// M indicates method, C indicates class, and V indicates variable
// In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
// In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.


//how input looks:
// "S;V;iPad\r\nC;M;mouse pad\r\nC;C;code swarm\r\nS;C;OrangeHighlighter"
const camelCase = ((input)=>{
    let startWord = input
    let fullArray = []
    // fill two arrays, one level one to be made whenever '\n' is found.
    let wordArray = []
    for(let y = 0; y<startWord.length; y++ ) {
        if(startWord[y] !== '\n') {
            wordArray.push(startWord[y])
            startWord.replace(startWord[y], '')
        }
        else {
            fullArray.push(wordArray)
            wordArray = []
        }
    }
    if(wordArray.length>0) {
        fullArray.push(wordArray)
    }
    // console.log(fullArray)
    fullArray.map((wordArray) => {
        if(wordArray[(wordArray.length - 1)] === '\r') {
            wordArray.pop()
        }
    })
    

    fullArray.map((wordArray) => {
        //Remove commas, semi-colons from each word array
        wordArray.map((char, index)=> {
            if(char === ',') {
                wordArray.splice(index,1)
            }
            if(char === ';') {
                wordArray.splice(index, 1)
            }
        })
        // Evaluating S or C
        const sOrC = (wordArray.splice(0, 1))[0]
        // Evaluating M V or C
        const mVOrC = (wordArray.splice(0, 1))[0]
        if(mVOrC === 'M') {
            if(sOrC === 'C'){
                wordArray.push('(')
                wordArray.push(')')
            }
            if(sOrC === 'S') {
                if(wordArray[wordArray.length-1] === ')') {
                    wordArray.pop()
                    wordArray.pop()
                }
            }
        }
        if(mVOrC === 'C') {
            wordArray[0] = wordArray[0].toUpperCase()
        }
    
        // Combining Logic
        let spaceFound = false
    
        if(sOrC === 'C') {
            for(let c=0; c<wordArray.length; c++) {
                if(spaceFound) {
                    wordArray[c-1] = wordArray[c-1].toUpperCase()
                    spaceFound = false;
                }
                else if(wordArray[c] === ' ') {
                    spaceFound = true;
                    wordArray.splice(c, 1)
                }
            }
        }
        // Splitting Logic
    
        if(sOrC === 'S') {
            wordArray.map((char, index) => {
                if(char === char.toUpperCase()) {
                    wordArray.splice(index, 1, char.toLowerCase())
                    if(index !== 0) {
                        wordArray.splice(index, 0, ' ')
                        }
                    }
            })
        }
    
        // Extract each character and put into  a string.
        let output = ""
        wordArray.map((char)=>{
            output = output + char
        })
        console.log(output)
    })

})

const all = camelCase("S;V;iPad\r\nC;M;mouse pad\r\nC;C;code swarm\r\nS;C;OrangeHighlighter")
const test2 = camelCase("C;V;can of coke\r\nS;M;sweatTea()\r\nS;V;epsonPrinter\r\nC;M;santa claus\r\nC;C;mirror\r\n")







// put string into an array to work with
// evaluate S or C
// evaluate M, V or C
// separate into two words, capitalize second