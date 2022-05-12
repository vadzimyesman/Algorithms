var sortedSquares = function(nums) {
    i=nums.length-1
    left = 0
    right=i
    let answer = []
    while(i>=0){
        if (Math.abs(nums[right])>Math.abs(nums[left])){
            answer[i]=nums[right]*nums[right]
    console.log(`left is ${nums[left]}, right is ${nums[right]}`)
            right--
        } else {
            answer[i]=nums[left]*nums[left]
            console.log(`left is ${nums[left]}, right is ${nums[right]}`)
            left++
        }
        i--
    }
    return answer
};

console.log(sortedSquares([-10,-5,1,2,4,7,10]))