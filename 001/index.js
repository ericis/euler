
module.exports = (value) => {

    let n = value, sum3 = 0, sum5 = 0, sum15 = 0

    // optimize with an algorithm
    // sum[3 or 5](n) = sum[3](n) + sum[5](n) - sum[15](n)
    while (n--) {
        if (n % 3 === 0) sum3 += n
        if (n % 5 === 0) sum5 += n
        if (n % 15 === 0) sum15 += n
    }

    const sum = (sum3 + sum5) - sum15

    return sum
}
