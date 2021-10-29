/* Write a function called isAnagram which accepts two strings
The function should return true if the two strings parameters are anagrams of each other */
/* function isAnagram(firstStr, secondStr) {
	if (!firstStr || !secondStr) return false;
	if (firstStr.length !== secondStr.length) return false;

	const look = {};

	for (let first of firstStr) {
		look[first] ? look[str]++ : (look[first] = 1);
	}

	for (let second of secondStr) {
		if (!look[second]) return false;
		look[second] -= 1;
	}
	return true;
}
 */

function isAnagram(str1, str2) {
	let freqCounter = {};

	for (let char of str1) {
		freqCounter[char] ? (freqCounter[char] += 1) : (freqCounter[char] = 1);
	}

	for (let char of str2) {
		freqCounter[char] ? (freqCounter[char] -= 1) : false;
	}

	for (let value of Object.values(freqCounter)) {
		if (value !== 0) return false;
	}
	return true;
}

console.log(isAnagram("cat", "tag"));
console.log(isAnagram("silent", "listen"));
console.log(isAnagram("martin", "nitram"));
console.log(isAnagram("rat", "tar"));
