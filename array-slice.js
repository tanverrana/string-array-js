const numbers = [3, 4, 2, 24, 13, 53, 34, 12, 45, 23, 11, 5, 17];
const numberSliced = numbers.slice(3, 9);
console.log(numberSliced);
console.log(numbers);

//splice to remove an element an array
const numberSpliced = numbers.splice(4, 1);
console.log(numberSpliced);
console.log(numbers);

//
const numberSpliced2 = numbers.splice(4, 1, 99, 112, 123, 432);
console.log(numberSpliced2);