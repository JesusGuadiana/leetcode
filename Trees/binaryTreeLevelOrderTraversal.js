/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root == null) return []
    let queue = [root];
    let answ = [];
    
    while(queue.length){
        let queueSize = queue.length;
        let levelValues = []

        for(let i = 0; i < queueSize; i++){
            let node = queue.shift();
            levelValues.push(node.val)
            
            if(node.left){
                queue.push(node.left)
            }
            
            if(node.right){
                queue.push(node.right)
            }
        }
        answ.push(levelValues);
    }
    
    return answ;
};