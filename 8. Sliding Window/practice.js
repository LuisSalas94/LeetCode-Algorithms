/* 1 */
function maxSubArrayOfSize(arr, size) {
	let currSum = 0;
	let maxSum = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		currSum += arr[i];
		if (i >= size - 1) {
			maxSum = Math.max(maxSum, currSum);
			currSum -= arr[i - (size - 1)];
		}
	}
	return maxSum;
}
console.log(maxSubArrayOfSize([1, 2, 3, 5, 4, 8], 2));

/* 2 */
function maxSubArray(arr) {
	let maxValue = arr[0];
	let accumulator = arr[0];

	for (let i = 1; i < arr.length; i++) {
		let calc = Math.max(arr[i], arr[i] + accumulator);
		if (calc > maxValue) {
			maxValue = calc;
		}
		accumulator = calc;
	}
	return maxValue;
}
console.log(maxSubArray([8, -6, 4, 5, -2]));
