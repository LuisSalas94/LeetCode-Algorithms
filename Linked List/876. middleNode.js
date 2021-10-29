/* https://leetcode.com/problems/middle-of-the-linked-list/ */
import { LinkedList, Node } from "./237. deleteNode";
class LinkedList {
	middleNode(head) {
		let fast = head;
		let slow = head;

		while (fast && fast.next) {
			fast = fast.next.next;
			slow = slow.next;
		}
		return slow;
	}
}
