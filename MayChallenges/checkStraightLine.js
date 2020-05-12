/*
CHECK IF IT IS A STRAIGHT LINE

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. 
Check if these points make a straight line in the XY plane.


Example 1:

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true


Example 2:

Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
 

Constraints:

2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.
*/

//we can check the slopes of the 2 points using formula slope = (y2-y1)/(x2-x1)

const checkStraightLine = (coordinates) => {
    if (coordinates.length <= 2) return true;
    //we take one point as arbitrary or fixed;
    let x1 = coordinates[0][0];
    let y1 = coordinates[0][1];
    //find slope b/w the first 2 points to compare with other  points
    let slope = (coordinates[1][1] - y1) / (coordinates[1][0] - x1);
    let tempslope = 0;
    //now loop through the array from 2nd index or third point find the tempslope b/w that point and [x1,y1] if it is a st. line 
    //the slope should be equal
    for (let i = 2; i < coordinates.length; i++) {
        tempslope = (coordinates[i][1] - y1) / (coordinates[i][0] - x1);
        if (tempslope !== slope) return false;
    }
    return true;
}

console.log(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]))
//[[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]