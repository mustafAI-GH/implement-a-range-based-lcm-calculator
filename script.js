function smallestCommons(arr) {
  
  let min = arr[0];
  let max = arr[1];

  if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }

  let multiple = max;

  while (true) {

    let ok = true;

    for (let i = min; i <= max; i++) {
      if (multiple % i !== 0) {
        ok = false;
        break;
      }
    }

    if (ok === true) {
      return multiple;
    }

    multiple++
  }
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
