const { PerformanceObserver, performance } = require('perf_hooks')

const obs = new PerformanceObserver(items => {

    console.log(items.getEntries()[0].duration)

    performance.clearMarks()
})

obs.observe({ entryTypes: ['measure'] })

function measure(timedFn) {

    performance.mark('pre')

    const result = timedFn()

    performance.mark('post')

    performance.measure('execution', 'pre', 'post')

    return result
}

module.exports = {
    measure,
}
