let number = function (busStops) {
  let entries = 0
  let exits = 0
  let result = 0

  for (let i = 0; i < busStops.length; i++) {
    entries += busStops[i][0]
    exits += busStops[i][1]
  }

  result = entries - exits

  return result > 0 ? result : 0
}
