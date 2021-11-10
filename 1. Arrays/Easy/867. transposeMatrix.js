/* https://leetcode.com/problems/transpose-matrix/ */
var transpose = function (matrix) {
	const result = Array.from({ length: matrix[0].length }, () =>
		new Array(matrix.length).fill(0)
	);

	for (let row = 0; row < matrix.length; row++) {
		for (let column = 0; column < matrix[0].length; column++) {
			result[column][row] = matrix[row][column];
		}
	}

	return result;
};

console.log(
	transpose([
		[1, 2, 3],
		[4, 5, 6],
	])
);

/* 

	const result = Array.from({ length: matrix[0].length }, () =>
		new Array(matrix.length).fill(0)
	);

	for (let row = 0; row < matrix.length; row++) {
		for (let column = 0; column < matrix[0].length; column++) {
			result[column][row] = matrix[row][column];
		}
	}

	return result;



*/
