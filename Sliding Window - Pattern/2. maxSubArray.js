/* https://leetcode.com/problems/maximum-subarray/ */
var maxSubArray = function (nums) {
	let maxValue = nums[0];
	let accumulator = nums[0];

	for (let i = 1; i < nums.length; i++) {
		let calc = Math.max(nums[i], nums[i] + accumulator);
		if (calc > maxValue) {
			maxValue = calc;
		}
		accumulator = calc;
	}
	return maxValue;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));
