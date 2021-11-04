/* https://www.youtube.com/watch?v=3XGaTq-bRiU&list=PLko32sysgiEP903b1Zvo9_qXJ1WvkW7-9&index=6&ab_channel=TerribleWhiteboard
https://leetcode.com/problems/delete-node-in-a-linked-list/ */

class Node {
	constructor(value, next) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	//leetcode #237 question
	deleteNode(node) {
		let next = node.next.next;
		node.val = node.next.val;
		node.next = next;
	}

	//leetcode #876 question
	middleNode(head) {
		let fast = head;
		let slow = head;

		while (fast && fast.next) {
			fast = fast.next.next;
			slow = slow.next;
		}
		return slow;
	}

	//leetcode #83 question
	deleteDuplicates(head) {
		let current = head;
		while (current !== null && current.next !== null) {
			if (current.value === current.next.value) {
				current.next = current.next.next;
			} else {
				current = current.next;
			}
		}
		return head;
	}

	// leetcode #21 ->
	mergeTwoList(l1, l2) {
		const dummy = new Node(-Infinity);
		let prev = dummy;

		while (l1 && l2) {
			if (l1.value <= l2.value) {
				prev.next = l1;
				prev = l1;
				l1 = l1.next;
			} else {
				prev.next = l2;
				prev = l2;
				l2 = l2.next;
			}
		}

		if (!l1) prev.next = l2;
		if (!l2) prev.next = l1;

		return dummy.next;
	}

	//leetcode #141
	hasCycle(head) {
		let fast = head;
		let slow = head;
		while (fast && fast.next) {
			fast = fast.next.next;
			slow = slow.next;
			if (fast === slow) return true;
		}
		return false;
	}

	//leetcode #142

	//leetcode #203
	removeElements(head, val) {
		let dummy = new Node(-1);
		dummy.next = head;
		let prev = dummy;
		let current = head;

		while (current) {
			if (current.value === val) {
				prev.next = current.next;
				current = current.next;
			} else {
				prev = current;
				current = current.next;
			}
		}

		return dummy.next;
	}

	//leetcode #02
	addTwoNumbers(l1, l2) {
		let carry = 0;
		let result = new Node(-1);
		let dummy = result;

		while (l1 || l2 || carry) {
			let l1Val = l1 ? l1.value : 0;
			let l2Val = l2 ? l2.value : 0;
			let nextDigit = (l1Val + l2Val + carry) % 10;
			result.next = new Node(nextDigit);
			result = result.next;
			carry = Math.floor((l1Val + l2Val + carry) / 10);
			l1 = l1 ? l1.next : null;
			l2 = l2 ? l2.next : null;
		}
		return dummy.next;
	}

	//leetcode #19 ***
	removeNthFromEnd(head, n) {
		let dummyHead = new Node(-Infinity, head);
		dummyHead.next = head;
		let resultHead = dummyHead;
		let count = 0;
		let tail = head;

		while (count < n) {
			count++;
			tail = tail.next;
		}

		let removedNode = head;
		let prev = dummyHead;

		while (tail) {
			tail = tail.next;
			removedNode = removedNode.next;
			prev = prev.next;
		}

		prev.next = removedNode.next;
		return resultHead.next;
	}

	//leetcode #82
	deleteDuplicates(head) {
		if (!head) return null;
		let dummy = new Node(-Infinity, head);
		let prev = dummy;
		let current = head;
		let next = current.next;

		while (current) {
			if (current && next && current.value === next.value) {
				while (next && current.value === next.value) {
					next = next.next;
				}
				prev.next = next;
				current = next;
				next = next ? next.next : null;
			} else {
				prev = current;
				current = next;
				next = next ? next.next : null;
			}
		}
		return dummy.next;
	}

	print() {
		let arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.value);
			current = current.next;
		}
		return arr;
	}
}

const list = new LinkedList();
//const list2 = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

console.log(list.removeNthFromEnd(list.head, 2));
//console.log(list.addTwoNumbers(list.head, list2.head));
//list.deleteDuplicates(list.head);
//console.log(list.print());
