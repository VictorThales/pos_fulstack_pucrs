const array = [1, 2, 3, 4, 5];

// 1. push: adds one or more elements to the end of the array
array.push(6);
console.log(array); // Output: [1, 2, 3, 4, 5, 6]

// 2. pop: removes the last element from the array
const poppedElement = array.pop();
console.log(poppedElement); // Output: 6
console.log(array); // Output: [1, 2, 3, 4, 5]

// 3. shift: removes the first element from the array
const shiftedElement = array.shift();
console.log(shiftedElement); // Output: 1
console.log(array); // Output: [2, 3, 4, 5]

// 4. unshift: adds one or more elements to the beginning of the array
array.unshift(0, 1);
console.log(array); // Output: [0, 1, 2, 3, 4, 5]

// 5. concat: combines two or more arrays
const array2 = [6, 7, 8];
const concatenatedArray = array.concat(array2);
console.log(concatenatedArray); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8]

// 6. slice: returns a copy of a portion of the array based on the provided indices
const slicedArray = array.slice(2, 5);
console.log(slicedArray); // Output: [2, 3, 4]

// 7. splice: changes the contents of an array by removing, replacing, or adding elements
const removedElements = array.splice(2, 2, 'a', 'b', 'c');
console.log(removedElements); // Output: [2, 3]
console.log(array); // Output: [0, 1, 'a', 'b', 'c', 4, 5]

// 8. forEach: executes a function on each element of the array
array.forEach(element => {
  console.log(element); // Output: 0, 1, 'a', 'b', 'c', 4, 5
});

// 9. map: creates a new array based on a function applied to each element of the array
const mappedArray = array.map(element => element * 2);
console.log(mappedArray); // Output: [0, 2, NaN, NaN, NaN, 8, 10]

// 10. filter: creates a new array with all elements that pass a test
const filteredArray = array.filter(element => typeof element === 'number');
console.log(filteredArray); // Output: [0, 1, 4, 5]

// 11. reduce: applies a function to an accumulator and each element of the array (from left to right) to reduce them to a single value
const reducedValue = array.reduce((accumulator, element) => accumulator + element, 0);
console.log(reducedValue); // Output: 11

// 12. find: returns the first element in the array that satisfies a condition
const foundElement = array.find(element => element === 'a');
console.log(foundElement); // Output: 'a'

// 13. findIndex: returns the index of the first element in the array that satisfies a condition
const foundIndex = array.findIndex(element => element === 'a');
console.log(foundIndex); // Output: 2

// 14. every: checks if all elements in the array pass a test
const everyResult = array.every(element => typeof element === 'number');
console.log(everyResult); // Output: false

// 15. some: checks if at least one element in the array passes a test
const someResult = array.some(element => typeof element === 'number');
console.log(someResult); // Output: true

// 16. includes: checks if an element is present in the array
const includesResult = array.includes('b');
console.log(includesResult); // Output: true

// 17. indexOf: returns the first index at which an element can be found in the array
const indexOfResult = array.indexOf('c');
console.log(indexOfResult); // Output: 4

// 18. lastIndexOf: returns the last index at which an element can be found in the array
const lastIndexOfResult = array.lastIndexOf(1);
console.log(lastIndexOfResult); // Output: 1

// 19. reverse: reverses the order of the elements in the array
array.reverse();
console.log(array); // Output: [5, 4, 'c', 'b', 'a', 1, 0]

// 20. sort: sorts the elements of the array in alphabetical or numerical order
array.sort();
console.log(array); // Output: [0, 1, 4, 5, 'a', 'b', 'c']
