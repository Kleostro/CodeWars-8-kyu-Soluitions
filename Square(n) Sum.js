/*
 Square(n) Sum

ESCRIPTION:

Complete the square sum function so that it squares each number passed into it and then sums the results together.

SOLUTION: 
*/
function squareSum(numbers) {
  let sum = 0
  for(i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 2)
  }
  return sum
}
