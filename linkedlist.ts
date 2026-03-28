// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }

// let head = new ListNode(0)
// head.next = new ListNode(1)
// head.next.next = new ListNode(2)

// function middleNode(head: ListNode | null) {
//     let count = 0
//     let temp = head
//     while (temp) {
//         count++
//         temp = temp.next

//     }
//     let coun2 = 0;
//     let temp2 = head
//     let val
//     while (Math.floor(count / 2) + 1 !== coun2) {
//         coun2++
//         val = temp2?.val
//         temp2 = temp2.next
//     }
//     console.log(val)
// };
// middleNode(head)

// // Node class represents a
// // node in a linked list
// class Node {
//   // Constructor with both data and next node as parameters
//   constructor(data1, next1 = null) {
//     // Data stored in the node
//     this.data = data1;
//     // Pointer to the next node in the list
//     this.next = next1;
//   }
// }

// // Solution class with detectLoop function
// class Solution {
//   // function to detect loop in linked list
//   detectLoop(head) {
//     // Initialize a pointer 'temp'
//     // at the head of the linked list
//     let temp = head;

//     // Create a map to keep track of
//     // encountered nodes
//     let nodeMap = new Map();

//     // Step 2: Traverse the linked list
//     while (temp !== null) {
//       console.log(nodeMap);

//       // If the node is already in the
//       // map, there is a loop
//       if (nodeMap.has(temp)) {
//         return true;
//       }
//       // Store the current node
//       // in the map
//       nodeMap.set(temp, 1);

//       // Move to the next node
//       temp = temp.next;
//     }

//     // Step 3: If the list is successfully traversed
//     // without a loop, return false
//     console.log(nodeMap);
//     return false;
//   }
// }

// // Driver code
// function main() {
//   // Create a sample linked list
//   // with a loop for testing
//   let head = new Node(1);
//   let second = new Node(2);
//   let third = new Node(3);
//   let fourth = new Node(4);
//   let fifth = new Node(5);

//   head.next = second;
//   second.next = third;
//   third.next = fourth;
//   fourth.next = fifth;
//   // Create a loop
//   fifth.next = third;

//   let sol = new Solution();

//   // Check if there is a loop
//   // in the linked list
//   if (sol.detectLoop(head)) {
//     console.log("Loop detected in the linked list.");
//   } else {
//     console.log("No loop detected in the linked list.");
//   }
// }

// main();

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Solution {
  // Function to detect start of loop using Floyd’s cycle detection
  detectCycle(head) {
    // Initialize slow and fast pointers
    let slow = head;
    let fast = head;

    // Traverse while fast and fast.next are not null
    while (fast && fast.next) {
      // Move slow one step
      slow = slow.next;

      // Move fast two steps
      fast = fast.next.next;

      // If they meet, cycle exists
      if (slow === fast) {
        // Reset slow to head
        slow = head;

        // Move both one step until they meet again
        while (slow !== fast) {
          slow = slow.next;
          fast = fast.next;
        }

        // Return the starting node of the cycle
        return slow;
      }
    }

    // No cycle found
    return null;
  }
}

// Driver code
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);

// Create cycle: last node connects to node with value 2
head.next.next.next.next = head.next;

let obj = new Solution();
let result = obj.detectCycle(head);

if (result) console.log("Cycle starts at node with value:", result.val);
else console.log("No cycle found.");
