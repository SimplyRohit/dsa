// class Node {

//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// function main() {
//     let arr = [2, 5, 8, 7];

//     let newnode = new Node(arr[0])
//     console.log(newnode)
// }

// main()


// class Node {
//     constructor(data1, next1 = null) {
//         this.data = data1;
//         this.next = next1;
//     }
// }

// class Solution {
//     insertAtHead(head, newData) {
//         let newNode = new Node(newData, head);
//         return newNode;
//     }

//     printList(head) {
//         let temp = head;
//         let result = "";
//         while (temp) {
//             result += temp.data + " ";
//             temp = temp.next;
//         }
//         console.log(result.trim());
//     }
// }

// let sol = new Solution();

// let head = new Node(2);
// head.next = new Node(3);

// console.log("Original List: ", head);
// sol.printList(head);

// head = sol.insertAtHead(head, 1);

// console.log("After Insertion at Head: ");
// sol.printList(head);



// Definition for singly linked list
// class Node {
//     constructor(val) {
//         this.data = val;
//         this.next = null;
//     }
// }

// class Solution {
//     // Function to delete tail node of linked list
//     deleteTail(head) {
//         // If list is empty or has one node
//         if (head === null || head.next === null) {
//             return null;
//         }

//         // Traverse to the second last node
//         let curr = head;
//         while (curr.next.next !== null) {
//             curr = curr.next;
//         }

//         // Delete tail node
//         curr.next = null;

//         // Return updated head
//         return head;
//     }
// }

// // Driver code
// let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);

// let obj = new Solution();
// head = obj.deleteTail(head);

// // Print list after deletion
// let temp = head;
// let output = "";
// while (temp) {
//     output += temp.data + " ";
//     temp = temp.next;
// }
// console.log(output);


// class ListNode<T> {
//     value: T;
//     next: ListNode<T> | null = null;

//     constructor(value: T) {
//         this.value = value;
//     }
// }

// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);

// function getLinkedListLength(head: ListNode<any> | null): number {
//     let count = 0;
//     let current = head;

//     while (current !== null) {
//         count++;
//         current = current.next;
//     }

//     return count;

// }

// console.log(getLinkedListLength(head))




// // Node class for Linked List
// class Node {
//     constructor(val) {
//         // Store data
//         this.data = val;
//         // Store next pointer
//         this.next = null;
//     }
// }

// // Solution class containing search function
// class Solution {
//     // Function to search for a value in LL
//     searchValue(head, key) {
//         // Pointer to traverse the list
//         let current = head;

//         // Traverse until end
//         while (current !== null) {
//             // Check if current node matches key
//             if (current.data === key) {
//                 // Return true if found
//                 return true;
//             }
//             // Move to next node
//             current = current.next;
//         }

//         // Return false if not found
//         return false;
//     }
// }

// // Driver code
// let head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);

// let obj = new Solution();

// // Search for value
// if (obj.searchValue(head, 20))
//     console.log("Found");
// else
//     console.log("Not Found");
