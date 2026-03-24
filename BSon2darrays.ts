
// Find the row with maximum number of 1's


// 10

// Problem Statement: You have been given a non-empty grid ‘mat’ with 'n' rows and 'm' columns consisting of only 0s and 1s. All the rows are sorted in ascending order. Your task is to find the index of the row with the maximum number of ones. Note: If two rows have the same number of ones, consider the one with a smaller index. If there's no row with at least 1 zero, return -1

// Examples
// Example 1:
// Input Format: n = 3, m = 3, 
// mat[] = 
// 1 1 1
// 0 0 1
// 0 0 0
// Result: 0
// Explanation: The row with the maximum number of ones is 0 (0 - indexed).

// Example 2:
// Input Format: n = 2, m = 2 , 
// mat[] = 
// 0 0
// 0 0
// Result: -1
// Explanation:  The matrix does not contain any 1. So, -1 is the answer.

// function main() {
//     let max = 0;
//     let index = -1;
//     let martix = [[1, 1, 1], [0, 0, 1], [0, 0, 0]]
//     for (let i = 0; i < martix.length; i++) {
//         let temp = 0;
//         for (let j = 0; j < martix[0].length; j++) {
//             if (martix[i][j] === 1) {
//                 temp++
//                 if (temp > max) {
//                     max = temp;
//                     index = i;
//                 }

//             }
//         }
//     }
//     console.log(max, index)

// }

// main()

// function searchMatrix(matrix: number[][], target: number): boolean {
//     for (const row of matrix) {
//         let low = 0, high = row.length - 1
//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2);
//             if (row[mid] === target) {
//                 return true
//             }
//             if (row[mid] > target) {
//                 high = mid - 1;
//             }
//             if (row[mid] < target) {
//                 low = mid + 1;
//             }
//         }

//     }

//     return false

// };

// searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5)