/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

const num1 = 10;
const num2 = 10;
// if (num1 > num2) {
//     const mul = num1 * 2;
//     console.log(mul);
// }

// else if (num2 > num1) {
//     const sum = num1 + num2;
//     console.log(sum);
// }

(num1 > num2) ? console.log(num1 * num1) : (num2 > num1) ? console.log(num1 + num2) : console.log(num1, num2);