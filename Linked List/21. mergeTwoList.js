/* https://www.youtube.com/watch?v=orCMI6WjoIw&list=PLko32sysgiEP903b1Zvo9_qXJ1WvkW7-9&index=7&ab_channel=TerribleWhiteboard
https://www.youtube.com/watch?v=IHY6qcVq9Wo&t=19s&ab_channel=AndyGala
https://leetcode.com/problems/merge-two-sorted-lists/ */

/* 
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
*/
