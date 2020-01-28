const perf = require('../perf')

const euler = (upperBoundary) => {

    const sum = perf.measure('002', () => {

        // NOTE: a recursive solution was nearly just as fast, but this is MUCH easier to read and maintain
        let total = 0
        let x = 1, y = 1

        do {
            // console.log('x: %d, y: %d', x, y)
            if (x % 2 === 0) total += x
            const z = x
            x += y
            y = z
        } while(x <= upperBoundary)

        return total
    })

    return sum
}

const freeCodeCampVersion = (termLimit) => {

    const sum = perf.measure('002', () => {

        // NOTE: a recursive solution was nearly just as fast, but this is MUCH easier to read and maintain
        let termCount = 1
        let total = 0
        let x = 1, y = 1

        do {
            // console.log('x: %d, y: %d, count: %d', x, y, termCount)
            if (x % 2 === 0) total += x
            const z = x
            x += y
            y = z
            termCount++
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
