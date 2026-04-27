// // Function to return precedence of operators
// function prec(c) {
//   if (c === "^")
//     // Exponent operator has highest precedence
//     return 3;
//   else if (c === "/" || c === "*")
//     // Multiplication and division have higher precedence than addition
//     return 2;
//   else if (c === "+" || c === "-")
//     // Addition and subtraction have lowest precedence
//     return 1;
//   else return -1;
// }

// // Function to convert infix expression to postfix expression
// function infixToPostfix(s) {
//   let stack = []; // Stack to hold operators and parentheses
//   let result = ""; // String to hold the resulting postfix expression

//   for (let c of s) {
//     if (/[a-zA-Z0-9]/.test(c)) {
//       result += c;
//     } else if (c === "(") {
//       stack.push("(");
//     } else if (c === ")") {
//       while (stack.length > 0 && stack[stack.length - 1] !== "(") {
//         result += stack.pop();
//       }
//       stack.pop();
//     } else {
//       while (stack.length > 0 && prec(c) <= prec(stack[stack.length - 1])) {
//         result += stack.pop();
//       }
//       stack.push(c);
//     }
//   }

//   while (stack.length > 0) {
//     result += stack.pop();
//   }

//   console.log(`Postfix expression: ${result}`);
// }

// function main() {
//   let exp = "(p+q)*(m-n)";
//   console.log(`Infix expression: ${exp}`);
//   infixToPostfix(exp); // Convert the infix expression to postfix
// }

// // Call the main function
// main();

// function getPri(c: string) {
//   if (c === "^") return 3;
//   else if (c === "/" || c === "*") return 2;
//   else if (c === "+" || c === "-") return 1;
//   else return -1;
// }

// function inftopost() {
//   let result = "";
//   let stack = [];
//   let string = "(p+q)*(m-n)";
//   for (let c of string) {
//     if (/[a-zA-Z0-9]/.test(c)) {
//       result += c;
//     } else if (c === "(") {
//       stack.push(c);
//     } else if (c === ")") {
//       while (stack.length > 0 && stack[stack.length - 1] !== "(") {
//         result += stack.pop();
//       }
//       stack.pop();
//     } else {
//       while (stack.length > 0 && getPri(c) <= getPri(stack[stack.length - 1])) {
//         result += stack.pop();
//       }
//       stack.push(c);
//     }
//   }
//   while (stack.length > 0) {
//     result += stack.pop();
//   }
//   console.log(result);
// }
// inftopost();

// function getPri(c: string) {
//   if (c === "^") return 3;
//   else if (c === "/" || c === "*") return 2;
//   else if (c === "+" || c === "-") return 1;
//   else return -1;
// }

// function inftopre() {
//   let result = "";
//   let stack = [];
//   let string = "a+b";
//   string = string.split("").reverse().join("");
//   string = string
//     .replace(/\(/g, "temp")
//     .replace(/\)/g, "(")
//     .replace(/temp/g, ")");
//   for (let c of string) {
//     if (/[a-zA-Z0-9]/.test(c)) {
//       result += c;
//     } else if (c === "(") {
//       stack.push(c);
//     } else if (c === ")") {
//       while (stack.length > 0 && stack[stack.length - 1] !== "(") {
//         result += stack.pop();
//       }
//       stack.pop();
//     } else {
//       while (stack.length > 0 && getPri(c) <= getPri(stack[stack.length - 1])) {
//         result += stack.pop();
//       }
//       stack.push(c);
//     }
//   }
//   while (stack.length > 0) {
//     result += stack.pop();
//   }
//   console.log(result.split("").reverse().join(""));
// }
// inftopre();

// Function to convert postfix to infix

// function postfixToInfix(postfix) {
//   let stack = [];
//   for (let i = 0; i < postfix.length; i++) {
//     let c = postfix[i];

//     if (/[a-zA-Z0-9]/.test(c)) {
//       stack.push(c);
//     } else {
//       let op2 = stack.pop();
//       let op1 = stack.pop();

//       stack.push(`(${op1}${c}${op2})`);
//     }
//   }

//   return stack[0];
// }

// function main() {
//   let postfix = "AB*C+";
//   console.log("Infix Expression:", postfixToInfix(postfix));
// }

// main();

// Function to convert postfix to prefix

// function postfixToPrefix(postfix) {
//   let stack = [];

//   for (let i = 0; i < postfix.length; i++) {
//     let c = postfix[i];

//     if (/[a-zA-Z0-9]/.test(c)) {
//       stack.push(c);
//     } else {
//       let op2 = stack.pop();
//       let op1 = stack.pop();

//       stack.push(c + op1 + op2);
//     }
//   }

//   return stack[0];
// }

// function main() {
//   let postfix = "ABC/-AK/L-*";
//   console.log("Prefix Expression:", postfixToPrefix(postfix));
// }

// main();

// Function to convert prefix to infix
// function prefixToInfix(prefix) {
//   let stack = [];

//   // Traverse the prefix expression from right to left
//   for (let i = prefix.length - 1; i >= 0; i--) {
//     let c = prefix[i];

//     // If the character is an operand, push it to the stack
//     if (/[a-zA-Z0-9]/.test(c)) {
//       stack.push(c);
//     } else {
//       // Pop two operands from the stack
//       let op1 = stack.pop();
//       let op2 = stack.pop();

//       // Form the new infix expression and push back to stack
//       stack.push(`(${op1}${c}${op2})`);
//     }
//   }

//   // The final element in the stack is the result
//   return stack[0];
// }

// // Main function for testing
// function main() {
//   let prefix = "*-A/BC-/AKL";
//   console.log("Infix Expression:", prefixToInfix(prefix));
// }

// main();

// Function to convert prefix to postfix
// function prefixToPostfix(prefix) {
//   let stack = [];

//   for (let i = prefix.length - 1; i >= 0; i--) {
//     let c = prefix[i];

//     if (/[a-zA-Z0-9]/.test(c)) {
//       stack.push(c);
//     } else {
//       let op1 = stack.pop();
//       let op2 = stack.pop();

//       stack.push(op1 + op2 + c);
//     }
//   }

//   return stack[0];
// }

// // Main function for testing
// function main() {
//   let prefix = "*-A/BC-/AKL";
//   console.log("Postfix Expression:", prefixToPostfix(prefix));
// }

// main();
