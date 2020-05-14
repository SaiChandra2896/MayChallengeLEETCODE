/*
IMPLEMENT TRIE (PREFIX TREE)

Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
*/

//To know more about TRIE visit: https://www.youtube.com/watch?v=AXjmTQ8LEoI&t=182s

//This could not work directly in vscode written in leetcode format necessary changes are to be made.

/**
 * Initialize your data structure here.
 */
let Trie = () => {
    this.children = {};
    this.isEnd = false;
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */

Trie.prototype.Insert = (word) => {
    let current = this; //root node
    let char;

    //iterate over the char and insert each word into TRIE
    for (let i = 0; i < word.length; i++) {
        char = word[i];
        if (!current.children[char]) {
            current.children[char] = new Trie();
        }
        current = current.children[char];
    }
}


/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.Search = (word) => {
    let current = this;
    let char;
    for (let i = 0; i < word.length; i++) {
        char = word[i];
        if (!current.children[char]) {
            return false;
        }
        current = current.children[char];
    }

    //check for the end of the word.
    if (current.isEnd) return true;
    return false;
}

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = (prefix) => {
    let current = this;
    let char;
    for (let i = 0; i < prefix.length; i++) {
        char = prefix[i];
        if (!current.children[char]) {
            return false;
        }
        current = current.children[char];
    }
    return true;
}

