/*
VALID PERFECT SQUARE


Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true
Example 2:

Input: 14
Output: false

*/

const isPerfectSquare = (num) => {
    if (num === 0 || num === 1) return true;

    let root = num / 2;
    for (let i = 0; i <= root; i++) {
        if (i ** 2 === num) return true;
    }
    return false;
}