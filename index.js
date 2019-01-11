var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
   kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  return var kittens2 = [...kittens,name]
}

function prependKitten(name) {
  return var kittens3 = [name,...kittens]
}

function removeLastKitten() {
  return var kittens4 = kittens.slice(0,kittens.length-1)
}

function removeFirstKitten() {
 return var kittens5 = kittens.slice(1,kittens.length)
}