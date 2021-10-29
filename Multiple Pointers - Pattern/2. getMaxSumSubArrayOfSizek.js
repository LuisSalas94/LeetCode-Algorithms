/* https://www.youtube.com/watch?v=2wVjt3yhGwg&t=591s&ab_channel=JAVAAID-CodingInterviewPreparation */

function getMaxSumSubArrayOfSizek(arr, k) {
	let windowSum = 0;
	let maxSum = 0;
	let start = 0;
	let end = 0;

	//sum of window of size k
	while (end < k) {
		windowSum += arr[end];
		end++;
	}

	while (end < arr.length) {
		windowSum += arr[end] - arr[start];
		end++;
		start++;
		maxSum = Math.max(windowSum, maxSum);
	}

	return maxSum;
}

console.log(getMaxSumSubArrayOfSizek([1, 9, -1, -2, 7, 3, -1, 2], 4));
