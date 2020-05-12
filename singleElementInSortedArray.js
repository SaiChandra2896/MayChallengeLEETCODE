/*
SINGLE ELEMENT IN SORTED ARRAY

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

 

Example 1:

Input: [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: [3,3,7,7,10,11,11]
Output: 10
 

Note: Your solution should run in O(log n) time and O(1) space.
*/

const singleNonDuplicate = (nums) => {
    let numbers = {};
    let num;
    for (let i = 0; i < nums.length; i++) {
        num = nums[i]
        if (numbers[num]) numbers[num]++;
        else numbers[num] = 1;
    }

    for (let key in numbers) {
        if (numbers[key] === 1) return key;
    }
}

console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]))