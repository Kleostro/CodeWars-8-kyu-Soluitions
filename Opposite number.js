/*
Even or Odd

ESCRIPTION:

Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34

SOLUTION: 
*/

const opposite = (number) => number > 0 ? -number : Math.abs(number);
