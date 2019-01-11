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
   var kittens2 = [...kittens,name]
}

function prependKitten(name) {
   var kittens3 = [name,...kittens]
}

function removeLastKitten() {
   var kittens4 = Array.new
   kittens4 = kittens.slice(0,kittens.length-1)
}

function removeFirstKitten() {
  var kittens5 = Array.new
  kittens5 = kittens.slice(1,kittens.length)
}