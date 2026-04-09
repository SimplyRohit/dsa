// Generate all binary strings

// 13

// Problem Statement: Given an integer n, return all binary strings of length n that do not contain consecutive 1s. Return the result in lexicographically increasing order.

// A binary string is a string consisting only of characters '0' and '1'.

// Examples
// Example 1:
// Input:
//  n = 3
// Output:
//  ["000", "001", "010", "100", "101"]
// Explanation:
//  All binary strings of length 3 that do not contain consecutive 1s.

// Example 2:
// Input:
//  n = 2
// Output:
//  ["00", "01", "10"]
// Explanation:
//  All binary strings of length 2 that do not contain consecutive 1s.

// function main() {
//   let n = 2;
// }
// main();

// function generateParenthesis(n: number): string[] {
//   let result: string[] = [];

//   function genp(str: string, open: number, close: number) {
//     // base case
//     if (str.length === 2 * n) {
//       result.push(str);
//       return;
//     }

//     // add '('
//     if (open < n) {
//       genp(str + "(", open + 1, close);
//     }

//     // add ')'
//     if (close < open) {
//       genp(str + ")", open, close + 1);
//     }
//   }

//   genp("", 0, 0);
//   return result;
// }

// console.log(generateParenthesis(3));

// // Solution class to generate all subsequences using recursion
// class Solution {
//     // Helper recursive method to generate subsequences
//     helper(s, index, current, result) {
//         // Base case: if index reaches string length, add current subsequence to result
//         if (index === s.length) {
//             result.push(current.join(''));
//             return;
//         }

//         // Exclude current character and recurse
//         this.helper(s, index + 1, current, result);

//         // Include current character and recurse
//         current.push(s[index]);
//         this.helper(s, index + 1, current, result);

//         // Backtrack by removing last character
//         current.pop();
//     }

//     // Method to return all subsequences of string s
//     getSubsequences(s) {
//         // Array to store all subsequences
//         const result = [];

//         // Array to store current subsequence characters
//         const current = [];

//         // Start recursion from index 0
//         this.helper(s, 0, current, result);

//         // Return array of subsequences
//         return result;
//     }
// }

// // Driver code
// const s = "abc";

// // Create Solution object
// const sol = new Solution();

// // Get all subsequences
// const subsequences = sol.getSubsequences(s);

// // Print all subsequences
// subsequences.forEach(subseq => {
//     console.log(`"${subseq}"`);
// });

// let finalarray = [];

// function findsubq(array, k, sum, index, newarray) {
//   if (index === array.length) {
//     if (sum === k) {
//       finalarray.push(newarray);
//       console.log(finalarray);
//     }
//     return;
//   }
//   newarray.push(array[index]);
//   findsubq(array, k, (sum += array[index]), index + 1, newarray);
//   newarray.pop();
//   sum -= array[index];
//   findsubq(array, k, sum, index + 1, newarray);
// }

// function main() {
//   let sum = 0;
//   let k = 7;
//   let array = [2, 3, 6, 7];
//   let index = 0;
//   let newarray = [];
//   findsubq(array, k, sum, index, newarray);
// }
// main();

// class Solution {
//   // Function to find all combinations recursively
//   findCombination(ind, target, arr, ans, ds) {
//     // Base case: if we have considered all elements in the array
//     if (ind === arr.length) {
//       // If the target is zero, we have found a valid combination
//       if (target === 0) {
//         ans.push([...ds]); // Add the current combination to the result
//       }
//       return;
//     }

//     // Recursive case: pick the element if it's less than or equal to the target
//     if (arr[ind] <= target) {
//       ds.push(arr[ind]); // Add the current element to the combination
//       this.findCombination(ind, target - arr[ind], arr, ans, ds); // Continue with the same index to allow repeated elements
//       ds.pop(); // Backtrack by removing the last added element
//     }

//     // Skip the current element and move to the next index
//     this.findCombination(ind + 1, target, arr, ans, ds);
//   }

//   // Main function to get all combinations
//   combinationSum(candidates, target) {
//     const ans = []; // To store the result
//     const ds = []; // To store a current combination
//     this.findCombination(0, target, candidates, ans, ds); // Start the recursive search
//     return ans; // Return all valid combinations
//   }
// }

// // Driver code
// const obj = new Solution();
// const v = [2, 3, 6, 7]; // Candidate numbers
// const target = 7; // Target sum

// // Get all combinations
// const ans = obj.combinationSum(v, target);

// // Output the combinations
// console.log("Combinations are: ");
// ans.forEach((combination) => {
//   console.log(combination.join(" ")); // Print each element of the combination
// });

// function isValid(board, row, col, c) {
//   for (let i = 0; i < 9; i++) {
//     if (board[i][col] === c) {
//       return false;
//     }
//   }

//   for (let j = 0; j < 9; j++) {
//     if (board[row][j] === c) {
//       return false;
//     }
//   }

//   const boxRowStart = 3 * Math.floor(row / 3);
//   const boxColStart = 3 * Math.floor(col / 3);
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (board[boxRowStart + i][boxColStart + j] === c) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// function solve(board) {
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       if (board[i][j] === ".") {
//         for (let c = 1; c <= 9; c++) {
//           let charC = c.toString();
//           if (isValid(board, i, j, charC)) {
//             board[i][j] = charC;
//             if (solve(board)) {
//               return true;
//             }
//             board[i][j] = ".";
//           }
//         }
//         return false;
//       }
//     }
//   }
//   return true;
// }

// function main() {
//   let board = [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ];
//   console.log(solve(board));
// }
// main();
