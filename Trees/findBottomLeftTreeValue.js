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
var findBottomLeftValue = function(root) {
    if(root == null || !root.right && !root.left) return root.val
    let queue = [root];
    
    while(queue.length != 0){
        root = queue.shift();
        
        if(root.right){
            queue.push(root.right)
        }
        
        if(root.left){
            queue.push(root.left)
        }

    }
    return root.val;
};
