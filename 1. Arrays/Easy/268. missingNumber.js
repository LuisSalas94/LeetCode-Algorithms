/* https://leetcode.com/problems/missing-number/
Using:
(n*(n+1))/2
*/
var missingNumber = function (nums) {
	const gSum = (nums.length * (nums.length + 1)) / 2;
	const nSum = nums.reduce((acc, ele) => acc + ele, 0);
	return gSum - nSum;
};

console.log(missingNumber([3, 0, 1]));
