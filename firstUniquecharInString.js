/*
FIRST UNIQUE CHARECTER IN STRING

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
 */

//frequency counter pattern
const firstUniquechar = (s) => {
    let chars = {};
    let char;
    for (let i = 0; i < s.length; i++) {
        char = s[i];
        if (chars[char]) chars[char]++;
        else chars[char] = 1;
    }

    for (let key in chars) {
        if (chars[key] === 1) return s.indexOf(key);
    }
    return -1;
}

console.log(firstUniquechar('abccba'))