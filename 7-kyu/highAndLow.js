function highAndLow(numbers) {
  let numbersArray = numbers.split(' ')

  return `${Math.max(...numbersArray)} ${Math.min(...numbersArray)}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))