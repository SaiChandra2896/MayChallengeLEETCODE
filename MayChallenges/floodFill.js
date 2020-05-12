/*
FLOOD FILL

An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.

Example 1:
Input: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: 
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
Note:

* The length of image and image[0] will be in the range [1, 50].
* The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
* The value of each color in image[i][j] and newColor will be an integer in [0, 65535].
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

//Here we use Depth first Search (DFS) to flood Fill the image.
//using helper function recursion strategy
const floodFill = (image, sr, sc, newColor) => {
    //verify the edge case
    if (image[sr][sc] === newColor) return image;

    //A helper function to recursively foodFill the image which takes old color also to keep track so that we have to fill only
    //initial color.
    const flood_fill = (image, r, c, newColor, oldColor) => {
        // handle if the coordinate is out of bounds
        // or if it's not from the original color we're trying to change
        if (r < 0 || c < 0 || r >= image.length || c >= image[r].length || image[r][c] !== oldColor) return;

        //if it satisfies the conditions we will color the current pixel.
        image[r][c] = newColor;

        //no we recursively color the adjacent pixels
        flood_fill(image, r + 1, c, newColor, oldColor)//down pixel
        flood_fill(image, r - 1, c, newColor, oldColor)//top pixel
        flood_fill(image, r, c + 1, newColor, oldColor)//right pixel
        flood_fill(image, r, c - 1, newColor, oldColor)//left pixel
    }

    //invoke the helper function
    flood_fill(image, sr, sc, newColor, image[sr][sc]);


    return image;
}

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));