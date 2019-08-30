/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if(root == null) return []
    let queue = [root];
    let levelsLargest = [];
    
    while(queue.length){
        let queueSize = queue.length;
        let max = Number.MIN_SAFE_INTEGER;
        
        for(let i = 0; i < queueSize; i++){
            let node = queue.shift();
            
            if(node.val > max){
                max = node.val;
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        levelsLargest.push(max)
    }
    
    return levelsLargest
};