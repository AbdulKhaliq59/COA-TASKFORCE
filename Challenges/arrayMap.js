/**
 * Determines if there exists a contiguous subarray within the array that sums up to the target.
 * @param {number[]} arr - The input array of integers.
 * @param {number} target - The target sum to find within a contigous subarray
 * @returns {boolean} -Return true if such a subarray exists, otherwise false
 */

function hasContigousSubarrayWithSum(arr, target) {
    let currentSum = 0;
    let start = 0;
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }
    }
    return false;
}


//example test case
const arr = [4, 2, 7, 1, 9, 5];
const target = 17
console.log(hasContigousSubarrayWithSum(arr, target));