function forLoop(array) {
  for (var i = 0; i < 25; i += 1) {
    if (i === 1) {
      array.push(`I am ${i} strange loop.`)
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(i) {
    function incrementVariable() {
    i = i + 1
    return i
  }
  do {
    console.log("I run once regardless")
    console.log(--i)
  }
 while (incrementVariable() > 0)
}
