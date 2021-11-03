/* https://leetcode.com/problems/two-sum/ */
var twoSum = function (nums, target) {
	const hash = {};

	//create a hash absed on key and values
	for (let i = 0; i < nums.length; i++) {
		let val = nums[i];
		hash[val] = i;
	}

	for (let i = 0; i < nums.length; i++) {
		let potentialkey = target - nums[i];
		if (hash[potentialkey] && hash[potentialkey] !== i) {
			return [i, hash[potentialkey]];
		}
	}
};

console.log(twoSum([2, 7, 11, 15], 9));
