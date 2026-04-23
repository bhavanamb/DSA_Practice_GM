// // // Q1. Given an array of integers and a positive integer K, find the maximum sum of any subarray of size K.
// // arr = [2, 1, 5, 1, 3, 2]
// // K = 3

function maxSumSubarray(arr, k) {
	console.log("arr", arr);
	let finalMaxSum = 0;
	let currentMaxSum = 0;

	for (let i = 0; i < k; i++) {
		currentMaxSum += arr[i];
		finalMaxSum = currentMaxSum;
	}

	let j = 0;

	for (let i = k; i < arr.length; i++) {
		currentMaxSum = currentMaxSum + arr[i] - arr[j];
		// console.log("currentMaxSum", currentMaxSum);
		if (currentMaxSum > finalMaxSum) {
			finalMaxSum = currentMaxSum;
		}
		j++;
	}

	console.log("finalMaxSum", finalMaxSum);
}
// Basic
//maxSumSubarray([2, 1, 5, 1, 3, 2], 3); // → 9  (5+1+3)

// // Max sum at start
maxSumSubarray([5, 4, 1, 1, 1], 2); // → 9  (5+4)

// // Max sum at end
maxSumSubarray([1, 1, 1, 4, 5], 2); // → 9  (4+5)

// // All same elements
maxSumSubarray([3, 3, 3, 3], 2); // → 6

// // k equals array length
maxSumSubarray([1, 2, 3], 3); // → 6

// // k = 1
maxSumSubarray([3, 1, 4, 1, 5], 1); // → 5

// Negative numbers
maxSumSubarray([-1, -2, -3, -4], 2); // → -3 (-1+-2)

// Single element
maxSumSubarray([5], 1); // → 5

// Large window
maxSumSubarray([1, 2, 3, 4, 5], 4); // → 14 (2+3+4+5)

function subArrayWithZerosandOnes(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		let sub = [];
		for (let j = i; j < arr.length; j++) {
			sub.push(arr[j]);
			console.log(sub);
			if (sub.includes(0) && sub.includes(1)) {
				console.log(count);
				count++;
			}
		}
	}
	return count;
}

//subArrayWithZerosandOnes([0, 1, 0, 1]);
