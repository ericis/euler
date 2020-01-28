const perf = require('../perf')

const createFibSeqToUpperBoundaryWithSum = (currentTerm, lastTerm, currentSumOfEvens, upperBoundary) => {

    if (currentTerm >= upperBoundary) {
        // console.log('Max term reached: %d of %d', currentTerm, upperBoundary)
        return currentSumOfEvens
    }

    const newTerm = currentTerm + lastTerm
    const newSumOfEvens = (newTerm % 2 === 0) ? currentSumOfEvens + newTerm : currentSumOfEvens

    // console.log('Fib current term: %d, new term: %d, sum: %d', currentTerm, newTerm, newSumOfEvens)

    return createFibSeqToUpperBoundaryWithSum(newTerm, currentTerm, newSumOfEvens, upperBoundary)
}

const euler = (upperBoundary) => {

    const sum = perf.measure('002', () => {

        if (upperBoundary <= 1) return 0
        else if (upperBoundary === 2) return 2

        return createFibSeqToUpperBoundaryWithSum(3, 2, 2, upperBoundary)
    })

    return sum
}

const createFibSeqToTermCountLimitWithSum = (currentTerm, lastTerm, currentSumOfEvens, termCount, termLimit) => {

    if (termCount >= termLimit) {
        // console.log('Max terms reached: %d of %d', termCount, termLimit)
        return currentSumOfEvens
    }

    const newTerm = currentTerm + lastTerm
    const newSumOfEvens = (newTerm % 2 === 0) ? currentSumOfEvens + newTerm : currentSumOfEvens

    // console.log('Fib current term: %d, new term: %d, sum: %d', currentTerm, newTerm, newSumOfEvens)

    return createFibSeqToTermCountLimitWithSum(newTerm, currentTerm, newSumOfEvens, termCount + 1, termLimit)
}

const freeCodeCampVersion = (termLimit) => {

    const sum = perf.measure('002', () => {

        if (termLimit <= 1) return 0
        else if (termLimit === 2) return 2

        return createFibSeqToTermCountLimitWithSum(3, 2, 2, 3, termLimit)
    })

    return sum
}

// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-2-even-fibonacci-numbers
module.exports = {
    euler,
    freeCodeCampVersion,
}
