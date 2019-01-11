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
  return kittens2 = [...kittens,name]
}

function prependKitten(name) {
  return kittens3 = [name,...kittens]
}

function removeLastKitten() {
  kittens.slice(0,kittens.length-1)
}

function removeFirstKitten() {
  kittens.slice(1,kittens.length)
}