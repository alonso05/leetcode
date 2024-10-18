/**
 * Group By

Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.
The provided callback fn will accept an item in the array and return a string key.
The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Example 1:
Input: 
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
], 
fn = function (item) { 
  return item.id; 
}
Output: 
{ 
  "1": [{"id": "1"}, {"id": "1"}],   
  "2": [{"id": "2"}] 
}
Explanation:
Output is from array.groupBy(fn).
The selector function gets the "id" out of each item in the array.
There are two objects with an "id" of 1. Both of those objects are put in the first array.
There is one object with an "id" of 2. That object is put in the second array.
 */

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const obj = {}
    for(let i=0; i<this.length; i++){
        const key = fn(this[i])
        if(obj[key] === undefined){
            obj[key] = [];
        }
        obj[key].push(this[i]);  
    }
    return obj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

console.log([1,2,3].groupBy(String))

const array1 = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"}
  ]

  const fn1 = function (item) { 
    return item.id; 
  }

  console.log(array1.groupBy(fn1))

  const array2 = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
  ]
  const fn2 = function (list) { 
    return String(list[0]); 
  }

  console.log(array2.groupBy(fn2))

  const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const fn3 = function (n) { 
    return String(n > 5);
  }

  console.log(array3.groupBy(fn3))