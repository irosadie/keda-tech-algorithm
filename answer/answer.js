const bubbleSort = require('../functions/quest-1')
const sleedingWindow = require('../functions/quest-2')
const recursive = require('../functions/quest-3')


// quest #1
const dataTest1 = [1, 2, 4, 3, 5, 3, 2, 1]
const expectOutput1 = [5, 4, 3, 3, 2, 2, 1, 1]

const result1 = bubbleSort(dataTest1)

console.log(`
--- quest 1: ---
- data: [${dataTest1}]
- expect: [${expectOutput1}]
- result: [${result1}]
`)

console.log('---------------------------')

// quest #2
const dataTest2 = [-3, 4, 0, -2, 6, -1], k = 2, expectOutput2 = 5

const result2 = sleedingWindow(dataTest2, k)

console.log(`
--- quest 2: ---
- data: [${dataTest2}]
- expect: ${expectOutput2}
- result: ${result2}
`)

console.log('---------------------------')

// quest #3
const dataTest3 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}
const expectOutput3 = 6

const result3 = recursive(dataTest3)

console.log(`
--- quest 3: ---
- data: ${JSON.stringify(dataTest3)}
- expect: ${expectOutput3}
- result: ${result3}
`)
