/* https://levelup.gitconnected.com/how-to-solve-an-anagram-algorithm-using-a-frequency-counter-5bb1f0b817ef */

function anagramCheck(word1, word2) {
	if (word1.length !== word2.length) return false;

	let counter = {};

	for (let char of word1) {
		counter[char] ? (counter[char] += 1) : (counter[char] = 1);
	}

	for (let char of word2) {
		counter[char] ? (counter[char] -= 1) : false;
	}

	for (let key in counter) {
		if (counter[key] !== 0) return false;
	}

	return true;
}

console.log(anagramCheck("silent", "listen"));
