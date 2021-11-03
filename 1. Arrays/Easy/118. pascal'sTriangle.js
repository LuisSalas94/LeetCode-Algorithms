/* var generate = function (numRows) {
	if (numRows < 1) return [];
	if (numRows === 1) return [[1]];

	const triangle = [[1]];

	for (let i = 1; i < numRows; i++) {
		let prevRow = triangle[i - 1];
		const curRow = [];
		curRow.push(1);
		for (let j = 1; j < prevRow.length; j++) {
			curRow[j] = prevRow[j] + prevRow[j - 1];
		}

		curRow.push(1);
		triangle.push(curRow);
	}
	return triangle;
}; */

var generate = function (numRows) {
	if (numRows < 1) return [];
	if (numRows === 1) return [[1]];
	//create triangle
	const triangle = [[1]];
	//loop numRows from i = 1, because it's 0 based array
	for (let i = 1; i < numRows; i++) {
		//get prevRow
		let prevRow = triangle[i - 1];
		//create curRow
		const curRow = [];
		//add 1 to curRow
		curRow.push(1);
		//loop prevRow array from j = 1
		for (let j = 1; j < prevRow.length; j++) {
			//add new value from preRow
			curRow[j] = prevRow[j] + prevRow[j - 1];
		}
		//add 1 to curRow
		curRow.push(1);
		triangle.push(curRow);
	}
	return triangle;
};

console.log(generate(5));
