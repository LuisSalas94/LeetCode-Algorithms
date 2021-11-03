/* https://leetcode.com/problems/merge-sorted-array/ */
var merge = function (nums1, m, nums2, n) {
	let first = m - 1;
	let second = n - 1;
	let i = m + n - 1;

	while (second >= 0) {
		let firstVal = nums1[first];
		let secondVal = nums2[second];

		if (firstVal > secondVal) {
			nums1[i] = firstVal;
			i--;
			first--;
		} else {
			nums1[i] = secondVal;
			i--;
			second--;
		}
	}
	return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
