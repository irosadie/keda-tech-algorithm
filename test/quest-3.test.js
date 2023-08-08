const recursive = require('../functions/quest-3')

test('count even number in object', () => {
  const dataTest = {
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
  const sortedArray = recursive(dataTest)
  expect(sortedArray).toEqual(6)
})
