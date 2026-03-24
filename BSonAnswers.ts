//1. // Finding Sqrt of a number using Binary Search
// Problem Statement: You are given a positive integer n. Your task is to find and return its square root. If ‘n’ is not a perfect square, then return the floor value of sqrt(n).

// Examples
// Input: N = 36
// Output: 6
// Explanation: Square root of 36 is 6. 
// Input: N = 28
// Output: 5
// Explanation: Square root of 28 is approximately 5.292. So, the floor value will be 5. 



// Optimal approch

// class Solution {
//     // Function to find floor of square root using linear search
//     floorSqrt(n: number) {
//         // Variable to store answer
//         let ans = 0;

//         // Run loop from 1 to n
//         for (let i = 1; i <= n; i++) {
//             // Check if i*i <= n
//             if (i * i <= n) {
//                 // Update answer
//                 ans = i;
//             } else {
//                 // Break when i*i > n
//                 break;
//             }
//         }
//         // Return final answer
//         return ans;
//     }
// }

// // Example input
// let n = 27;

// // Create object of Solution
// let sol = new Solution();

// // Call function and print result
// console.log(sol.floorSqrt(n));





//2. // Nth Root of a Number using Binary Search


// 10

// Problem Statement: Given two numbers N and M, find the Nth root of M. The nth root of a number M is defined as a number X when raised to the power N equals M. If the 'nth root is not an integer, return -1.

// Examples
// Input: N = 3, M = 27
// Output: 3
// Explanation: The cube root of 27 is equal to 3.
// Input : N = 4, M = 69
// Output: -1
// Explanation : The 4th root of 69 does not exist. So, the answer is -1.

// class Solution {
//     // Function to find N-th root of M using binary search
//     nthRoot(n, m) {
//         // Set low and high for binary search
//         let low = 1, high = m;

//         // Start binary search
//         while (low <= high) {
//             // Calculate mid
//             let mid = Math.floor((low + high) / 2);

//             // Store result of mid^n
//             let ans = 1;
//             for (let i = 0; i < n; i++) {
//                 ans *= mid;
//                 if (ans > m) break;
//             }

//             // If mid^n equals m
//             if (ans === m) return mid;

//             // If mid^n is less than m
//             if (ans < m) low = mid + 1;

//             // If mid^n is more than m
//             else high = mid - 1;
//         }

//         // Return -1 if not found
//         return -1;
//     }
// }

// // Driver code
// const obj = new Solution();
// const result = obj.nthRoot(3, 27);




// Koko Eating Bananas


// 12

// Problem Statement: A monkey Koko is given ‘n’ piles of bananas, whereas the 'ith' pile has ‘a[i]’ bananas.An integer ‘h’ is also given, which denotes the time(in hours) for all the bananas to be eaten.

// Each hour, the monkey chooses a non - empty pile of bananas and eats ‘k’ bananas.If the pile contains less than ‘k’ bananas, then the monkey consumes all the bananas and won’t eat any more bananas in that hour.

// Find the minimum number of bananas ‘k’ to eat per hour so that the monkey can eat all the bananas within ‘h’ hours.

//     Examples
// Input: N = 4, a[] = { 7, 15, 6, 3}, h = 8
// Output: 5
// Explanation:  If Koko eats 5 bananas / hr, he will take 2, 3, 2, and 1 hour to eat the piles accordingly.So, he will take 8 hours to complete all the piles.
//     Input: N = 5, a[] = { 25, 12, 8, 14, 19}, h = 5
// Output: 25
// Explanation: If Koko eats 25 bananas / hr, he will take 1, 1, 1, 1, and 1 hour to eat the piles accordingly. 




// class Solution {
//     // Function to calculate total hours at given speed
//     calculateTotalHours(piles, speed) {
//         let totalH = 0;
//         for (let bananas of piles) {
//             totalH += Math.ceil(bananas / speed);
//         }
//         return totalH;
//     }

//     // Function to find minimum eating speed
//     minEatingSpeed(piles, h) {
//         // Find maximum element
//         let maxPile = Math.max(...piles);

//         // Initialize low and high pointers
//         let low = 1, high = maxPile;
//         let ans = maxPile;

//         // Binary search on answer space
//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2);
//             let totalH = this.calculateTotalHours(piles, mid);

//             // If possible, try smaller speed
//             if (totalH <= h) {
//                 ans = mid;
//                 high = mid - 1;
//             }
//             // Otherwise, try larger speed
//             else {
//                 low = mid + 1;
//             }
//         }
//         return ans;
//     }
// }

