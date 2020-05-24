// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(num) {
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    counter += i;
  }
  return counter;
}
// console.log(sigma(5))

// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
// console.log(factorial(5))

// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
function feb(arr, num) {
  let num1 = arr[0];
  let num2 = arr[1];
  let next;
  for(let i=0;i<=num;i++) {
    next = num1 + num2;
    num1 = num2
    num2 = next
    arr.push(next)
  }
  return arr.join(" ");
}
// console.log(feb([0,1],8))

//Fibonacci with recursion
function febRec(arr, len) {
  if(arr.length >= len) return arr;
  arr.push(arr[arr.length-2] + arr[arr.length-1]);
  return febRec(arr, len);
}
// console.log(febRec([0,1], 10))


// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function secondToLast(arr) {
  if (arr[arr.length - 2] === undefined) {
    return null;
  } else {
    return arr[arr.length - 2]
  }
}
// console.log(secondToLast([42, true, 4, "Liam", 7]))

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function nthToLast(arr, num) {
  if (arr[arr.length - num] === undefined) {
    return null;
  } else {
    return arr[arr.length - num];
  }
}
// console.log(nthToLast([5,2,3,6,4,9,7],3))

// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function secondLargest(arr) {
  let secLast = arr[arr.length - 2];
  let firstLast = arr[arr.length - 1];
  if(firstLast && secLast === undefined) {
    return null;
  } else if (secLast > firstLast) {
    return secLast;
  } else {
    return firstLast;
  }
}
// console.log(secondLargest([42,1,4,3.14,7]));

// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function doubleTrouble(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i], arr[i])
  }
  return result;
}
console.log(doubleTrouble([4, "Ulysses", 42, false]))