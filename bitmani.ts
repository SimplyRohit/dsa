// // class Solution {
// //   // Function to check if the i-th bit of number n is set (1)
// //   checkIthBit(n, i) {
// //     let binary = n.toString(2); // Convert the number into binary string representation
// //     console.log(binary);
// //     // If the bit index is greater than the length of the binary string, the bit is 0
// //     if (i >= binary.length) return false;

// //     // Return true if the i-th bit is 1, otherwise false
// //     return binary[binary.length - 1 - i] === "1";
// //   }
// // }

// // // Main function to test the solution
// // const sol = new Solution();
// // const num = 5;
// // const bitIndex = 2; // Check the 2nd bit (0-based index)

// // if (sol.checkIthBit(num, bitIndex)) {
// //   console.log(`The ${bitIndex}-th bit of ${num} is set (1).`);
// // } else {
// //   console.log(`The ${bitIndex}-th bit of ${num} is not set (0).`);
// // }

// // class Solution {
// //   checkIthBit(n) {
// //     // let binary = n.toString(2);
// //     // console.log(binary[binary.length - 1]);
// //     // return binary[binary.length - 1] === "1";
// //     let i = n.toString(2).length - 1;
// //     return (n & (1 << i)) !== 0;
// //   }
// // }

// // // Main function to test the solution
// // const sol = new Solution();
// // const num = 10;

// // if (sol.checkIthBit(num)) {
// //   console.log(true);
// // } else {
// //   console.log(false);
// // }

// function Main() {
//   let x = 10;
//   let goal = 7;
//   console.log(x & goal);
// }

// Main();

// class Solution {
//   /* Function to find the XOR
//     of numbers from 1 to n */
//   XORtillN(n) {
//     if (n % 4 === 1) return 1;
//     if (n % 4 === 2) return n + 1;
//     if (n % 4 === 3) return 0;
//     return n;
//   }

//   /* Function to find the XOR
//     of numbers from L to R */
//   findRangeXOR(l, r) {
//     return this.XORtillN(l - 1) ^ this.XORtillN(r);
//   }
// }

// const l = 3,
//   r = 5;

// /* Creating an instance of
// Solution class */
// const sol = new Solution();

// /* Function call to get the
// XOR of numbers from L to R */
// const ans = sol.findRangeXOR(l, r);

// console.log(`The XOR of numbers from ${l} to ${r} is: ${ans}`);

// function countPrimes(n: number): number {
//   let seen = new Uint8Array(n),
//     ans = 0;
//   for (let num = 2; num < n; num++) {
//     console.log(num, "starting");
//     if (seen[num]) continue;
//     ans++;
//     console.log(ans, "ans");
//     for (let mult = num * num; mult < n; mult += num) {
//       console.log(mult, "mult");
//       seen[mult] = 1;
//     }
//   }
//   return ans;
// }
// countPrimes(10);

// function primeFactors(queries: number[]): number[][] {
//   const maxVal = Math.max(...queries);
//   console.log(maxVal);

//   const spf = new Array(maxVal + 1);

//   for (let i = 1; i <= maxVal; i++) {
//     spf[i] = i;
//   }
//   console.log(spf);

//   for (let i = 2; i * i <= maxVal; i++) {
//     if (spf[i] === i) {
//       // prime
//       for (let j = i * i; j <= maxVal; j += i) {
//         if (spf[j] === j) {
//           spf[j] = i;
//         }
//       }
//     }
//   }

//   const result: number[][] = [];

//   for (let num of queries) {
//     let factors: number[] = [];

//     while (num !== 1) {
//       factors.push(spf[num]);
//       num = Math.floor(num / spf[num]);
//     }

//     result.push(factors);
//   }

//   return result;
// }

// console.log(primeFactors([10, 15, 20]));
