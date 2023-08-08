const sleedingWindow = require('../functions/quest-2')

test('max sub array #1', () => {
  const dataTest = [100, 200, 300, 400]
  const k = 2
  const sortedArray = sleedingWindow(dataTest, k)
  expect(sortedArray).toEqual(700)
})

test('max sub array #2', () => {
  const dataTest = [1, 4, 2, 10, 23, 3, 1, 0, 20]
  const k = 4
  const sortedArray = sleedingWindow(dataTest, k)
  expect(sortedArray).toEqual(39)
})

test('max sub array #3', () => {
  const dataTest = [-3, 4, 0, -2, 6, -1]
  const k = 2
  const sortedArray = sleedingWindow(dataTest, k)
  expect(sortedArray).toEqual(5)
})
