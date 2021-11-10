/* https://leetcode.com/problems/rotate-string/ */
var rotateString = function (s, goal) {
	if (s.length !== goal.length) return false;
	if (s.length === 0 && goal.length === 0) return false;
	s = s + s;
	return s.includes(goal);
};

console.log(rotateString("abcde", "cdeab"));
