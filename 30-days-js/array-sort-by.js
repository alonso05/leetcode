/**
 * Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.
You may assume that fn will never duplicate numbers for a given array.

Example 1:
Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
Output: [1, 2, 3, 4, 5]
Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.

Example 2:
Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
Output: [{"x": -1}, {"x": 0}, {"x": 1}]
Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.

Example 3:
Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
Output: [[10, 1], [5, 2], [3, 4]]
Explanation: arr is sorted in ascending order by number at index=1.
 */

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a,b)=>fn(a) - fn(b))
};

const arr = [5, 4, 1, 2, 3]
const fn = (x) => x
console.log(sortBy(arr, fn))

const arr2 = [{"x": 1}, {"x": 0}, {"x": -1}]
const fn2 = (d) => d.x
console.log(sortBy(arr2, fn2))

const arr3 = [[3, 4], [5, 2], [10, 1]]
const fn3 = (x) => x[1]
console.log(sortBy(arr3, fn3))