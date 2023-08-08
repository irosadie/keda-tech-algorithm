const bubbleSort = (arrayData) => {
  sweep = true

  while (sweep) {
    sweep = false

    for (let i = 0; i < arrayData.length - 1; i++) {
      
      if (arrayData[i] < arrayData[i + 1]) {
        [arrayData[i], arrayData[i + 1]] = [arrayData[i + 1], arrayData[i]]
        sweep = true
      }
    }
  }

  return arrayData
}

module.exports = bubbleSort
