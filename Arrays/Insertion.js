let arr = [10, 20, 30];

//brute force
function insertionAtStart(arr, value) {
	let newArr = [];
	newArr.push(value);
	return [...newArr, ...arr];
}
console.log(insertionAtStart(arr, 5));
