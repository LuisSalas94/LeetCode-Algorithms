/* Implement a function called hasDuplicates which  accepts
a variable number of integer arguments and returns 
true if there are duplicates in the arguments
*/

function hasDuplicates(...args) {
	let freq = {};

	for (let num of args) {
		freq[num] ? freq[num]++ : (freq[num] = 1);
	}

	for (const value of Object.values(freq)) {
		if (value >= 2) return true;
	}

	return false;
}

console.log(hasDuplicates(1, 2, 3, 4, 5, 6));
console.log(hasDuplicates(1, 2, 3, 4, 5, 6, 6));
console.log(hasDuplicates(1, 1, 1, 1, 2, 3, 4, 5, 6));
