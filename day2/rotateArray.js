// Complexity Analysis

// Time complexity: O(n). One pass is used to put the numbers in the new array. And another pass to copy the new array to the original one.

// Space complexity: O(n). Another array of the same size is used.
var rotate = function(nums, k) {
    let array=[]
    for (i=0;i<nums.length;i++){
        array[(i+k)%nums.length]=nums[i]
    }
    for (i=0;i<nums.length;i++){
        nums[i]=array[i]
    }
};

rotate([1,2,3,4,5,6,7],1)

//rotating by 1 position k times
//Time complexity: O(n×k). All the numbers are shifted by one step(\mathcal{O}(n)O(n)) k times.
//Space complexity: O(1) No extra space is used.
// var rotate1 = function(nums,k){
//     k%=nums.length
//     let temp,previous
//     for (i=0;i<k;i++){
//         previous=nums[nums.length-1]
//         for (j=0;j<nums.length;j++){
//             temp=nums[j]
//             nums[j]=previous
//             previous=temp
//         }
//     }
//     return nums
// }

var rotate2 = function(nums,k){
    k%=nums.length
    let count = 0
    for (start=0;count<nums.length;start++){
        let current = start
        let prev = nums[start]
        while(start!==current){
            let next = (current + k) % nums.length;
            let temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        }
    }
    console.log(nums)
}

rotate2([1,2,3,4,5,6,7],1)