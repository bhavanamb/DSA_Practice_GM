//creating a subarray

let arr = [4, 5, 3, 1];

//print sub arrays

for (let i = 0; i < arr.length; i++) {
	let sub = [];
	for (let j = i; j < arr.length; j++) {
		sub.push(arr[j]);
		console.log([...sub]);
	}
}
//4,5,3,1
//j,
//sub -
