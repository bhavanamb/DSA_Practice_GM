let arr = [10, 20, 30, 40, 50];

//____________1. Search Element in Sorted Array_____________
//___________________________________________________________
function binarySearchFindElement(arr, value) {
	let start = 0;
	let end = arr.length;
	while (start < end) {
		let mid = Math.round((start + end) / 2);
		if (value === arr[mid]) {
			return mid;
		} else if (value > arr[mid]) {
			start = mid + 1;
		} else if (value < arr[mid]) {
			end = mid - 1;
		}
	}
}

//______________2.First Occurrence of Element_______________
//______________________________________________________
//console.log("---- Search Element in Sorted Array");
//console.log(binarySearchFindElement(arr, 40));
//[2, 4, 4, 4, 6, 8]
//([2, 4, 6, 8], 8)
function firstOccurrenceOfElement(arr, value) {
	let start = 0;
	let end = arr.length - 1;
	if (arr.length === 0) {
		return -1;
	}
	if (arr.length === 1) {
		if (arr[0] === value) return 0;
		return -1;
	}
	while (start <= end) {
		let mid = Math.round((start + end) / 2);

		if (value === arr[mid]) {
			//console.log("mid", mid);
			if (arr[mid - 1] === value) {
				end = mid - 1;
			} else {
				return mid;
			}
		} else if (value < arr[mid]) {
			end = mid - 1;
		} else if (value > arr[mid]) {
			start = mid + 1;
		}
	}
}

// console.log("---- First Occurrence of Element");
// // 1. First occurrence is at index 0
//console.log(firstOccurrenceOfElement([4, 4, 4, 6, 8], 4)); // 0

// 2. Only one occurrence
// console.log(firstOccurrenceOfElement([2, 4, 6, 8], 4)); // 1

// // 3. Element not in array
// console.log(firstOccurrenceOfElement([2, 4, 6, 8], 5)); // undefined or -1

// // 4. All elements are the same
// console.log(firstOccurrenceOfElement([4, 4, 4, 4], 4)); // 0

// // 5. Single element array - match
// console.log(firstOccurrenceOfElement([4], 4)); // 0

// // 6. Single element array - no match
// console.log(firstOccurrenceOfElement([2], 4)); // undefined or -1

// //7. Last element
// console.log(firstOccurrenceOfElement([2, 4, 6, 8], 8)); // 3

//----------------------------------
// 3.Last Occurrence of Element
//-----------------------------------
function lastOccurrenceOfElement(arr, value) {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		if (value === arr[mid]) {
			if (arr[mid + 1] !== value) {
				return mid;
			} else {
				start = mid + 1;
			}
		} else if (value < arr[mid]) {
			end = mid - 1;
		} else if (value > arr[mid]) {
			start = mid + 1;
		}
	}
}
//console.log("lastOccurrenceOfElement");
//console.log(lastOccurrenceOfElement([2, 4, 4, 4, 6, 8], 4));

//----------------------------------
//9. First Bad Version

//-----------------------------------
//1,2,3,4,5,6,7

function isBadVersion(version) {
	return version >= 1;
}
function findBadVersion(n) {
	let start = 1;
	let end = n;
	let badVersionNumber;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (isBadVersion(mid)) {
			badVersionNumber = mid;
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return badVersionNumber;
}

//[4, 5, 6, 7, 0, 1, 2], 0
function findMinInRotatedSortedArray(arr, target) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		if (arr[start] <= arr[mid]) {
			if (target == arr[mid]) {
				return mid;
			} else if (target < arr[mid] && target >= arr[start]) {
				end = mid - 1;
			} else {
				start = mid + 1;
			}
		} else if (arr[start] >= arr[mid]) {
			if (target === arr[mid]) {
				return mid;
			} else if (target > arr[mid] && target < arr[start]) {
				start = mid + 1;
			} else if (target > arr[mid] && target > arr[start]) {
				end = mid - 1;
			} else if (target < arr[mid] && target < arr[end]) {
				end = mid - 1;
			}
		}
	}
}
// console.log("findMinInRotatedSortedArray");
// // Basic - target in right (unsorted) half
// console.log(findMinInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 1)); // → 4

// // Target in left (sorted) half
// console.log(findMinInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 5)); // → 1

//10. Find Peak Element (Local Maxima)

//arr = [1, 3, 2, 5, 1]
//go to mid element - 2 check if mid > mid-1 and mid+1
//element =

// Subarray with Equal 0s and 1s (Brute)
// Question:
// Find subarrays having equal number of 0s and 1s.
// Input:
// arr = [0,1,0,1]
// Output:
// 4

//Linear Search
// function findPeakElement(arr) {

// 	let currentIdx = Math.floor((0 + arr.length) / 2);

// 	while (currentIdx < arr.length) {
// 		if (
// 			arr[currentIdx] >= arr[currentIdx + 1] &&
// 			arr[currentIdx] >= arr[currentIdx - 1]
// 		) {
// 			return currentIdx;
// 		} else if (arr[currentIdx + 1] > arr[currentIdx]) {
// 			currentIdx = currentIdx + 1;
// 		} else if (arr[currentIdx - 1] > arr[currentIdx]) {
// 			currentIdx = currentIdx - 1;
// 		} else if (currentIdx === 0) {
// 			return currentIdx;
// 		} else if (currentIdx === arr.length - 1) {
// 			return currentIdx;
// 		}
// 	}
// }

//--------BINARY SEARCH-----------

function findPeakElement(arr) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		if (mid === 0) {
			return arr[0] > arr[1] ? 0 : 1;
		}

		if (mid === arr.length - 1) {
			return arr[mid] > arr[mid - 1] ? mid : mid - 1;
		}

		if (arr[mid] >= arr[mid + 1] && arr[mid] >= arr[mid - 1]) {
			return mid;
		} else if (arr[mid + 1] > arr[mid]) {
			start = mid + 1;
		} else if (arr[mid - 1] > arr[mid]) {
			end = mid - 1;
		}
	}
}

// Basic - peak in middle
//console.log(findPeakElement([1, 3, 20, 4, 1])); // → 2

function findSquareRoot(input) {
	let start = 1;
	let end = input;
	let result;

	if (input === 0) return 0;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		let midSquare = mid * mid;

		if (midSquare === input) {
			return mid;
		} else if (midSquare > input) {
			end = mid - 1;
		} else if (midSquare < input) {
			result = mid;
			start = mid + 1;
		}
	}
	return result;
}

// Perfect squares
console.log(findSquareRoot(4)); // → 5
// console.log(findSquareRoot(36)); // → 6
// console.log(findSquareRoot(1)); // → 1
// console.log(findSquareRoot(4)); // → 2
// console.log(findSquareRoot(100)); // → 10

//Non perfect squares (floor value)
console.log(findSquareRoot(8)); // → undefined or 2?
console.log(findSquareRoot(10)); // → undefined or 3?
console.log(findSquareRoot(15)); // → undefined or 3?

// Edge cases
console.log(findSquareRoot(0)); // → 0
console.log(findSquareRoot(2)); // → undefined or 1?
