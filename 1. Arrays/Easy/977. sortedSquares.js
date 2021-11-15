/* https://leetcode.com/problems/squares-of-a-sorted-array/ */
/* var sortedSquares = function (nums) {
	let squaredNums = nums.map((num) => num * num);
	return squaredNums.sort((a, b) => a - b);
}; */

/* 

*/
var sortedSquares = function (nums) {
	const result = new Array(nums.length).fill(0);
	let left = 0;
	let right = nums.length - 1;
	let resultIndex = nums.length - 1;

	while (left <= right) {
		let leftVal = Math.pow(nums[left], 2);
		let rightVal = Math.pow(nums[right], 2);

		if (leftVal < rightVal) {
			result[resultIndex] = rightVal;
			right--;
			resultIndex--;
		} else {
			result[resultIndex] = leftVal;
			left++;
			resultIndex--;
		}
	}
	return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
