const perf = require('../perf')

const euler = (upperBoundary) => {

    const sum = perf.measure('002', () => {

        // NOTE: a recursive solution was nearly just as fast, but this is MUCH easier to read and maintain
        let total = 0
        let x = 1, y = 1, z = 2

        // *every 3rd term is even, so it's not necessary to check for evens
        do {
            // console.log('x: %d, y: %d, count: %d', x, y, termCount)
            total += z
            x = y + z // 1st: next term in seq
            y = z + x // 2nd: next term after new 'x'
            z = x + y // 3rd: next term after new 'x' and 'y'
        } while(z <= upperBoundary)

        return total
    })

    return sum
}

const freeCodeCampVersion = (termLimit) => {

    const sum = perf.measure('002', () => {

        // NOTE: a recursive solution was nearly just as fast, but this is MUCH easier to read and maintain
        let total = 0
        let x = 1, y = 1, z = 2
        let termCount = 2

        // *every 3rd term is even, so it's not necessary to check for evens
        do {
            // console.log('x: %d, y: %d, count: %d', x, y, termCount)
            total += z
            x = y + z // 1st: next term in seq
            y = z + x // 2nd: next term after new 'x'
            z = x + y // 3rd: next term after new 'x' and 'y'
            termCount += 3
        } while(termCount <= termLimit)

        return total
    })

    return sum
}

// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-2-even-fibonacci-numbers
module.exports = {
    euler,
    freeCodeCampVersion,
}
