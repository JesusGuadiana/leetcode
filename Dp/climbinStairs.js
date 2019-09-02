/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let waysToClimb = [0,1,2];
    
    for(let i = 3; i <= n; i++){
        waysToClimb[i] = waysToClimb[i - 2] + waysToClimb[i - 1];
    }
    
    return waysToClimb[n]
};