// // Driver code
// let piles = [3, 6, 7, 11];
// let h = 8;
// let obj = new Solution();
// console.log(obj.minEatingSpeed(piles, h));



// Minimum days to make M bouquets


// 12

// Problem Statement: You are given 'N’ roses and you are also given an array 'arr' where 'arr[i]' denotes that the 'ith' rose will bloom on the 'arr[i]th' day. You can only pick already bloomed roses that are adjacent to make a bouquet. You are also told that you require exactly 'k' adjacent bloomed roses to make a single bouquet. Find the minimum number of days required to make at least ‘m' bouquets each containing 'k' roses. Return -1 if it is not possible.

// Examples
// Example 1:
// Input Format: N = 8, arr[] = {7, 7, 7, 7, 13, 11, 12, 7}, m = 2, k = 3
// Result: 12
// Explanation: On the 12th the first 4 flowers and the last 3 flowers would have already bloomed. So, we can easily make 2 bouquets, one with the first 3 and another with the last 3 flowers.

// Example 2:
// Input Format: N = 5, arr[] = {1, 10, 3, 10, 2}, m = 3, k = 2
// Result: -1
// Explanation: If we want to make 3 bouquets of 2 flowers each, we need at least 6 flowers. But we are given only 5 flowers, so, we cannot make the bouquets.




// Aggressive Cows : Detailed Solution


// 14

// Problem Statement: You are given an array 'arr' of size 'n' which denotes the position of stalls. You are also given an integer 'k' which denotes the number of aggressive cows.
// You are given the task of assigning stalls to 'k' cows such that the minimum distance between any two of them is the maximum possible. Find the maximum possible minimum distance.

// Examples
// Example 1:
// Input Format:
//  N = 6, k = 4, arr[] = {0,3,4,7,10,9}
// Result:
//  3
// Explanation:
//  The maximum possible minimum distance between any two cows will be 3 when 4 cows are placed at positions {0, 3, 7, 10}. Here the distances between cows are 3, 4, and 3 respectively. We cannot make the minimum distance greater than 3 in any ways.

// Example 2:
// Input Format:
//  N = 5, k = 2, arr[] = {4,2,1,3,6}
// Result:
//  5
// Explanation:
//  The maximum possible minimum distance between any two cows will be 5 when 2 cows are placed at positions {1, 6}.


// function findDistance(arr, mid, k) {
//     let pointer = arr[0];
//     let count = 1; // first cow placed

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] - pointer >= mid) {
//             count++;
//             pointer = arr[i];
//         }
//     }

//     return count;
// }

// function main() {
//     let k = 2, arr = [4, 2, 1, 3, 6];

//     arr.sort((a, b) => a - b);

//     let low = 1;
//     let high = arr[arr.length - 1] - arr[0];
//     let ans = 0;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         let tempk = findDistance(arr, mid, k);

//         if (tempk >= k) {
//             ans = mid;        // valid
//             low = mid + 1;    // try bigger
//         } else {
//             high = mid - 1;   // reduce
//         }
//     }

//     console.log(ans);
// }

// main();




// Track
// Command Palette
// Search for a command to run...

// Blog
// Discussion
// Painter's Partition Problem


// 12

// Problem Statement: Given an array/list of length ‘N’, where the array/list represents the boards and each element of the given array/list represents the length of each board. Some ‘K’ numbers of painters are available to paint these boards. Consider that each unit of a board takes 1 unit of time to paint. You are supposed to return the area of the minimum time to get this job done of painting all the ‘N’ boards under the constraint that any painter will only paint the continuous sections of boards.

// Examples
// Example 1:
// Input Format: N = 4, boards[] = {5, 5, 5, 5}, k = 2
// Result: 10
// Explanation: We can divide the boards into 2 equal-sized partitions, so each painter gets 10 units of the board and the total time taken is 10.

// Example 2:
// Input Format: N = 4, boards[] = {10, 20, 30, 40}, k = 2
// Result: 60
// Explanation: We can divide the first 3 boards for one painter and the last board for the second painter.





// function main() {
//     let boards = [5, 5, 5, 5], k = 2
//     let low = Math.max(...boards);
//     let high = boards.reduce((a, b) => a + b, 0);

//     while (low <= high) {
//         let mid = (low + high) / 2;
//         let sum = 0;
//         let count = 
//         for (let i = 0; i < boards.length; i++) {
//             if (sum + boards[i] = mid ) {

//             }




//         }


//     }




// }

// main()


