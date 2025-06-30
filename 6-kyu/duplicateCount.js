function duplicateCount(text) {
  let count = 0

  let listCharacter = text.toLowerCase().split('')

  let listCharacterOrder = listCharacter.sort()

  let groupedCharacters = listCharacterOrder.reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = []
    }

    acc[char].push(char)
    return acc
  }, {})

  let values = Object.values(groupedCharacters)

  for (let i = 0; i < values.length; i++) {
    if (values[i].length > 1) {
      count++
    }
  }

  return count
}

console.log(duplicateCount("ABBA"))