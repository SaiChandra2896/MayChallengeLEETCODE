/*
COUSINS IN A BINARY TREE



In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.



Example 1:


Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:



Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false


Note:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.
*/



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

/*
I used Breadth First approach as it traverses through one level each time and the cousins also lie in the same level.

Cousins: The nodes which lie at same level with different patrnts.
*/

const isCousins = (root, x, y) => {
    let queue = [];
    let node = root;
    let foundx = false;
    let foundy = false;
    let size = 0;

    //start with node in the queue
    queue.push(node);
    while (queue.length) {
        foundx = false;
        foundy = false;

        //store the length in a variable as we are manipulating the size of queue using queue.shift(); 
        size = queue.length;
        //iterate at the queue as the queue contains the nodes which are at the same level;
        for (let i = 0; i < size; i++) {
            //get the first inserted node from the queue
            node = queue.shift();

            //check for the the children if they are children of the same node then we have to return false
            if (node.left && node.right) {
                if ((node.left.val === x && node.right.val == y) || (node.left.val === y && node.right.val === x)) {
                    return false;
                }
            }

            //if we find the value in the node
            if (node.val === x) foundx = true;
            if (node.val === y) foundy = true;

            //if we did not find the value then we have to push left and right nodes of the present node which is according to BFS.
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        //after looping if we find the values then return true
        if (foundx && foundy) return true;
    }
    return false;
}