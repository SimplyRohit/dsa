// // Class representing a node in Doubly Linked List
// class Node {
//     // Constructor to initialize a node
//     constructor(data, next = null, prev = null) {
//         // Stores data of the node
//         this.data = data;

//         // Pointer to the next node
//         this.next = next;

//         // Pointer to the previous node
//         this.prev = prev;
//     }
// }

// // Initializing an array to create nodes
// let arr = [2, 5, 8, 7];

// // Creating the head node of the doubly linked list
// let head = new Node(arr[0]);

// // Printing the object representing head
// console.log(head);

// // Printing the data stored in head node
// console.log(head.data);



// // Define a Node class for doubly linked list
// class Node {
//     constructor(data, next_node = null, back_node = null) {
//         this.data = data;
//         this.next = next_node;
//         this.back = back_node;
//     }
// }

// // Function to convert an array to a doubly linked list
// function convertArr2DLL(arr) {
//     let head = new Node(arr[0]);  // Create the head node with the first element
//     let prev = head;  // Initialize 'prev' to the head node

//     // Traverse the array to create the doubly linked list
//     for (let i = 1; i < arr.length; i++) {
//         let temp = new Node(arr[i], null, prev);  // Create a new node
//         prev.next = temp;  // Set 'next' of the previous node to the new node
//         prev = temp;  // Move 'prev' to the new node
//     }

//     return head;  // Return the head of the doubly linked list
// }

// // Function to print the elements of the doubly linked list
// function printList(head) {
//     while (head) {
//         process.stdout.write(head.data + " ");  // Print the data of the current node
//         head = head.next;  // Move to the next node
//     }
//     console.log();  // New line after printing the list
// }

// // Function to insert a new node at the tail of the doubly linked list
// function insertAtTail(head, k) {
//     let newNode = new Node(k);  // Create a new node with data 'k'

//     if (!head) {
//         return newNode;  // If the list is empty, return the new node as the head
//     }

//     let tail = head;
//     while (tail.next) {
//         tail = tail.next;  // Traverse to the last node of the list
//     }

//     tail.next = newNode;  // Connect the new node to the last node
//     newNode.back = tail;  // Set the 'back' pointer of the new node to the previous node
//     return head;  // Return the head of the modified list
// }

// // Main function to handle input and output
// function main() {
//     let arr = [12, 5, 8, 7, 4];  // Initialize an array
//     let head = convertArr2DLL(arr);  // Convert the array to a doubly linked list

//     console.log("Doubly Linked List Initially:");
//     printList(head);  // Print the doubly linked list

//     console.log("\nDoubly Linked List After Inserting at the tail with value 10:");
//     head = insertAtTail(head, 10);  // Insert a node with value 10 at the end
//     printList(head);  // Print the updated doubly linked list
// }

// // Call the main function
// main();


// // Node structure for DLL
// class Node {
//     constructor(val) {
//         this.data = val;
//         this.prev = null;
//         this.next = null;
//     }
// }

// class Solution {
//     // Function to delete tail of DLL
//     deleteTail(head) {
//         // If list is empty
//         if (!head) return null;

//         // If only one node present
//         if (!head.next) return null;

//         // Traverse to the last node
//         let temp = head;
//         while (temp.next) {
//             temp = temp.next;
//         }

//         // Update second last node's next to null
//         temp.prev.next = null;

//         // Return head
//         return head;
//     }
// }

// // Driver code
// function main() {
//     // Create a sample DLL: 1 <-> 2 <-> 3
//     let head = new Node(1);
//     head.next = new Node(2);
//     head.next.prev = head;
//     head.next.next = new Node(3);
//     head.next.next.prev = head.next;

//     let obj = new Solution();
//     head = obj.deleteTail(head);

//     // Print list after deletion
//     let curr = head;
//     let result = "";
//     while (curr) {
//         result += curr.data + " ";
//         curr = curr.next;
//     }
//     console.log(result.trim());
// }

// main();
