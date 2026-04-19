let arr = [10, 20, 30];

//brute force
function insertionAtStart(arr, value) {
	let newArr = [];
	newArr.push(value);
	return [...newArr, ...arr];
}
//console.log(insertionAtStart(arr, 5));

function insertWithSameArray(arr, value) {
	for (let i = arr.length; i > 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = value;
	return arr;
}

//console.log(insertWithSameArray(arr, 5));

function insertUsingBuiltIn(arr, value) {
	arr.unshift(value);
	return arr;
}

console.log(insertUsingBuiltIn(arr, 5));
