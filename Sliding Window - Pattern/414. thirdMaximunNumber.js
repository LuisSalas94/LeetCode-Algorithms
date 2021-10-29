/* 
https://terriblewhiteboard.com/third-maximum-number-leetcode-414/
https://leetcode.com/problems/third-maximum-number/ */

var thirdMax = function (nums) {
	if (nums.length === 2) return Math.max(...nums);

	let max = nums[0];
	let secondMax = -Infinity;
	let thirdMax = -Infinity;

	for (let i = 1; i < nums.length; i++) {
		let num = nums[i];

		if (num > max) {
			thirdMax = secondMax;
			secondMax = max;
			max = num;
		} else if (num < max && num > secondMax) {
			thirdMax = secondMax;
			secondMax = num;
		} else if (num < secondMax && num > thirdMax) {
			thirdMax = num;
		}
	}
	return thirdMax;
};

console.log(thirdMax([2, 2, 3, 1]));
