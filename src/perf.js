const { PerformanceObserver, performance } = require('perf_hooks')

const obs = new PerformanceObserver((items, observer) => {

    console.log(items.getEntries())

    performance.clearMarks()

    observer.disconnect()
})

obs.observe({ entryTypes: ['measure'] })

function measure(name, timedFn) {

    performance.mark('pre')

    const result = timedFn()

    performance.mark('post')

    performance.measure(name, 'pre', 'post')

    return result
}

module.exports = {
    measure,
}
