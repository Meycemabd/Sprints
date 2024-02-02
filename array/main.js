// Exercises
// Arrays || W3.D3.01
// ESSENTIAL

// 1.Write a function called arrayFor that takes an array as a parameter, loops through all the elements using For Loop and prints all elements of the array in the console using console.log.

function arrayFor(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

// 2.Write a function called arrayWhile that takes an array as a parameter, loops through all the elements using While Loop and prints all elements of the array in the console using console.log.

function arrayWhile(array) {
  let index = 0;
  while (index <= array.length) {
    console.log(array[index]);
    index++;
  }
}

// 3.Write a function called sum that takes an array of numbers as a parameter and returns the sum of the numbers in the array.

function sum(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

// Write a function called sumEveryOther that takes an array of numbers as a parameter and returns the summation of every other number starting from the beginning of the array.

let sumEveryOther = (array) => {
  let result = 0;
  for (let index = 0; index < array.length; index++) {
    result += array[index];
  }
  return result;
};

// 5.Write a function called sumStartAt that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the inputted index, until the end of the array.

let sumStartAt = (array, index) => {
  let sum = 0;
  for (let i = index; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

// 6.Write a function called sumUntil that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the index 0, until the index parameter.

function sumUntil(array, index) {
  let sum = 0;
  for (let i = 0; i <= index; i++) {
    sum += array[i];
  }
  return sum;
}

// 7.Write a function called subtractReverse that takes an array of numbers as a parameter and returns the subtraction of every number beginning at the last element of the input array and ending at the first element of the input array (in reverse).

let subtractReverse2 = (array) => {
  let sub = 0;
  let arr = array.reverse();
  for (let i = arr.length - 1; i >= 0; i--) {
    sub -= array[i];
  }
  return sub;
};

// 8.Write a function called product that takes an array as a parameter and returns the product of all the elements in the array.

function product(array) {
  let result = 1;
  for (let i = 1; i < array.length; i++) {
    result *= array[i];
  }
  return result;
}

// 9.Write a function called average that takes an array as a parameter and returns the average of all the elements in the array.

function average(array) {
  let result = 0
  for(let i = 0; i < array.length; i++){
    result += array[i] / array.length
  } 
  return result
}  

// 10.Write a function called square that takes an array as a parameter and returns a new array where each element is the square of the element of the given array.

function square(array) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let squared = Math.pow(array[i],2)
    result.push(squared) 

  } 
  return result
}

// 11.Write a function called isArray that takes one parameter and returns true if the input is array otherwise returns false.

function isArray(array) {
  
    if (typeof array === "object"){
      return true
    } else {
      return false
    }
  }

// another Version
function isArray1 (array){
  return Array.isArray(array)
}  

// EXTENTED

// 1.Write a function called min that takes an array as a parameter and returns the smallest number from the array.

function min(array) {
  let mini = Math.min(...array) 
  return mini 
}

// 2.Write a function called max that takes an array as a parameter and returns the largest number from the array.

function max(array) {
  let maxi = Math.max(...array)
  return maxi
}  

// 3.Write a function called shortestString that takes an array of strings as a parameter and returns the length of the shortest string in the given array.

let shortestString = (array) => {
  let shortest = array.reduce(function(a, b) {
    return a.length < b.length ? a : b;
  });
  return shortest
  }


// 4.Write a function called longestString that takes an array of strings as a parameter and returns the length of the longest string in the given array.

let longestString = (array) => {
  let longest = array.reduce(function(a, b) {
    return a.length > b.length ? a : b;
  });
  return longest
  }


  // 5.Write a function called shortestLongest that takes an array of strings as a parameter and returns a new array with the shortest and the longest string in the array.