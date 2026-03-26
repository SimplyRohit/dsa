// 151. Reverse Words in a String
// Medium
// Topics
// premium lock icon
// Companies
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.


// function reverseWords(s: string) {
//     let words = [];

//     let temp = ""
//     for (const char of s) {
//         if (char !== " ") {
//             temp += char
//         }
//         else {
//             words.push(temp)
//             temp = ""
//         }
//            else if (word.length > 0) {
//                 // Add word to list
//                 words.push(word);
//                 // Reset word
//                 word = "";
//             }

//     }
//     console.log(words)

// };



// reverseWords("the sky is blue")



// 1903. Largest Odd Number in String
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.


// function largestOddNumber(s: string): string {
//     let ind = -1;
//     for (let i = s.length - 1; i >= 0; i--) {
//         // if ((s[i] - '0') % 2 === 1) {
//         console.log(s[i] - '0')
//         ind = i;
//         break;
//     }
// }
// let i = 0;
// while (i <= ind && s[i] === '0') i++;
// return s.substring(i, ind + 1);
// };

// largestOddNumber("35427")