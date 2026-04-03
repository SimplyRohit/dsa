// class Node {
//   val: number;
//   prev: Node | null;
//   next: Node | null;

//   constructor(val: number) {
//     this.val = val;
//     this.prev = null;
//     this.next = null;
//   }
// }

// const n1 = new Node(10);
// const n2 = new Node(4);
// const n3 = new Node(10);
// const n4 = new Node(10);
// const n5 = new Node(10);
// const n6 = new Node(2);
// const n7 = new Node(10);

// n1.next = n2;

// n2.prev = n1;
// n2.next = n3;

// n3.prev = n2;
// n3.next = n4;

// n4.prev = n3;
// n4.next = n5;

// n5.prev = n4;
// n5.next = n6;

// n6.prev = n5;
// n6.next = n7;

// n7.prev = n6;

// let head = n1;
// let key = 10;

// function deleteAllOccurrences() {
//   let curr = head;

//   while (curr) {
//     if (curr.val === key) {
//       if (curr === head) {
//         head = curr.next;
//         if (head) head.prev = null;
//       } else {
//         if (curr.prev) curr.prev.next = curr.next;
//         if (curr.next) curr.next.prev = curr.prev;
//       }
//     }
//     curr = curr.next;
//   }
//   console.log(head);
// }

// deleteAllOccurrences();
