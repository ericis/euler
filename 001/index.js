
module.exports = (value) => {

    let sum = 0, n = value

    // brute force it
    while (n--) {
        if (n % 3 === 0 || n % 5 === 0)
            sum += n
    }

    return sum
}
