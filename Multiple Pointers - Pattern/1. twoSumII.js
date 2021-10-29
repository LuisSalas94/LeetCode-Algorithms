/* https://www.youtube.com/watch?v=2wVjt3yhGwg&t=591s&ab_channel=JAVAAID-CodingInterviewPreparation */

function twoSum(arr, target) {
	let start = 0;
	let end = arr.length - 1;
	let result = [];

	while (start < end) {
		let sum = arr[start] + arr[end];
		if (sum === target) {
			result.push(start);
			result.push(end);
			break;
		} else if (sum < target) {
			start++;
		} else {
			end--;
		}
	}
	return result;
}

console.log(twoSum([-3, 2, 3, 3, 6, 8, 15], 6));
