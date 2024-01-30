//ESSENTIAL

// 1.Write a function called sumOfN that takes a number as a
// parameter and returns the sum of that number and all the numbers before it.

function sumOfN(n) {
  let result = 0;
  let i = 0;
  while (i <= n) {
    result += i;
    i++;
  }
  return result;
}

//2.Write a function called factorialOfN that takes a whole number
//as a parameter and returns the factorial of that number.

function factorialOfN(n) {
  let result = 1;
  let i = 1;
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
}

// 3.Write a function called repeatString that takes two parameters, as string and a number, and returns
//that string the number of times specified in the second parameter.

function repeatString(string, num) {
  let result = "";
  let i = 1;
  while (i <= num) {
    result = result + string;
    i = i + 1;
  }
  return result;
}

// 4.Write a function called countMinMax
//that takes two numbers as parameters and returns the range.

function countMinMax(min, max) {
  let i = 0;
  while (min < max) {
    i++;
    min++;
  }
  return i;
}

//  5.Write a function called sumMinToMax that takes two numbers as parameters and returns the sum
//between the two integers beginning at the num1 and excluding num2.

function sumMinToMax(min, max) {
  let result = 0;
  let i = min;
  while (i < max) {
    result += i;
    i++;
  }
  return result;
}

//6.Write a function called productMinToMax that takes two numbers as parameters and returns the product
//between the two integers beginning at the num1 and excluding num2.

function productMinToMax(min, max) {
  let result = min;
  let i = 1;
  while (i < max) {
    result *= i;
    i++;
  }
  return result;
}

//7.Write a function called multiplyBy10NTimes that takes two numbers as parameters and returns the first number multiplied
//by 10 the amount of times indicated by the second number.

function multiplyBy10NTimes(num, n) {
  let i = 1;
  while (i <= n) {
    num *= 10;
    i++;
  }
  return num;
}

//8.Write a function called countCharAtIndex that takes three parameters, a string, an index, and another string. This function should use the index to find the corresponding character in the first string and loop through
//the second string and count
//how many times that character occurs.

function countCharAtIndex(string1, index, string2) {
  let count = 0;
  let i = 0;
  while (i < string2.length) {
    if (string1.at(index) === string2.at(i)) {
      // if the character of string1 at index is equal to stiring2 at index of "i"

      count++;
    }
    i++;
    return count;
  }
}

// EXTENTED
// 1.Write a function called reverseString that takes a string as an input and returns that string in reverse.

function reverseString(string) {
  let reversedString = "";
  let i = string.length - 1;
  while (i >= 0) {
    reversedString += string[i];
    i--;
  }
  return reversedString;
}

// 2.Write a function called getIndexOf that takes two parameters, a string, and a character, and returns the first position of the character in that string.

function getIndex(string, char) {
  let i = 0;
  while (i <= string.length) {
    if (string[i] === char) {
      return i;
    }
    i++;
  }
  return "charachter Not found";
}

// IMMERSIVE
// 1.Write a function called sumEven that takes two numbers as parameters and returns the sum of all even numbers starting from num1 and excluding num2.

function sumEven(num1, num2) {
  let result = 0;
  let i = num1;
  while (i < num2) {
    if (i % 2 === 0) {
      result += i;
    }
    i++;
  }
  return result;
}


// 2.Write a function called primeCounter that takes a number as a parameter and returns the amount of prime numbers that occur before it.

function primeCounter(number) {
    //Write your code here 
 }  
