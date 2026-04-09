// class Solution {
//   // Function to check if the i-th bit of number n is set (1)
//   checkIthBit(n, i) {
//     let binary = n.toString(2); // Convert the number into binary string representation
//     console.log(binary);
//     // If the bit index is greater than the length of the binary string, the bit is 0
//     if (i >= binary.length) return false;

//     // Return true if the i-th bit is 1, otherwise false
//     return binary[binary.length - 1 - i] === "1";
//   }
// }

// // Main function to test the solution
// const sol = new Solution();
// const num = 5;
// const bitIndex = 2; // Check the 2nd bit (0-based index)

// if (sol.checkIthBit(num, bitIndex)) {
//   console.log(`The ${bitIndex}-th bit of ${num} is set (1).`);
// } else {
//   console.log(`The ${bitIndex}-th bit of ${num} is not set (0).`);
// }

// class Solution {
//   checkIthBit(n) {
//     // let binary = n.toString(2);
//     // console.log(binary[binary.length - 1]);
//     // return binary[binary.length - 1] === "1";
//     let i = n.toString(2).length - 1;
//     return (n & (1 << i)) !== 0;
//   }
// }

// // Main function to test the solution
// const sol = new Solution();
// const num = 10;

// if (sol.checkIthBit(num)) {
//   console.log(true);
// } else {
//   console.log(false);
// }
