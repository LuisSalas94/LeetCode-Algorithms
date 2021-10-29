/*1.  “Write a function called “squared” which takes two arrays. The function should return true if every value in the array has its value squared in the second array. The frequency of values must be the same.” */
function squared(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;

	let freqCounter1 = {};
	let freqCounter2 = {};

	for (let num of arr1) {
		freqCounter1[num] ? (freqCounter1[num] += 1) : (freqCounter1[num] = 1);
	}

	for (let num of arr2) {
		freqCounter2[num] ? (freqCounter2[num] += 1) : (freqCounter2[num] = 1);
	}

	for (let key in freqCounter1) {
		if (!(key ** 2 in freqCounter2)) return false;
		if (freqCounter1[key] !== freqCounter2[key ** 2]) return false;
	}

	return true;
}

/* console.log(squared([1, 2, 3], [9, 1, 4]));
console.log(squared([1, 2, 3], [1, 4]));
console.log(squared([2, 2, 3], [4, 9, 9])); */

/* 2. /* Implement a function called hasDuplicates which  accepts a variable number of integer arguments and returns  true if there are duplicates in the arguments*/

function containsDuplicate(nums) {
	let freqCounter = {};

	for (let num of nums) {
		freqCounter[num] ? (freqCounter[num] += 1) : (freqCounter[num] = 1);
	}

	for (let value of Object.values(freqCounter)) {
		if (value >= 2) return false;
	}

	return true;
}

/* console.log(containsDuplicate([1, 2, 3, 4, 5, 6]));
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 6]));
console.log(containsDuplicate([1, 1, 1, 1, 2, 3, 4, 5, 6])); */

/* 3.Write a function called isAnagram which accepts two strings. The function should return true if the two strings parameters are anagrams of each other */

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

console.log(isAnagram("silent", "listen"));
console.log(isAnagram("martin", "nitram"));
console.log(isAnagram("cat", "tag"));
console.log(isAnagram("rat", "tar"));

/* 4 A sentence is a string of single-space separated words where each word consists only of lowercase letters. A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence. Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order. 
it is extremely important to take these edge cases into consideration before diving into the heart of the problem, since there is almost nothing worse than spending a ton of time on what you think is a great solution and then realizing that your code needs to be completely refactored to deal with a couple of pesky edge cases.*/

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
