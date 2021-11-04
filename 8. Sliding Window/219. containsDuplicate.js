/* https://leetcode.com/problems/contains-duplicate-ii/ */
var containsNearbyDuplicate = function (nums, k) {
	let map = new Map();

	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		if (map.has(num) && i - map.get(num) <= k) {
			return true;
		} else {
			map.set(num, i);
		}
	}
	return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
