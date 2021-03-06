function sumFor(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function sumWhile(array) {
  let sum = 0;
  let i = 0;
  while(i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}

function sumRecursion(array, i) {
  if (i === array.length) {
    return 0;
  } else {
    return array[i] + sumRecursion(array, ++i);
  }
}

function sumTheSimpleWay(array) {
  return _.reduce(array, (memo, num) => {return memo + num}, 0);
}

const testArray = [1, 2, 3, 4, 5];
console.log(sumFor(testArray));
console.log(sumWhile(testArray));
console.log(sumRecursion(testArray, 0));
console.log(sumTheSimpleWay(testArray));

