/*
https://www.youtube.com/watch?v=sMqEwkpvJvQ&list=PLko32sysgiEP903b1Zvo9_qXJ1WvkW7-9&index=3&ab_channel=TerribleWhiteboard
https://www.youtube.com/watch?v=wDgDAOVqhhA&t=1s&ab_channel=AndyGala
https://leetcode.com/problems/linked-list-cycle/ */

/* 
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
*/
