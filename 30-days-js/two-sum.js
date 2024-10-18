/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 * 
 * Write a function that, when passed an array and a target sum, returns, efficiently with respect to time used, two distinct zero-based indices of any two of the numbers, whose sum is equal to the target sum. If there are no two numbers, the function should return null.
 * For example, findTwosum ([ 3, 1, 5, 7, 5, 9], 10) should return an array containing any of the following pairs of indices:
• 0 and 3 (or 3 and 0) as 3 + 7 = 10
• 1 and 5 (or 5 and 1) as 1 + 9 = 10
• 2 and 4 (or 4 and 2) as 5 + 5 = 10
 */
function findTwoSum(numbers, sum) {
    // let pairIndex = []
    // let numberMatch
    // for(let i=0; i< numbers.length; i++){
    //     numberMatch = numbers.find((value, index) => {
    //         if(index != i){
    //             if(numbers[i] + value === sum){
    //                 pairIndex.push(i)
    //                 pairIndex.push(index)
    //                 return value
    //             }
    //         }
    //     })
    //     if(numberMatch){
    //         break
    //     }
    // }
    // if(numberMatch === undefined){
    //     return null
    // }
    // else
    //     return pairIndex

        const numToIndex = new Map();
        for (let i = 0; i < numbers.length; i++) {
          const complement = sum - numbers[i];
          if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
          }
          numToIndex.set(numbers[i], i);
        }
        return null;

  }
  
  const indices = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10);
  console.log(indices);