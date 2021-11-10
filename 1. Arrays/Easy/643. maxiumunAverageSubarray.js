/* https://leetcode.com/problems/maximum-average-subarray-i/ */
var findMaxAverage = function (nums, k) {
	let max = -Infinity;
	let windowStart = 0;
	let soFar = 0;

	for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
		soFar += nums[windowEnd];
		if (windowEnd - windowStart === k - 1) {
			let average = soFar / k;
			max = Math.max(max, average);
			soFar -= nums[windowStart];
			windowStart++;
		}
	}
	return max;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
