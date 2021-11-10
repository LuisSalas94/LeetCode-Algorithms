/* https://leetcode.com/problems/monotonic-array/ */
var isMonotonic = function (nums) {
	const same = nums[0] === nums[nums.length - 1];
	const increase = nums[0] < nums[nums.length - 1];
	const decrease = nums[0] > nums[nums.length - 1];

	if (same) {
		for (let i = 1; i < nums.length; i++) {
			if (nums[i - 1] !== nums[i]) return false;
		}
	} else if (increase) {
		for (let i = 1; i < nums.length; i++) {
			if (nums[i - 1] > nums[i]) return false;
		}
	} else {
		for (let i = 1; i < nums.length; i++) {
			if (nums[i - 1] < nums[i]) return false;
		}
	}

	return true;
};

console.log(isMonotonic([1, 2, 2, 3]));
