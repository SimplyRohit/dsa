// Solution class to find next greater elements
class Solution {
  // Function to find next greater elements
  nextGreater(nums) {
    let stack = [];
    let n = nums.length;
    let res = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length && stack[stack.length - 1] <= nums[i]) {
        stack.pop();
      }

      // If stack is empty, no greater element
      if (stack.length === 0) res[i] = -1;
      // Else top of stack is the answer
      else res[i] = stack[stack.length - 1];

      // Push current element
      stack.push(nums[i]);
    }

    // Return the result
    return res;
  }
}

function main() {
  let nums = [4, 5, 2, 10];
  let sol = new Solution();
  let ans = sol.nextGreater(nums);
  console.log(ans.join(" "));
}

main();
