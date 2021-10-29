/* https://leetcode.com/problems/longest-consecutive-sequence/ 
https://www.youtube.com/watch?v=xdMyL--dOqE&ab_channel=TerribleWhiteboard*/
var longestConsecutive = function (nums) {
	let set = new Set();

	for (let num of nums) {
		set.add(num);
	}

	let longestStreak = 0;

	for (let num of set) {
		/*if the number that's one less than the current number is in the set, 
    we can skip the current number since it will be captured in a different streak */
		if (!set.has(num - 1)) {
			let currentNum = num;
			/* reset the current streak with each new loop */
			let currentStreak = 1;
			/* increment the current number by one until we find the end of the streak */
			while (set.has(currentNum + 1)) {
				currentStreak += 1;
				currentNum += 1;
			}
			/* reset the longest global streak to the current streak if the current streak is greater */
			longestStreak = Math.max(longestStreak, currentStreak);
		}
	}

	return longestStreak;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
