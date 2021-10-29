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
list.push(6);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.removeElements(list.head, 6);
console.log(list.print());
