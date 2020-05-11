/*
FIND THE TOWN JUDGE

In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

1.The town judge trusts nobody.
2.Everybody (except for the town judge) trusts the town judge.
3.There is exactly one person that satisfies properties 1 and 2.

You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.



Example 1:

Input: N = 2, trust = [[1,2]]
Output: 2
Example 2:

Input: N = 3, trust = [[1,3],[2,3]]
Output: 3
Example 3:

Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
Example 4:

Input: N = 3, trust = [[1,2],[2,3]]
Output: -1
Example 5:

Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
*/

const findJudge = (N, trust) => {
    //using the index numbers as pointers we can construct 2 arrays with that names and N+1 size as indexing start from zero.
    //and fill evry element with zero
    const trusting = new Array(N + 1).fill(0);// keep track of count of people this person trusts
    const trustedBy = new Array(N + 1).fill(0);// keep track of count of people that trust this person
    //console.log(truster);

    //iterate through thr trust array get the numbers if we find those numbers we will icrement the number at that index position
    //in the respective array.
    for (let i = 0; i < trust.length; i++) {
        let [a, b] = trust[i];

        trusting[a]++;
        trustedBy[b]++;
    }
    // console.log(trusting, 'trusting');
    // console.log(trustedBy, 'trusted By');

    //now iteratively check for the conditions and return the number
    for (let i = 1; i < N + 1; i++) {
        if (trusting[i] === 0 && trustedBy[i] === N - 1) return i;
    }
    return -1;
}

console.log(findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]))