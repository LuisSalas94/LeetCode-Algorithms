/* 
https://www.youtube.com/watch?v=gfgJjrkR-W4&list=PLko32sysgiEP903b1Zvo9_qXJ1WvkW7-9&index=9&ab_channel=TerribleWhiteboard
https://www.youtube.com/watch?v=gfgJjrkR-W4&t=30s&ab_channel=TerribleWhiteboard
https://leetcode.com/problems/remove-duplicates-from-sorted-list/ */
import { LinkedList, Node } from "./237. deleteNode";
class LinkedList {
	//leetcode #83 question -> sorted list
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
}
