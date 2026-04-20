//creating a subarray

let arr = [1, 2, 1]; //3, -1,1,-2,-4,-2,-5,2,-3,-1
// let finalsum = 0;
// let maxSum = arr[0];
// let minSum = arr[0];
// let findSum = 3;
// let findSumCount = 0;

// for (let i = 0; i < arr.length; i++) {
// 	let sub = [];
// 	let lastSum = 0;
// 	for (let j = i; j < arr.length; j++) {
// 		sub.push(arr[j]);
// 		if (lastSum === 0) {
// 			lastSum += arr[j];
// 		} else {
// 			lastSum = lastSum + arr[j];
// 		}

// 		console.log("sub array", [...sub]);
// 		if (lastSum === findSum) {
// 			findSumCount += 1;
// 		}
// 		if (lastSum > maxSum) {
// 			maxSum = lastSum;
// 		}
// 		if (lastSum < minSum) {
// 			minSum = lastSum;
// 		}

// 		finalsum += lastSum;
// 	}
// }

// console.log("finalsum", finalsum);

// console.log("maxSum", maxSum);
// console.log("minSum", minSum);
// console.log("count subarray with sum=k:", findSumCount);

function printAllSubArrays(arr) {
	console.log("--- Print All Subarrays ---");
	for (let i = 0; i < arr.length; i++) {
		let sub = [];
		for (let j = i; j < arr.length; j++) {
			sub.push(arr[j]);
			console.log([...sub]);
		}
	}
}

function countSubArrays(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			count += 1;
		}
	}

	console.log("---Count Total SubArrays----");
	console.log(count);
}

function sumOfAllSubArrays(arr) {
	let finalSum = 0;
	for (let i = 0; i < arr.length; i++) {
		let runningSum = 0;
		for (let j = i; j < arr.length; j++) {
			runningSum += arr[j];
			finalSum += runningSum;
		}
	}
	console.log("---Sum of All Subarrays---", finalSum);
}

function maxSubarraySum(arr) {
	let maxSum = arr[0];
	for (let i = 0; i < arr.length; i++) {
		let runningSum = 0;
		for (let j = i; j < arr.length; j++) {
			runningSum += arr[j];

			if (runningSum > maxSum) {
				maxSum = runningSum;
			}
		}
	}
	console.log("── Maximum Subarray Sum ──");
	console.log("Max Sum:", maxSum);
}

// ─────────────────────────────────────────
// 5. Minimum Subarray Sum
// ─────────────────────────────────────────

function minSubarraySum(arr) {
	let minSum = arr[0];
	for (let i = 0; i < arr.length; i++) {
		let runningSum = 0;
		for (let j = i; j < arr.length; j++) {
			runningSum += arr[j];

			if (runningSum < minSum) {
				minSum = runningSum;
			}
		}
	}
	console.log("── Minimum Subarray Sum ──");
	console.log("Min Sum:", minSum);
}

// ─────────────────────────────────────────
// 6. Count Subarrays with Sum = K
// ─────────────────────────────────────────

function countSubarraysWithSumK(arr, k) {
	let findSumCount = 0;
	for (let i = 0; i < arr.length; i++) {
		let runningSum = 0;
		for (let j = i; j < arr.length; j++) {
			runningSum += arr[j];
			if (runningSum === k) {
				findSumCount++;
			}
		}
	}
	console.log("── Count Subarrays with Sum = K ──");
	console.log(`Count (K=${k}):`, findSumCount);
}

// ─────────────────────────────────────────
// 7. . Longest Subarray with Sum = K
// ─────────────────────────────────────────

//arr = [1, 2, 1, 1, 1]
function longestSubarraywithSumK(arr, k) {
	let longestLength = 0;

	for (let i = 0; i < arr.length; i++) {
		let runningSum = 0;
		let sub = [];
		for (let j = i; j < arr.length; j++) {
			runningSum += arr[j];
			sub += arr[j];
			if (runningSum === k) {
				if (sub.length > longestLength) {
					longestLength = sub.length;
				}
			}
		}
	}
	console.log("__Longest Subarray with Sum = K __");
	console.log("Longest sub array with length K:", longestLength);
	return longestLength;
}

// ─────────────────────────────────────────
// 8. Subarray with Given Sum Exists
// ─────────────────────────────────────────
function subarrayWithSumExists(arr, k) {
	for (let i = 0; i < arr.length; i++) {
		let sum = 0;
		for (j = i; j < arr.length; j++) {
			sum += arr[j];

			if (sum === k) {
				return true;
			}
		}
	}
	return false;
}
// ─────────────────────────────────────────
// 9. Print Subarrays with Sum = 0
// ─────────────────────────────────────────

printAllSubArrays(arr);
countSubArrays(arr);
sumOfAllSubArrays(arr);
maxSubarraySum(arr);
minSubarraySum(arr);
countSubarraysWithSumK(arr, 3);
longestSubarraywithSumK([1, 2, 1, 1, 1], 3);
console.log(subarrayWithSumExists([4, 2, -1, 1], 3));
