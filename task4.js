// A.Using Anonymous Function and IIFE: 
//1. Print odd numbers in an array:

// a. Anonymous function
const printOddNumbers = function(arr) {
  return arr.filter(num => num % 2 !== 0);
};

console.log(printOddNumbers([1, 2, 3, 4, 5]));

// b. IIFE
(function(arr) {
  console.log(arr.filter(num => num % 2 !== 0));
})([1, 2, 3, 4, 5]);


//2. Convert all the strings to title caps in a string array:

// a. Anonymous function
const toTitleCaps = function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  };
  
  console.log(toTitleCaps(["hello", "world"]));
  
  // b. IIFE
  (function(arr) {
    console.log(arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()));
  })(["hello", "world"]);

//3. Sum of all numbers in an array:

// a. Anonymous function
const sumArray = function(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  };
  
  console.log(sumArray([1, 2, 3, 4, 5]));
  
  // b. IIFE
  (function(arr) {
    console.log(arr.reduce((sum, num) => sum + num, 0));
  })([1, 2, 3, 4, 5]);

  //4.Return all the prime numbers in an array:

// a. Anonymous function
const isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  const getPrimes = function(arr) {
    return arr.filter(isPrime);
  };
  
  console.log(getPrimes([1, 2, 3, 4, 5, 6, 7]));
  
  //b. IIFE
  (function(arr) {
    const isPrime = function(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    console.log(arr.filter(isPrime));
  })([1, 2, 3, 4, 5, 6, 7]);

  //5. Return all the palindromes in an array:

  //a. Anonymous function
const isPalindrome = function(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  };
  
  const getPalindromes = function(arr) {
    return arr.filter(isPalindrome);
  };
  
  console.log(getPalindromes(["madam", "hello", "racecar", "world"]));
  
  //b. IIFE
  (function(arr) {
    const isPalindrome = function(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    };
    console.log(arr.filter(isPalindrome));
  })(["madam", "hello", "racecar", "world"]);
  
  //6. Return median of two sorted arrays of the same size:

  //a. Anonymous function
const getMedian = function(arr1, arr2) {
    const combined = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = combined.length / 2;
    return (combined[mid - 1] + combined[mid]) / 2;
  };
  
  console.log(getMedian([1, 3, 5], [2, 4, 6]));
  
  //b. IIFE
  (function(arr1, arr2) {
    const combined = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = combined.length / 2;
    console.log((combined[mid - 1] + combined[mid]) / 2);
  })([1, 3, 5], [2, 4, 6]);

  //7. Return median of two sorted arrays of the same size: 

  //a. Anonymous function
const removeDuplicates = function(arr) {
    return [...new Set(arr)];
  };
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  
  //b. IIFE
  (function(arr) {
    console.log([...new Set(arr)]);
  })([1, 2, 2, 3, 4, 4, 5]);
  
 // 8. Rotate an array by k times: 

 // a. Anonymous function
const rotateArray = function(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
  };
  
  console.log(rotateArray([1, 2, 3, 4, 5], 2));
  
  // b. IIFE
  (function(arr, k) {
    k = k % arr.length;
    console.log(arr.slice(-k).concat(arr.slice(0, -k)));
  })([1, 2, 3, 4, 5], 2);


// B.Using Arrow Function:

// 1. Print odd numbers in an array: 
const printoddnumbers = (arr) => arr.filter(num => num % 2 !== 0);

console.log(printOddNumbers([1, 2, 3, 4, 5]));

// 2. Convert all the strings to title caps in a string array: 
const totitleCaps = (arr) => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

console.log(toTitleCaps(["hello", "world"]));

// 3. Sum of all numbers in an array:
const sumarray = (arr) => arr.reduce((sum, num) => sum + num, 0);

console.log(sumArray([1, 2, 3, 4, 5]));

// 4. Return all the prime numbers in an array: 
const isprime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  const getprimes = (arr) => arr.filter(isPrime);
  
  console.log(getPrimes([1, 2, 3, 4, 5, 6, 7]));

// 5. Return all the palindromes in an array: 
const ispalindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  };
  
  const getpalindromes = (arr) => arr.filter(isPalindrome);
  
  console.log(getPalindromes(["madam", "hello", "racecar", "world"]));
  

  

  
  

