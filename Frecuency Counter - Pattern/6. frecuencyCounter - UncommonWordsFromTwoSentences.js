/* https://leetcode.com/problems/uncommon-words-from-two-sentences/ */

/* A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order. 

it is extremely important to take these edge cases into consideration before diving into the heart of the problem, since there is almost nothing worse than spending a ton of time on what you think is a great solution and then realizing that your code needs to be completely refactored to deal with a couple of pesky edge cases.
*/

/* var uncommonFromSentences = function (a, b) {
	//edge cases
	if (b.length === 0 && a.length !== 0) return a.split(" ");
	if (a.length === 0 && b.length !== 0) return b.split(" ");
	if (a.length === 0 && b.length === 0) return [];

	let freqCounter = {};

	//sentence 'a' needs to be splitted so each element is a word
	let firstSent = a.split(" ");
	for (let word of firstSent) {
		freqCounter[word] ? (freqCounter[word] += 1) : (freqCounter[word] = 1);
	}

	let secondSent = b.split(" ");
	for (let word of secondSent) {
		freqCounter[word] ? (freqCounter[word] += 1) : (freqCounter[word] = 1);
	}

	let uncommon = [];
	for (let key in freqCounter) {
		if (freqCounter[key] === 1) {
			uncommon.push(key);
		}
	}

	return uncommon;
}; */

var uncommonFromSentences = function (s1, s2) {
	if (s1.length === 0 && s2.length !== 0) return s2.split(" ");
	if (s2.length === 0 && s1.length !== 0) return s1.split(" ");
	if (s1.length === 0 && s2.length === 0) return [];

	let freqCounter = {};
	let firstSent = s1.split(" ");
	for (let word of firstSent) {
		freqCounter[word] ? (freqCounter[word] += 1) : (freqCounter[word] = 1);
	}

	let secondSent = s2.split(" ");
	for (let word of secondSent) {
		freqCounter[word] ? (freqCounter[word] += 1) : (freqCounter[word] = 1);
	}

	let uncommon = [];
	for (let key in freqCounter) {
		key;
		if (freqCounter[key] === 1) {
			uncommon.push(key);
		}
	}

	return uncommon;
};
console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
