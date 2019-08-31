/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let combination = []
    let answ = [];
    
    getCombinations(1, n , k , answ)
    
    return answ;
    
    function getCombinations(start, n , k ,answ) {
        if(k == 0){
            answ.push(combination.slice())
        }
        
        for(let i = start; i <= n; i++){
            combination.push(i);
            getCombinations(i + 1, n, k - 1, answ);
            combination.pop()
        }
    }
    
};