// const INT_MIN = -2147483648;
// const INT_MAX = 2147483647;

// function helper(s, i, num, sign) {
//   if (i >= s.length || isNaN(Number(s[i]))) return sign * num;
//   num = num * 10 + Number(s[i]);
//   if (sign * num <= INT_MIN) return INT_MIN;
//   if (sign * num >= INT_MAX) return INT_MAX;
//   return helper(s, i + 1, num, sign);
// }

// function myAtoi(s) {
//   let i = 0;
//   while (i < s.length && s[i] === " ") i++;
//   let sign = 1;
//   if (i < s.length && (s[i] === "+" || s[i] === "-")) {
//     sign = s[i] === "-" ? -1 : 1;
//     i++;
//   }
//   return helper(s, i, 0, sign);
// }

// function main() {
//   let s = "   -12345";
//   console.log(myAtoi(s));
// }
// main();

// function power(x: number, n: number): number {}

// function myPow(x: number, n: number): number {
//   if (n < 0) {
//     return power(x )
//   }
//   return x;
// }

// myPow(2, 100.1);

// function countGoodNumbers(n: number): number {
//   let evendigits = [0, 2, 4, 6, 8];
//   for (let evendigit of evendigits) {
//     console.log(evendigit);
//   }
// }

// countGoodNumbers();

// function insert(stack, temp) {
//   // Base case: if the stack is empty or temp is larger than the top element
//   if (stack.length === 0 || stack[stack.length - 1] <= temp) {
//     stack.push(temp);
//     console.log(stack);
//     return;
//   }

//   // Pop the top element and recursively insert
//   let val = stack.pop();
//   console.log(val);

//   insert(stack, temp);

//   // Push the popped element back
//   stack.push(val);
//   console.log(stack);
// }

// function sortStack(stack) {
//   if (stack.length > 0) {
//     let temp = stack.pop();
//     console.log(stack, temp);
//     sortStack(stack);
//     insert(stack, temp);
//   }
// }

// // Main function
// let stack = [4, 1, 3, 2];
// sortStack(stack);

// // Print the sorted stack
// console.log("Sorted stack (descending order):", stack);

// Function to insert element at the bottom of the stack
// function insertAtBottom(stack, val) {
//   // If stack is empty, push the value
//   if (stack.length === 0) {
//     stack.push(val);
//     return;
//   }

//   // Pop the top element
//   let topVal = stack.pop();

//   // Recurse for the rest of the stack
//   insertAtBottom(stack, val);

//   // Push the popped element back
//   stack.push(topVal);
// }

// // Function to reverse the stack
// function reverseStack(stack) {
//   // Base case: If stack is empty, return
//   if (stack.length === 0) return;

//   // Pop the top element
//   let topVal = stack.pop();

//   // Recursively reverse the remaining stack
//   reverseStack(stack);

//   // Insert the popped element at the bottom
//   console.log(stack, topVal);
//   insertAtBottom(stack, topVal);
// }

// function main() {
//   // Create a sample stack
//   let stack = [4, 1, 3, 2];

//   // Reverse the stack
//   reverseStack(stack);

//   // Print the reversed stack
//   console.log("Reversed Stack:", stack);
// }

// main();
