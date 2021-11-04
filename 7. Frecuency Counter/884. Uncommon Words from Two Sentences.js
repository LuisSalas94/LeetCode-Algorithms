/* https://leetcode.com/problems/uncommon-words-from-two-sentences/ */

function uncommonFromSentences(s1, s2) {
	if (s1.length === 0 && s2.length !== 0) return s2.split(" ");
	if (s2.length === 0 && s1.length !== 0) return s1.split(" ");
	if (s1.length === 0 && s2.length === 0) return [];

	let freqCounter = {};
	let sent1 = s1.split(" ");
	let sent2 = s2.split(" ");

	for (let word of sent1) {
		freqCounter[word] ? (freqCounter[word] += 1) : (freqCounter[word] = 1);
	}

	for (let word of sent2) {
		freqCounter[word] ? (freqCounter[word] += 1) : (freqCounter[word] = 1);
	}

	let uncommon = [];

	for (let [key, value] of Object.entries(freqCounter)) {
		if (value === 1) uncommon.push(key);
	}
	return uncommon;
}

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
