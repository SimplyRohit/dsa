// // class Node {
// //   val: number;
// //   prev: Node | null;
// //   next: Node | null;

// //   constructor(val: number) {
// //     this.val = val;
// //     this.prev = null;
// //     this.next = null;
// //   }
// // }

// // const n1 = new Node(10);
// // const n2 = new Node(4);
// // const n3 = new Node(10);
// // const n4 = new Node(10);
// // const n5 = new Node(10);
// // const n6 = new Node(2);
// // const n7 = new Node(10);

// // n1.next = n2;

// // n2.prev = n1;
// // n2.next = n3;

// // n3.prev = n2;
// // n3.next = n4;

// // n4.prev = n3;
// // n4.next = n5;

// // n5.prev = n4;
// // n5.next = n6;

// // n6.prev = n5;
// // n6.next = n7;

// // n7.prev = n6;

// // let head = n1;
// // let key = 10;

// // function deleteAllOccurrences() {
// //   let curr = head;

// //   while (curr) {
// //     if (curr.val === key) {
// //       if (curr === head) {
// //         head = curr.next;
// //         if (head) head.prev = null;
// //       } else {
// //         if (curr.prev) curr.prev.next = curr.next;
// //         if (curr.next) curr.next.prev = curr.prev;
// //       }
// //     }
// //     curr = curr.next;
// //   }
// //   console.log(head);
// // }

// // deleteAllOccurrences();

// // Node structure
// class Node {
//   constructor(d) {
//     this.val = d;
//     this.next = null;
//   }
// }

// // Structure to represent stack
// class LinkedListStack {
//   constructor() {
//     this.head = null; // Top of Stack
//     this.size = 0; // Size
//   }

//   // Method to push an element onto the stack
//   push(x) {
//     // Creating a node
//     const element = new Node(x);

//     element.next = this.head; // Updating the pointers
//     this.head = element; // Updating the top

//     // Increment size by 1
//     this.size++;
//   }

//   // Method to pop an element from the stack
//   pop() {
//     // If the stack is empty
//     if (this.head === null) {
//       return -1; // Pop operation cannot be performed
//     }

//     const value = this.head.val; // Get the top value
//     const temp = this.head; // Store the top temporarily
//     this.head = this.head.next; // Update top to next node
//     this.size--; // Decrement size

//     return value; // Return data
//   }

//   // Method to get the top element of the stack
//   top() {
//     // If the stack is empty
//     if (this.head === null) {
//       return -1; // Top element cannot be accessed
//     }

//     return this.head.val; // Return the top
//   }

//   // Method to check if the stack is empty
//   isEmpty() {
//     return this.size === 0;
//   }
// }

// // Creating a stack
// const st = new LinkedListStack();

// // List of commands
// const commands = ["LinkedListStack", "push", "push", "pop", "top", "isEmpty"];
// // List of inputs
// const inputs = [[], [3], [7], [], [], []];

// for (let i = 0; i < commands.length; ++i) {
//   if (commands[i] === "push") {
//     st.push(inputs[i][0]);
//     console.log("null");
//   } else if (commands[i] === "pop") {
//     console.log(st.pop());
//   } else if (commands[i] === "top") {
//     console.log(st.top());
//   } else if (commands[i] === "isEmpty") {
//     console.log(st.isEmpty() ? "true" : "false");
//   } else if (commands[i] === "LinkedListStack") {
//     console.log("null");
//   }
// }

// function isValid(s: string): boolean {
//   const stack: string[] = [];

//   const map: Record<string, string> = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];

//     console.log(`Step ${i}: char = ${char}`);
//     console.log("Stack before:", stack);

//     // If opening bracket
//     if (char === "(" || char === "{" || char === "[") {
//       stack.push(char);
//       console.log("Pushed:", char);
//     } else {
//       const top = stack.pop();
//       console.log("Popped:", top);

//       if (top !== map[char]) {
//         console.log("Mismatch ❌");
//         return false;
//       }
//     }

//     console.log("Stack after:", stack);
//     console.log("----------------------");
//   }

//   return stack.length === 0;
// }

// console.log(isValid("([)]"));
