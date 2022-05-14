//my solution
var moveZeroes = function(nums) {
    let i = 0
    let zeroes = 0
    while (i<nums.length-zeroes){
      if (nums[i]===0){
        zeroes++
        nums.splice(i,1)
        nums.push(0)
      } else i++
    }
  };

// 1. using splice
var moveZeroes = function(nums) {
    let i = 0; // the pointer read each element of nums 
    let pointer = 0; // the pointer that indicates that element is 0
    
    while(i < nums.length) {
        if(nums[pointer] === 0) { //if element is 0, delete element and add 0 to the end of the nums
            nums.splice(pointer, 1);
            nums.push(0);
        }
        else pointer++;
        
        i++;
    }    
};
//2. two pointers
var moveZeroes = function(nums) {
    
    let zeroPointer = 0; // the pointer that indicates that element is 0
    let i = 0; // the pointer read each element of nums 
    
    while(i < nums.length) {
        if(nums[zeroPointer] === 0) { // if zeroPointer indicates 0 and nums[i](current value) is not 0,
									// swap 0 element with nums[i] 
            if(nums[i] !== 0) {
                const temp = nums[i];
                nums[i] = nums[zeroPointer];
                nums[zeroPointer] = temp;

                zeroPointer++;    
            }
        }
        else zeroPointer++;  // If the zeroPointer does not indicates to zero,  move zeroPointer to next index
        
        i++;
    }
    
    
};