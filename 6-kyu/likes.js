function likes(names = []) {
  let tam = names.length

  if (tam === 0) {
    return "no one likes this"
  }

  if (tam === 1) {
    return `${names[0]} likes this`
  }

  if (tam === 2) {
    return `${names[0]} and ${names[1]} like this`
  }

  if (tam === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }

  if (tam > 3) {
    return `${names[0]}, ${names[1]} and ${tam - 2} others like this`
  }
}
