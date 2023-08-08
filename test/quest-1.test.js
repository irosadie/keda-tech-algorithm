const bubbleSort = require('../functions/quest-1')

test('sorting array', () => {
  const dataTest = [1, 2, 4, 3, 5, 3, 2, 1]
  const sortedArray = bubbleSort(dataTest)
  expect(sortedArray).toEqual([5, 4, 3, 3, 2, 2, 1, 1])
})
