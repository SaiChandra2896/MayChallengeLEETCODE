/*
REMOVE k DIGITS

Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
*/


/*
It's an example of Optimization problem as its asking the minimum number.
The problems like this can be solved by an algorithm called greedy algorithm.
Here we have to remove 3 numbers. So we can go with greedy approch.
we will push all the small elements into the stack

*****
In this approach for every element in the string before pushing into the stack we will make sure that all the numbers present in 
the stack are less than the specific element by running a loop on the stack. Once we remove all the greater elements then we will
push the current element which is called as LOCAL OPTIMIZATION.

This LOCAL OPTIMIZATION ultimately leads to GLOBAL OPTIMIZATION which is what we wanted.
*****
*/

//greedy algorithm example
const removeKdigits = (num, k) => {
    if (k === num.length) return '0';
    let stack = [];
    let removed = 0;

    //loop through the string (By the end of the loop we may achieve GLOBAL OPTIMIZATION)
    for (let i = 0; i < num.length; i++) {
        //Remove all the elements greater than the current element by looping over the stack before pushing the element
        //LOCAL OPTIMIZATION
        while (stack.length && removed < k && num[i] < stack[stack.length - 1]) {
            stack.pop();
            removed++;
        }
        //console.log(stack)
        stack.push(num[i]);
    }
    //console.log(stack);

    //edge case for strings like '11111' nothing deletes coz all numbers are equal
    while (removed < k) {
        stack.pop();
        removed++;
    }

    //remove all the preceeding zeros
    while (stack[0] === '0') {
        stack.shift();
    }

    if (stack.length == 0) {
        return '0'
    }
    else {
        return stack.join('');
    }
}

console.log(removeKdigits("1432219", 3))

/*
num = "1432 219", k = 3  num[i]=1
stack = [1,2,1,9]
removed=3
*/