/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    
    let queue = [root];
    let max = 0;
    let level = 1;
    let answ = 0;
    
    while(queue.length){
        let queueSize = queue.length;
        let sum = 0;
        for(let i = 0; i < queueSize; i++){
            let node = queue.shift();
            
            if(node.left){
                queue.push(node.left);
            }
            
            if(node.right){
                queue.push(node.right);
            }
            
            sum += node.val
            
        }
        if(sum > max){
            max = sum;
            answ = level;
        }
        level++
    }
    
    return answ
    
};