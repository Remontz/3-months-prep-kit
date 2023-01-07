// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
// Example
// strings = ['ab', 'ab', 'abc']
// queries = ['ab', 'abc', 'bc']
// There are 2 instances of ab', 1 of 'abc' and 0 of 'bc'. For each query, add an element to the return array, results = [2, 1, 0]

const sparseArrays = (strings, queries) => {
    let instances = {}
    let results = []
    for (let q = 0; q < queries.length; q++) {
        let newInst = queries[q]
        let strInst = 0
        for (let s = 0; s < strings.length; s++) {
            if (newInst === strings[s]) {
                strInst = strInst + 1
            }
        }
        instances = { ...instances, [newInst]: [strInst] }
        results.push(strInst)
    }
    console.log(instances)
    console.log(results)

    return results
}


strings = ['ab', 'ab', 'abc']
queries = ['ab', 'abc', 'bc']
sparseArrays(strings, queries)