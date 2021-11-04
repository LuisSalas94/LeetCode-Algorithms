/* 
https://www.youtube.com/watch?v=sydRChyHRxk&ab_channel=AndyGala
https://leetcode.com/problems/longest-substring-without-repeating-characters/ 
*/
var lengthOfLongestSubstring = function (s) {
	let max = 0;
	let windowStart = 0;
	const soFar = {};

	for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
		//updated soFar
		let rightChar = s[windowEnd];
		//create the object
		soFar[rightChar] ? (soFar[rightChar] += 1) : (soFar[rightChar] = 1);
		//decrement soFar by checking if value is > 1
		while (soFar[rightChar] > 1) {
			//decrement from the left
			let leftChar = s[windowStart];
			//check what's value at rightchar
			if (soFar[leftChar] > 1) {
				soFar[leftChar]--;
				//if value === 1, delete it
			} else {
				delete soFar[leftChar];
			}
			windowStart++;
		}

		max = Math.max(max, windowEnd - windowStart + 1);
	}
	return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
