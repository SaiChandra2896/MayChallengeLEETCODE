/*
RANSOM NOTE

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

//frequency counter pattern
const canConstruct = (ransomNote, magazine) => {
    let note = {};
    let mag = {};
    let char;
    //make a note object with letter as key and number of times as value from ransomNote
    for (let i = 0; i < ransomNote.length; i++) {
        char = ransomNote[i];
        if (note[char]) note[char]++;
        else note[char] = 1;
    }
    //make mag object with letter as key and number of times as value from magazine
    for (let j = 0; j < magazine.length; j++) {
        char = magazine[j];
        if (mag[char]) mag[char]++;
        else mag[char] = 1;
    }

    //now comparing the occurance of charecters in both objects
    for (let key in note) {
        if (!mag[key] || mag[key] < note[key]) return false;
    }
    return true;
}