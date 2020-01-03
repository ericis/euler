const { PerformanceObserver, performance } = require('perf_hooks')

const obs = new PerformanceObserver(items => {

    console.log(items.getEntries()[0].duration)

    performance.clearMarks()
})

obs.observe({ entryTypes: ['measure'] })

const sumSequences = value => {
    // arithmetic progression
    // 1/2 * n * (a_1 + a_n)
    // https://en.wikipedia.org/wiki/Arithmetic_progression
    return (value * (value + 1)) / 2
}

// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5
module.exports = (limitStartsAt) => {

    performance.mark('pre')

    const upperLimit = limitStartsAt - 1

    // constant time algorithm instead of loop
    // sum[3 or 5](n) = sum[3](n) + sum[5](n) - sum[15](n)
    // ... soooo much faster
    // inclusion-exclusion: since we are summing multiples of 3 and 5,
    // we need to also eliminate counting them twice (15)
    const sum3 = 3 * sumSequences(Math.floor(upperLimit / 3))
    const sum5 = 5 * sumSequences(Math.floor(upperLimit / 5))
    const sum15 = 15 * sumSequences(Math.floor(upperLimit / 15))

    const sum = Math.round(sum3 + sum5 - sum15)

    performance.mark('post')

    performance.measure('execution', 'pre', 'post')

    return sum
}
