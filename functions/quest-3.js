const recursive = (data, total = 0) => {
  
  for (let i in data) {
    if (typeof data[i]==='number' && data[i] % 2===0) {
      total += data[i]
    }

    if (typeof data[i] === 'object') {
      total = recursive(data[i], total)
    }
  }

  return total
}

module.exports = recursive
