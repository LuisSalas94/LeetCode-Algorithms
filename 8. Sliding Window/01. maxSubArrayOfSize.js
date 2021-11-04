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
