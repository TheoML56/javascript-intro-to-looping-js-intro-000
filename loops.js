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

function doWhileLoop(array) {
    function incrementVariable() {
    i = i + 1
    return i
  }
  do {
		console.log('array.length = ' + array.length + ' and i = ' + i);
		array = array.slice(1);
		incrementVariable();
	} while (array.length > 0 && i < 5);

	return array;
}
