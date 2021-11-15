/* https://leetcode.com/problems/minimum-absolute-difference/ */
var minimumAbsDifference = function (arr) {
	arr.sort((a, b) => a - b);
	const result = [];
	let min = Infinity;

	//get min diff
	for (let i = 0; i < arr.length - 1; i++) {
		let diff = arr[i + 1] - arr[i];
		min = Math.min(diff, min);
	}

	//get the matches
	for (let i = 0; i < arr.length - 1; i++) {
		let diff = arr[i + 1] - arr[i];
		if (min === diff) {
			result.push([arr[i], arr[i + 1]]);
		}
	}

	return result;
};

console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));
