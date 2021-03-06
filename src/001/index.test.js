const euler = require('./index')

test('euler 001', async() => {

    /*
       If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
       Find the sum of all the multiples of 3 or 5 below 1000.
       https://projecteuler.net/problem=1
       https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5
    */
    expect(euler(1000)).toBe(233168)

    expect(euler(10)).toBe(23)

    expect(euler(49)).toBe(543)

    expect(euler(8456)).toBe(16687353)

    expect(euler(19564)).toBe(89301183)

    expect(euler(19564000)).toBe(89308352472668)
})
