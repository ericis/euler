const perf = require('../perf')

const createFibSeq = () => {

    const seq = [1, 2]
    const terms = [1, 2]
    let fib = 2

    // create a sequence with 49 unique terms
    while (fib < 10000000000) {
        fib = terms[0] + terms[1]
        seq[seq.length] = fib
        terms[0] = terms[1]
        terms[1] = fib
    }

    return seq
}

const euler = (upperBoundary) => {

    const seq = createFibSeq()

    let sum = 0

    // filter the terms by evens and sum them
    seq.filter(term => {
        if (term <= upperBoundary &&
            term % 2 === 0) {
            sum += term
        }
        // just ignore all items
        return false
    })

    return sum
}

const freeCodeCampVersion = (termLimit) => {

    const seq = createFibSeq()

    // grab only the number of terms expected
    const terms = seq.slice(0, termLimit)

    // console.log('# of terms in seq, # of terms', seq.length, terms.length)

    let sum = 0

    // filter the terms by evens and sum them
    terms.filter(term => {
        if (term % 2 === 0) {
            sum += term
        }
        // just ignore all items
        return false
    })

    return sum
}

// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-2-even-fibonacci-numbers
module.exports = {
    euler,
    freeCodeCampVersion,
}
